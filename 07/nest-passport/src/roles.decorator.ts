import { SetMetadata } from '@nestjs/common';
import { Role } from './users/entities/user.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

/*
 * users
 * USER { id: 1, projects: [project1, project2, project3] }
 *
 * projects
 * PROJECT { id: 1, users: [user1, user2, user3] }
 *
 *
 *         READ WRITE DELETE
 *
 * user1.   x.    x.     x
 * user2    x.    -      -
 *
 * */
