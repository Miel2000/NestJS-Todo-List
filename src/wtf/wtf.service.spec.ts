import { Test, TestingModule } from '@nestjs/testing';
import { WtfService } from './wtf.service';

describe('WtfService', () => {
  let service: WtfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WtfService],
    }).compile();

    service = module.get<WtfService>(WtfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
