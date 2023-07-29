import { Button, Modal } from 'solid-bootstrap';
import { show, setShow } from '@/src/setup/store';
import Collection from '@/src/ui/components/inventory/components/Collection';

export default function Inventory() {
  const handleClose = () => setShow({ inventory: false });

  return (
    <Modal show={show.inventory} onHide={handleClose} fullscreen={true} keyboard={true}>
      <Modal.Header>
        <Modal.Title>My inventory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Collection />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close inventory
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
