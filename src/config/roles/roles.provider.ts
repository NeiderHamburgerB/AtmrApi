import { AccessControlModule } from 'nest-access-control'
import { roles } from 'src/app.roles'
export const RolesProvider = AccessControlModule.forRoles(roles)