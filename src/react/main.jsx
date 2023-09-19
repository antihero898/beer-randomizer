import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';

import './index.css';

import Root from './components/routes/Root';
import Index from './components/routes/Index';
import Taster from './components/routes/Taster';
import Randomizer from './components/routes/Randomizer';

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
});

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

const tasterRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/taster',
  component: Taster,
});

const randomizerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/randomizer',
  component: Randomizer,
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, tasterRoute, randomizerRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });

// TODO: typescript things (GCH)
// Register your router for maximum type safety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

const rootElement = document.getElementById('root');

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}