import { resume, show } from '@/src/setup/store';
import { Modal, Row, Col, Button, Form } from 'solid-bootstrap';

export default function Menu() {
  const handleResume = () => resume();

  return (
    <Modal show={show.menu} fullscreen={true} keyboard={false}>
      <Modal.Header class="justify-content-center">
        <Modal.Title>Game Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row class="my-0">
          <Row class="g-2">
            <Col class="d-flex justify-content-center">
              <Button variant="primary" size="lg" class={'w-50'} onClick={handleResume}>
                Resume
              </Button>
            </Col>
          </Row>
          <Row class="g-2">
            <h4 class="text-muted text-center mb-3">Display Settings</h4>
            <Col class="d-flex justify-content-center">
              <Form.Group>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="displayOption" id="gameBoyDisplay" value="gameBoy" />
                  <label class="form-check-label" for="gameBoyDisplay">
                    Show only in GameBoy
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="displayOption" id="projectorDisplay" value="projector" />
                  <label class="form-check-label" for="projectorDisplay">
                    Show only in projector
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="displayOption" id="mirrorDisplay" value="mirror" />
                  <label class="form-check-label" for="mirrorDisplay">
                    Mirror display to projector
                  </label>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row class="justify-content-center gy-3">
            <h4 class="text-muted text-center mb-3">Controls</h4>
            <Col lg={6} class="text-center">
              <p>
                <strong>
                  <kbd>WASD</kbd>
                </strong>{' '}
                to move
              </p>
              <p>
                <strong>
                  <kbd>Shift</kbd>
                </strong>{' '}
                to run
              </p>
              <p>
                <strong>
                  <kbd>Space</kbd>
                </strong>{' '}
                to jump
              </p>
              <p>
                <strong>
                  <kbd>Tab</kbd>
                </strong>{' '}
                to open Inventory menu
              </p>
              <p>
                <strong>
                  <kbd>Esc</kbd>
                </strong>{' '}
                to open Menu
              </p>
            </Col>
          </Row>
          <Row class="g-2 justify-content-center gy-3">
            <h4 class="text-muted text-center mb-3">Game objective</h4>
            <Col lg={6} class="text-center">
              <p>
                Collect all the cartridges and insert them into the console. You can find them in the game world, but{' '}
                <strong class="text-decoration-line-through">beware of the enemies!</strong>
              </p>
              <p>
                Game can be played with the GameBoy controller. It can be connected to projector screen inside of the virtual
                world
              </p>
            </Col>
          </Row>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
