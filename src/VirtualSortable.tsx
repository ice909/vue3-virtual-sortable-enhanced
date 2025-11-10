import {
  computed,
  defineComponent,
  isRef,
  onBeforeMount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { VirtualProps } from './props';
import { useVirtualList } from '@vueuse/core';
import {
  DragEvent,
  DropEvent,
  isSameValue,
  Sortable,
  SortableAttrs,
  SortableOptions,
} from './core';
import { SortableEvent } from './types';
import Item from './item';

const getList = (source: any) => {
  return isRef(source) ? source.value : source;
};

function getDataKey(item, dataKey: string | string[]): string | number {
  return (
    !Array.isArray(dataKey)
      ? dataKey.replace(/\[/g, '.').replace(/\]/g, '.').split('.')
      : dataKey
  ).reduce((o, k) => (o || {})[k], item);
}

export default defineComponent({
  props: VirtualProps,
  setup(props, { emit, slots, expose }) {
    const data = ref<any[]>([]);
    const dragging = ref<boolean>(false);
    const wrapperRef = ref<HTMLElement | null>(null);
    let uniqueKeys: (string | number)[] = [];
    let sortable: Sortable<any>;
    const chosenKey = ref<string>('');

    const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
      data,
      {
        itemHeight: props.getItemHeight!,
        overscan: 30,
      },
    );

    const updateUniqueKeys = () => {
      uniqueKeys = data.value.map((item) => getDataKey(item, props.dataKey));
      sortable?.option('uniqueKeys', uniqueKeys);
    };

    function onModelUpdate() {
      const _data = getList(props.modelValue);
      if (!_data) return;
      data.value = _data;

      updateUniqueKeys();

      sortable?.option('list', _data);
    }

    watch(
      () => [props.modelValue],
      () => {
        onModelUpdate();
      },
      {
        deep: true,
      },
    );

    const onDrag = (event: DragEvent<any>) => {
      dragging.value = true;
      if (!props.sortable) {
        sortable.option('autoScroll', false);
      }
      emit('drag', event);
    };

    const onDrop = (event: DropEvent<any>) => {
      dragging.value = false;

      sortable.option('autoScroll', props.autoScroll);

      if (event.changed) {
        emit('update:modelValue', event.list);
      }
      emit('drop', event);
    };

    const onDragChange = (event: SortableEvent) => {
      emit('dragChange', event);
    };

    const onChoose = (event: SortableEvent) => {
      chosenKey.value = event.node.getAttribute('data-key') as string;
    };

    const onUnchoose = () => {
      chosenKey.value = '';
    };

    function onItemResized(size: number, key: string | number) {
      if (isSameValue(key, chosenKey.value)) {
        return;
      }
    }

    const sortableAttributes = computed(() => {
      return SortableAttrs.reduce(
        (res, key) => {
          res[key] = props[key as keyof typeof props];
          return res;
        },
        {} as Record<string, any>,
      );
    });

    watch(sortableAttributes, (newVal, oldVal) => {
      if (!sortable) return;
      for (let key in newVal) {
        if (newVal[key] !== oldVal[key]) {
          sortable.option(key as keyof SortableOptions<any>, newVal[key]);
        }
      }
    });
    function installSortable() {
      sortable = new Sortable(containerProps.ref.value!, {
        ...sortableAttributes.value,
        list: data.value,
        uniqueKeys: uniqueKeys,
        onDrag,
        onDrop,
        onChoose,
        onUnchoose,
        onDragChange,
      });
    }

    function scrollToIndex(index: number) {
      if (scrollTo) {
        scrollTo(index);
      }
    }

    function scrollToKey(key: string | number) {
      const index = data.value.findIndex((item) => {
        return isSameValue(getDataKey(item, props.dataKey), key);
      });

      if (index !== -1 && scrollTo) {
        scrollTo(index);
      }
    }

    function scrollToBottom() {
      scrollToIndex(data.value.length - 1);
    }

    function scrollToTop() {
      scrollToIndex(0);
    }

    function getClientSize() {
      return {
        width: containerProps.ref.value?.clientWidth || 0,
        height: containerProps.ref.value?.clientHeight || 0,
      };
    }

    function getWrapperSize() {
      return {
        width: wrapperRef.value?.offsetWidth || 0,
        height: wrapperRef.value?.offsetHeight || 0,
      };
    }

    onBeforeMount(() => {
      onModelUpdate();
    });

    onMounted(() => {
      installSortable();
    });

    expose({
      getClientSize,
      getWrapperSize,
      scrollToKey,
      scrollToBottom,
      scrollToTop,
      scrollToIndex,
    });

    return () => (
      <div
        {...containerProps}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        <div ref={wrapperRef} {...wrapperProps.value}>
          {list.value.map((item, index) => {
            const dataKey = getDataKey(item.data, props.dataKey);
            const isHidden =
              dragging.value && isSameValue(dataKey, chosenKey.value);
            return (
              <Item
                key={dataKey}
                dataKey={dataKey}
                style={{
                  display: isHidden ? 'none' : 'flex',
                }}
                sizeKey="offsetHeight"
                onResize={onItemResized}
                v-slots={{
                  default: () => slots.item?.({ item: item.data, index }),
                }}
              ></Item>
            );
          })}
        </div>
      </div>
    );
  },
});
