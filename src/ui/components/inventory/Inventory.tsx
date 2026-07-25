import { Modal } from 'solid-bootstrap';
import { inventory, show, resume } from '@/src/setup/store';
import { createSignal, Show } from 'solid-js';
import Collection from '@/src/ui/components/inventory/components/Collection';
import ConsoleCard from '@/src/ui/components/inventory/components/ConsoleCard';

type Tab = 'console' | 'cartridges';

const ConsoleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <rect x="7" y="5" width="10" height="7" rx="1" />
    <path d="M9 17h.01M12 17h.01M15 17h.01" />
  </svg>
);

const CartridgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 2h10v4h2v16H5V6h2V2Z" />
    <path d="M9 2v4M15 2v4" />
  </svg>
);

export default function Inventory() {
  const [tab, setTab] = createSignal<Tab>('console');
  const handleClose = () => resume();

  return (
    <Modal show={show.inventory} onHide={handleClose} fullscreen={true} keyboard={true} contentClass="gb-panel gb-panel--wide">
      <Modal.Header class="justify-content-center">
        <Modal.Title>My inventory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="gb-sidebar-layout">
          <nav class="gb-sidebar-nav">
            <button
              type="button"
              class="gb-sidebar-nav__item"
              classList={{ 'gb-sidebar-nav__item--active': tab() === 'console' }}
              onClick={() => setTab('console')}
            >
              <span class="gb-sidebar-nav__icon">
                <ConsoleIcon />
              </span>
              Console
            </button>
            <button
              type="button"
              class="gb-sidebar-nav__item"
              classList={{ 'gb-sidebar-nav__item--active': tab() === 'cartridges' }}
              onClick={() => setTab('cartridges')}
            >
              <span class="gb-sidebar-nav__icon">
                <CartridgeIcon />
              </span>
              Cartridges
              <span class="gb-sidebar-nav__badge">{inventory.cartridges.length}</span>
            </button>
          </nav>

          <div class="gb-sidebar-content">
            <Show when={tab() === 'console'}>
              <h4 class="gb-section-heading mb-3">Console</h4>
              <ConsoleCard />
            </Show>
            <Show when={tab() === 'cartridges'}>
              <Collection />
            </Show>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', 'justify-content': 'flex-end', padding: '1rem' }}>
        <button
          class="gb-close-button"
          onClick={handleClose}
          style={{
            padding: '10px 20px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
            'border-radius': '6px',
            'font-weight': 'bold',
            'font-size': '14px',
            cursor: 'pointer',
            transition: 'transform 0.1s ease, background 0.1s ease',
            'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.3)',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          CLOSE INVENTORY
        </button>
      </Modal.Footer>
    </Modal>
  );
}
