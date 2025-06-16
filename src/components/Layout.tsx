
import { useLocation } from '@tanstack/react-router'
import { Avatar } from '@/components/ui/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/ui/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/ui/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/ui/sidebar'
import { SidebarLayout } from '@/components/ui/sidebar-layout'

import {
    ArchiveBoxIcon,
  ArrowRightStartOnRectangleIcon,
  ChartBarIcon,

  ChevronUpIcon,

  TagIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/16/solid'
import {

  HomeIcon,
 
} from '@heroicons/react/20/solid'



function AccountDropdownMenu({ anchor }: { anchor: 'top start' | 'bottom end' }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>Mi cuenta</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />

      <DropdownItem href="#">
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Salir</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

export function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar initials='CV' className="size-10" square alt="" />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            
              <SidebarItem>
                <Avatar initials="BXS" />
                <SidebarLabel>BXS Factory</SidebarLabel>
                
              </SidebarItem>
       
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/" current={pathname === '/'}>
                <HomeIcon />
                <SidebarLabel>Inicio</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/pedidos" current={pathname.startsWith('/pedidos')}>
                <TagIcon/>
                <SidebarLabel>Pedidos</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/clientes" current={pathname.startsWith('/clientes')}>
                <UsersIcon/>
                <SidebarLabel>Clientes</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/productos" current={pathname.startsWith('/productos')}>
                <ArchiveBoxIcon/>
                <SidebarLabel>Productos</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/informes" current={pathname.startsWith('/informes')}>
                <ChartBarIcon />
                <SidebarLabel>Informes</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSection className="max-lg:hidden">
     
            </SidebarSection>

            <SidebarSpacer />

       
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar initials='CV' className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Christian</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      christian@bxsfactory.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
