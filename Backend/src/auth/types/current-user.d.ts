import { Role } from '../enums/role.enum';

export type CurrentUser = {
  id: string;
  email: string;
  password: string;
  role: Role;
};
