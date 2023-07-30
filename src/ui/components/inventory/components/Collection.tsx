import { Button, Card, Image, Col, Row, Badge } from 'solid-bootstrap';
import { inventory, resume, showModal } from '@/src/setup/store';
import { Show } from 'solid-js';
import { Cartridge } from '@/src/game-boy/components/Cartridge';

export default function Collection() {
  const badges = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  const getBadge = (idx: number) => badges[idx % badges.length]; // Round-robin

  const handleCartridgeInsert = (cartridge: Cartridge) => () => {
    if (!inventory.gameBoy) return showModal('Warning', 'You need to pick up the Game Boy first!');

    inventory.gameBoy.removeCartridge();
    resume();
    inventory.gameBoy.insertCartridge(cartridge).then();
  };

  return (
    <>
      <Show
        when={inventory.gameBoy}
        fallback={
          <div class="row d-flex justify-content-center align-items-center h-100">
            <h3 class="text-muted text-center">No Game Boy collected</h3>
          </div>
        }
      >
        <div class="row m-0 gy-4 mb-3">
          <div class="col">
            <Row class="g-4 justify-content-center">
              <Card style={{ width: '48rem' }}>
                <Card.Body class="px-0">
                  <Card.Title>
                    <strong>The Game Boye</strong>
                  </Card.Title>
                  <Card.Subtitle class="mb-2 text-muted">You have collected it</Card.Subtitle>
                  <Image src="images/game-boy.png" class="w-100" thumbnail />
                  <Card.Text>
                    <p class="text-secondary small mt-2">
                      The Game Boy is a popular handheld gaming console that was released by Nintendo in 1989. It is one of the
                      most iconic and influential gaming devices in the history of video games. The Game Boy was designed by
                      Gunpei Yokoi and his team at Nintendo.
                    </p>

                    <hr />

                    <p>Choose cartridge below to play the game.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </div>
        </div>
      </Show>
      <Show
        when={inventory.cartridges.length > 0}
        fallback={
          <div class="row d-flex justify-content-center align-items-center h-100">
            <h3 class="text-muted text-center">No cartridges collected</h3>
          </div>
        }
      >
        <div class="row m-0 gy-4">
          <div class="row">
            <div class="col">
              <h3 class="text-muted text-center">Your cartridges</h3>
            </div>
          </div>
          <div class="col">
            <Row class="g-4 justify-content-center">
              {inventory.cartridges.map((cartridge) => (
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={3}>
                  <Card>
                    <Image src={cartridge.thumbnail.image.src} class="card-img-top" style={{ 'max-height': '24rem' }} />
                    <Card.Body>
                      <Card.Title>
                        <strong>{cartridge.name}</strong>
                      </Card.Title>
                      <Card.Text>
                        <p class="text-secondary small">{cartridge.description}</p>
                        <hr />
                        {cartridge.tags.map((tag, idx) => (
                          <Badge bg={getBadge(idx)} class="mx-1 text-uppercase">
                            <strong>{tag}</strong>
                          </Badge>
                        ))}
                      </Card.Text>
                      <Button variant="outline-dark" size="lg" class={'w-100'} onClick={handleCartridgeInsert(cartridge)}>
                        Insert cartridge and play
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Show>
    </>
  );
}
