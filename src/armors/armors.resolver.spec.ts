import { Test, TestingModule } from '@nestjs/testing';
import { ArmorsResolver } from './armors.resolver';
import { ArmorsService } from './armors.service';

describe('ArmorsResolver', () => {
  let resolver: ArmorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmorsResolver, ArmorsService],
    }).compile();

    resolver = module.get<ArmorsResolver>(ArmorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
