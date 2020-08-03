import { Controller, Get } from '@nestjs/common';
import { WtfService } from './wtf.service';

@Controller('wtf')
export class WtfController {
    
    constructor(private readonly wtfService: WtfService) {}

    @Get()
    findAll(): any[] {
           return this.wtfService.wtf
    }
}
