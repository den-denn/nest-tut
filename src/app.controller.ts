import {Controller, Get, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {Response} from 'express';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/hello-world')
    getHelloWorld(
        @Res() res: Response,
    ) {
        return res.json({message: 'Hello World!'});
    }
}
