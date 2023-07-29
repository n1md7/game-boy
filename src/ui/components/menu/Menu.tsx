import { inventory, mute, resume, show, unmute } from '@/src/setup/store';
import { Modal, Row, Col, Button, Form } from 'solid-bootstrap';
import { createEffect, createSignal } from 'solid-js';

type ScreenType = 'built-in' | 'external' | 'mirror';
export default function Menu() {
  const [option, setOption] = createSignal<ScreenType>('mirror');
  const handleResume = () => resume();
  const handleDisplayOption = (type: ScreenType) => () => setOption(type);

  createEffect(() => {
    if (option() === 'built-in') inventory.gameBoy?.mirrorMode.showBuiltInDisplay();
    else if (option() === 'external') inventory.gameBoy?.mirrorMode.showExternalDisplay();
    else inventory.gameBoy?.mirrorMode.showBoth();
  }, [option(), inventory]);

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
                  <input
                    checked={option() === 'built-in'}
                    onClick={handleDisplayOption('built-in')}
                    class="form-check-input"
                    type="radio"
                    name="displayOption"
                    id="gameBoyDisplay"
                    value="gameBoy"
                  />
                  <label class="form-check-label" for="gameBoyDisplay">
                    Show only in GameBoy
                  </label>
                </div>

                <div class="form-check">
                  <input
                    checked={option() === 'external'}
                    onclick={handleDisplayOption('external')}
                    class="form-check-input"
                    type="radio"
                    name="displayOption"
                    id="projectorDisplay"
                    value="projector"
                  />
                  <label class="form-check-label" for="projectorDisplay">
                    Show only in projector
                  </label>
                </div>

                <div class="form-check">
                  <input
                    checked={option() === 'mirror'}
                    onClick={handleDisplayOption('mirror')}
                    class="form-check-input"
                    type="radio"
                    name="displayOption"
                    id="mirrorDisplay"
                    value="mirror"
                  />
                  <label class="form-check-label" for="mirrorDisplay">
                    Mirror display to projector
                  </label>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row class="g-2">
            <h4 class="text-muted text-center mb-3">Audio Settings</h4>
            <Col class="d-flex align-items-center flex-column">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="muteUnmuteRadio"
                  id="muteRadio"
                  value="mute"
                  checked={false}
                  onChange={mute}
                />
                <label class="form-check-label" for="muteRadio">
                  Mute
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="muteUnmuteRadio"
                  id="unmuteRadio"
                  value="unmute"
                  checked={true}
                  onChange={unmute}
                />
                <label class="form-check-label" for="unmuteRadio">
                  Unmute
                </label>
              </div>
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
