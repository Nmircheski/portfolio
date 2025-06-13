import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'overview',
    loadChildren: () =>
      import('@portfolio/crypto-feature-overview-shell').then(
        (m) => m.cryptoOverviewShellRoutes
      ),
  },
];
