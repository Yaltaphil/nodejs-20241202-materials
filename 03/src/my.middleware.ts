import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UAParser } from 'ua-parser-js';

@Injectable()
export class MyMiddleware implements NestMiddleware {
  async use(req: Request & { device: any }, res: Response, next: NextFunction) {
    const ua = UAParser(req.headers['user-agent']);
    const isMobile = ua.device.type === 'mobile';

    console.log(`[${req.method}] ${req.url}, ua: ${req.headers['user-agent']}`);

    // res.status(200).json({message: "hello from middleware"});

    // if (!isMobile) {
    //     throw new BadRequestException("доступ разрешен только для мобильных телефонов");
    // }
    //
    // req.device = ua.device;

    next();
  }
}
