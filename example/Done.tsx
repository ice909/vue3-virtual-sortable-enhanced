import { defineComponent } from 'vue';
import { Data } from './App';

type Props = {
  item: Data;
};

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { item } = props;

    return () => (
      <div
        data-key={item.id}
        data-id={item.id}
        style={{
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          background: 'green',
          borderRadius: '8px',
          margin: '0 8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb',
          cursor: 'grab',
          transition: 'background 0.2s, box-shadow 0.2s',
        }}
      >
        <span class="content" style={{ userSelect: 'none' }}>
          {item.title}
        </span>
      </div>
    );
  },
});
