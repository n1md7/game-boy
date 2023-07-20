import { MyGLTFLoader } from '@/src/setup/utils/Loader';

describe('Loader', () => {
  it('should be defined', () => {
    expect(new MyGLTFLoader()).toBeDefined();
  });
});
