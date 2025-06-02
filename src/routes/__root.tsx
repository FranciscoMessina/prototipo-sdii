import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { ApplicationLayout } from '@/components/Layout'

export const Route = createRootRoute({
  component: () => (
    <>
      <ApplicationLayout>


        <Outlet />
      </ApplicationLayout>
      <TanStackRouterDevtools />
    </>
  ),
})
