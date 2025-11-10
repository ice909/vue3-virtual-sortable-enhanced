import { defineComponent } from 'vue';

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
        data-draggable
        data-key={item.id}
        data-id={item.id}
        style={{
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          background: '#fff',
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
