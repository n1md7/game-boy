import { Button, Image, Badge } from 'solid-bootstrap';
import { inventory, resume, setRef, showModal } from '@/src/setup/store';
import { Show } from 'solid-js';
import { Cartridge } from '@/src/game-boy/components/Cartridge';

const EmptyCartridgeIcon = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    style={{ width: '80px', height: '80px', margin: '0 auto 20px', opacity: 0.5 }}
  >
    <rect x="15" y="12" width="70" height="70" rx="4" />
    <rect x="25" y="20" width="50" height="35" />
    <line x1="30" y1="12" x2="30" y2="20" />
    <line x1="50" y1="12" x2="50" y2="20" />
    <line x1="70" y1="12" x2="70" y2="20" />
    <circle cx="50" cy="65" r="4" fill="currentColor" />
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
        <div class="gb-empty-cartridges">
          <EmptyCartridgeIcon />
          <h3 class="gb-empty-state">No cartridges collected</h3>
          <p class="gb-empty-hint">Explore the room and find cartridges to play different games. Look around carefully!</p>
        </div>
      }
    >
      <h4 class="gb-section-heading mb-3">Your Cartridges</h4>
      <div class="gb-cartridges-grid">
        {inventory.cartridges.map((cartridge) => (
          <div class="gb-cartridge-card-mobile">
            <div class="gb-cartridge-image">
              <Image src={(cartridge.thumbnail.image as HTMLImageElement).src} />
            </div>
            <div class="gb-cartridge-content">
              <h5 class="gb-cartridge-title">{cartridge.name}</h5>
              <p class="gb-cartridge-description">{cartridge.description}</p>
              <div class="gb-cartridge-tags">
                {cartridge.tags.map((tag, idx) => (
                  <Badge bg={getBadge(idx)} class="text-uppercase">
                    <strong>{tag}</strong>
                  </Badge>
                ))}
              </div>
              <Button variant="primary" class={'gb-play-btn'} onClick={handleCartridgeInsert(cartridge)}>
                Play
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Show>
  );
}
