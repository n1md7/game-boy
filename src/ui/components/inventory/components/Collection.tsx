import { Button, Card, Image, Col, Row, Badge } from 'solid-bootstrap';
import { inventory } from '@/src/setup/store';
import { Show } from 'solid-js';

const style = {
  'font-family': 'monospace',
};
export default function Collection() {
  const badges = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  const getBadge = (idx: number) => badges[idx % badges.length];

  return (
    <Show
      when={inventory.cartridges.length > 0}
      fallback={
        <div class="row d-flex justify-content-center align-items-center h-100">
          <h3 class="text-muted text-center">No cartridges collected</h3>
        </div>
      }
    >
      <div class="row m-0 gy-4" style={style}>
        <div class="row">
          <div class="col">
            <h3 class="text-muted text-center">Cartridges</h3>
          </div>
        </div>
        <div class="col">
          <Row xs={1} md={2} lg={3} xl={3} xxl={4} class="g-4 justify-content-center">
            {inventory.cartridges.map((cartridge) => (
              <Col>
                <Card>
                  <Image src={cartridge.thumbnail.image.src} class="card-img-top" style={{ 'max-height': '18rem' }} />
                  <Card.Body>
                    <Card.Title>
                      <strong>{cartridge.name}</strong>
                    </Card.Title>
                    <Card.Text>
                      {cartridge.description}
                      <hr />
                      {cartridge.tags.map((tag, idx) => (
                        <Badge bg={getBadge(idx)} class="mx-1 text-uppercase">
                          <strong>{tag}</strong>
                        </Badge>
                      ))}
                    </Card.Text>
                    <Button variant="outline-dark" size="lg" class={'w-100'}>
                      Click to insert
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Show>
  );
}
