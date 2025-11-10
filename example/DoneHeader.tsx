import { emit } from 'process';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['collapsed'],
  setup(props, { emit }) {
    const { item, collapsed } = props;
    return () => (
      <div
        data-key={item.id}
        data-id={item.id}
        style={{
          height: '100px',
          background: 'blue',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        <span>Done</span>
        <span
          style={{
            cursor: 'pointer',
          }}
          onClick={() => emit('collapsed')}
        >
          {collapsed ? '展开' : '收起'}
        </span>
      </div>
    );
  },
});
