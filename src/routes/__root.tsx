import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Toaster } from 'sonner'
import { ApplicationLayout } from '@/components/Layout'

export const Route = createRootRoute({
  component: () => (
    <>
      <ApplicationLayout>

        <Toaster richColors/>
        <Outlet />
      </ApplicationLayout>
      <TanStackRouterDevtools />
    </>
  ),
})
