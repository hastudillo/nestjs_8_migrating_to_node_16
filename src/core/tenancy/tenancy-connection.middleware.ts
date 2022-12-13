import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

import { RequestWithUserPayload } from '../auth/types/user-payload.type';

@Injectable()
export class TenancyConnectionMiddleware implements NestMiddleware {
  async use(
    req: RequestWithUserPayload,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    console.log('other middleware');
    console.log(req.userPayload);
    next();
  }
}
