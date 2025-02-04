import { RolesGuard } from '../role.guard';
import { Reflector } from '@nestjs/core';
import { ExecutionContext } from '@nestjs/common';
import { Role } from '../../users/entities/user.entity';

describe('Role Guard', () => {
  let reflector: Reflector;
  let guard: RolesGuard;
  let context: ExecutionContext;

  beforeEach(() => {
    reflector = { getAllAndOverride: jest.fn() } as any;
    guard = new RolesGuard(reflector);

    context = {
      getClass: jest.fn(),
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({ user: { role: Role.USER } }),
      }),
    } as unknown as ExecutionContext;
  });

  it('should return "true" if there are no roles', () => {
    (reflector.getAllAndOverride as jest.Mock).mockReturnValue(undefined);
    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should return "true" if user has one of the required roles', () => {
    (reflector.getAllAndOverride as jest.Mock).mockReturnValue([
      Role.USER,
      Role.ADMIN,
    ]);
    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should return "false" if user does not have required role', () => {
    (reflector.getAllAndOverride as jest.Mock).mockReturnValue([Role.ADMIN]);
    const result = guard.canActivate(context);
    expect(result).toBe(false);
  });
});
