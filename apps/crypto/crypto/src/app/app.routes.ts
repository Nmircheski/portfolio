import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@portfolio/crypto-feature-dashboard-shell').then(
        (m) => m.cryptoDashboardRoutes
      ),
  },
  {
    path: 'trading',
    loadChildren: () =>
      import('@portfolio/crypto-feature-trading-shell').then(
        (m) => m.cryptoTradingRoutes
      ),
  },
];
