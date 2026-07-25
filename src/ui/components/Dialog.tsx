import { Modal } from 'solid-bootstrap';
import { modal, resume, show } from '@/src/setup/store';

export default function Dialog() {
  return (
    <Modal show={show.modal} onHide={resume}>
      <Modal.Header closeButton>
        <Modal.Title>{modal.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p class="gb-dialog__body" innerHTML={modal.description} />
      </Modal.Body>
    </Modal>
  );
}
