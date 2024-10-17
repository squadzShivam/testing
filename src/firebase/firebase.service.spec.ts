import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseService } from './firebase.service';
import { ConfigModule } from '@nestjs/config';
import {
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing';
import {
  FirebaseStorage,
  deleteObject,
  getMetadata,
  ref,
} from 'firebase/storage';
import { join } from 'path';
import { existsSync, unlinkSync } from 'fs';
import { promisify } from 'util';

describe('FirebaseService', () => {
  let service: FirebaseService;
  let storage: FirebaseStorage;
  const mockFile = 'folder/file';

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirebaseService],
      imports: [ConfigModule.forRoot()], // Ensure config is loaded
    }).compile();

    service = module.get<FirebaseService>(FirebaseService);

    const env = await initializeTestEnvironment({ projectId: 'PrasarBharti' });
    const ctx = env.authenticatedContext('user');

    storage = ctx.storage();
    jest.spyOn(service, 'getStorage').mockReturnValue(storage);
  });

  beforeEach(async () => {
    const data = Buffer.from('mock data', 'utf-8');
    await assertSucceeds(service.upload(data, mockFile));
  });

  afterEach(async () => {
    try {
      const fileRef = ref(storage, mockFile);
      await deleteObject(fileRef);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should upload file', async () => {
    const fileRef = ref(storage, mockFile);
    await expect(getMetadata(fileRef)).resolves.toBeDefined();
  });

  // it('should download file', async () => {
  //   const filePath = join(__dirname, "mock_file");
  //   await service.download(mockFile, filePath);

  //   expect(existsSync(filePath)).toBeTruthy();

  //   // Optionally verify the content of the file
  //   // You might want to read the file here if needed
  //   const content = await promisify("folder/file")(filePath, 'utf-8');
  //   expect(content).toEqual('mock data');

  //   unlinkSync(filePath); // Clean up the file
  // });

  it('should delete file from storage', async () => {
    await assertSucceeds(service.delete(mockFile));
  });

  it('should return file url', async () => {
    await expect(service.getUrl(mockFile)).resolves.toBeDefined();
  });
});
