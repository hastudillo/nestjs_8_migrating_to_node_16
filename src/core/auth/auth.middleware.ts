import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuthModuleOptions } from '@nestjs/passport';
import { NextFunction, request, Response } from 'express';

import { RequestWithUserPayload, UserPayload } from './types/user-payload.type';

export class AuthModuleOptions implements IAuthModuleOptions {
  defaultStrategy?: string | string[];
  session?: boolean;
  property?: string;
}

const options: AuthModuleOptions = {
  session: false,
  property: 'userPayload',
};

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(
    _req: RequestWithUserPayload,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    request[options.property] = { test: 'userPayload' };
    console.log('auth middleware use');
    console.log(request[options.property]);
    next();
  }

  handleRequest(err: Error, user: UserPayload, info: unknown): UserPayload {
    console.log('auth middleware handleRequest');
    if (err) {
      console.error(err);
      throw err;
    }
    if (!user) {
      console.log(info);
      throw new UnauthorizedException(info);
    }
    console.log(user);
    return user;
  }
}
