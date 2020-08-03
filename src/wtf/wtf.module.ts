import { Module } from '@nestjs/common';
import { WtfController } from './wtf.controller';
import { WtfService } from './wtf.service';

@Module({
  controllers: [WtfController],
  providers: [WtfService]
})
export class WtfModule {}
