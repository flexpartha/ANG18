import { Routes } from '@angular/router';
import { AuthService, Roles, RolesType } from './pages/service/auth.service';
import { inject } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductstoreComponent } from './pages/productstore/productstore.component';
import { UserAddressComponent } from './pages/user-address/user-address.component';
import { AdminRoleComponent } from './pages/admin-role/admin-role.component';
import { UserRoleComponent } from './pages/user-role/user-role.component';

const Routes = {
  User: 'user',
  Admin: 'admin',
  Login: 'login',
} as const;

export type RoutesType = (typeof Routes)[keyof typeof Routes];

const routesMap = new Map<RolesType, RoutesType>([
  [Roles.Admin, Routes.Admin],
  [Roles.User, Routes.User],
]);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
      const auth = inject(AuthService);
      const { role } = auth;
      if (!auth.isAuth()) return Routes.Login;
      return routesMap.get(role) || Routes.User;
    },
  },

  {
    path: Routes.Login,
    component: LoginComponent,
  },
  {
    path: Routes.User,
    component: UserComponent,
    canActivate: [() => inject(AuthService).isAuthGuard()],
  },
  {
    path: Routes.Admin,
    component: AdminComponent,
    canActivate: [() => inject(AuthService).isAuthGuard()],
  },
  {
    path: 'product',
    component: ProductstoreComponent,
  },
  {
    path: 'useraddress',
    component: UserAddressComponent,
  },
  {
    path: 'adminrole',
    component: AdminRoleComponent,
  },
  {
    path: 'userrole',
    component: UserRoleComponent,
  },
];
