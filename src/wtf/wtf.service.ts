import { Injectable } from '@nestjs/common';

@Injectable()
export class WtfService {

    wtf = [
        {
            id:1,
            title:"erer",
            
        },
        {
            id: 2,
            title: "coucou",

        }
    ];
    findAll(): any[] {
        return this.wtf;
    }
}
