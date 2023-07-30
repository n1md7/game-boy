import { mode } from '@/src/setup/store';

export default function Mode() {
  return (
    <div class="row position-fixed top-0 w-100">
      <div class="col d-flex justify-content-center text-center gap-2">
        <span>Mode: </span> <strong> {mode()}</strong>{' '}
        <span>
          {' '}
          (Press <b>M</b> to change){' '}
        </span>
      </div>
    </div>
  );
}
