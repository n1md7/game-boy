import { Button, Card, Image, Col, Row, Badge } from 'solid-bootstrap';
import { inventory, resume, setRef, showModal } from '@/src/setup/store';
import { Show } from 'solid-js';
import { Cartridge } from '@/src/game-boy/components/Cartridge';

const EmptyCartridgeIcon = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    style={{ width: '80px', height: '80px', margin: '0 auto 20px', opacity: 0.5 }}
  >
    <path d="M20 10h60v80H20Z" />
    <path d="M30 10v10M50 10v10M70 10v10" />
    <path d="M15 60h70" stroke-width="2" />
    <circle cx="50" cy="35" r="15" stroke-width="2" />
    <path d="M50 25v20M40 35h20" stroke-width="2" />
  </svg>
);

export default function Collection() {
  const badges = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  const getBadge = (idx: number) => badges[idx % badges.length]; // Round-robin

  const handleCartridgeInsert = (cartridge: Cartridge) => () => {
    if (!inventory.gameBoy) return showModal('Warning', 'You need to pick up the Game Boy first!');

    inventory.gameBoy.removeCartridge();
    resume();
    inventory.gameBoy.insertCartridge(cartridge).then(() => {
      setRef({ cartridge });
    });
  };

  return (
    <Show
      when={inventory.cartridges.length > 0}
      fallback={
        <div
          class="gb-empty-cartridges"
          style={{
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            height: '100%',
            'min-height': '400px',
            'text-align': 'center',
          }}
        >
          <EmptyCartridgeIcon />
          <h3 class="gb-empty-state" style={{ margin: '0 0 10px 0', color: 'var(--bs-secondary-color)' }}>
            No cartridges collected
          </h3>
          <p class="text-secondary" style={{ 'font-size': '14px', 'max-width': '300px', margin: '0' }}>
            Explore the room and find cartridges to play different games. Look around carefully!
          </p>
        </div>
      }
    >
      <h4 class="gb-section-heading mb-3">Your Cartridges</h4>
      <Row class="g-4 justify-content-center">
        {inventory.cartridges.map((cartridge) => (
          <Col xs={12} sm={10} md={6} lg={6} xl={4} class="d-flex">
            <Card class="gb-card gb-card--cartridge h-100 flex-fill">
              <Image src={(cartridge.thumbnail.image as HTMLImageElement).src} class="card-img-top" />
              <Card.Body class="d-flex flex-column flex-grow-1">
                <Card.Title>
                  <strong>{cartridge.name}</strong>
                </Card.Title>
                <div class="gb-card__text flex-grow-1">
                  <p class="text-secondary small gb-card__description">{cartridge.description}</p>
                  <hr />
                  <div class="gb-badge-row">
                    {cartridge.tags.map((tag, idx) => (
                      <Badge bg={getBadge(idx)} class="text-uppercase">
                        <strong>{tag}</strong>
                      </Badge>
                    ))}
                  </div>
                  <hr />
                  <div class="gb-badge-row gb-badge-row--keys">
                    {cartridge.keys.map(({ key, fn }) => (
                      <Badge bg="secondary" class="gb-key-badge">
                        <em class="text-info-emphasis">{key}</em> - <span>{fn}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="primary" size="lg" class={'w-100 mt-3'} onClick={handleCartridgeInsert(cartridge)}>
                  Insert cartridge and play
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Show>
  );
}
