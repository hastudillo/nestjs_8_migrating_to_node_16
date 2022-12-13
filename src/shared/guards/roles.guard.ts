import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { RequestWithUserPayload } from '../../core/auth/types/user-payload.type';

@Injectable()
export class RolesGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: RequestWithUserPayload = context.switchToHttp().getRequest();
    console.log('guard');
    console.log(request.userPayload);
    return true;
  }
}
