import { createFileRoute } from '@tanstack/react-router'
import { Heading, Subheading } from '@/components/ui/heading'
import { Badge } from '@/components/ui/badge'
import { Link } from '@/components/ui/link'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <Heading>Inicio - BXS Factory</Heading>
     
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-gradient-to-r from-blue-500 to-blue-600 dark:border-white/10">
          <div className="p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-white bg-opacity-30 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">#</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-blue-100">Pedidos Activos</div>
                <div className="text-2xl font-semibold text-white">73</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-blue-100">12 completados hoy</div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-gradient-to-r from-green-500 to-green-600 dark:border-white/10">
          <div className="p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-white bg-opacity-30 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">€</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-green-100">Ventas del Mes</div>
                <div className="text-2xl font-semibold text-white">€487K</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-green-100">+12.5% vs mes anterior</div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-gradient-to-r from-amber-500 to-amber-600 dark:border-white/10">
          <div className="p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-white bg-opacity-30 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📦</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-amber-100">Productos en Stock</div>
                <div className="text-2xl font-semibold text-white">2,185</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-amber-100">142 productos disponibles</div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-gradient-to-r from-purple-500 to-purple-600 dark:border-white/10">
          <div className="p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-white bg-opacity-30 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">👥</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-purple-100">Clientes Activos</div>
                <div className="text-2xl font-semibold text-white">42</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-purple-100">5 nuevos este mes</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
            <Subheading level={2}>Pedidos Recientes</Subheading>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 p-4 dark:border-white/10">
                <div>
                  <p className="text-sm/6 font-medium text-zinc-950 dark:text-white">#PED-001</p>
                  <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Empresa ABC S.L.</p>
                </div>
                <Badge color="blue">En Producción</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 p-4 dark:border-white/10">
                <div>
                  <p className="text-sm/6 font-medium text-zinc-950 dark:text-white">#PED-002</p>
                  <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Industrias XYZ</p>
                </div>
                <Badge color="amber">Pendiente</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 p-4 dark:border-white/10">
                <div>
                  <p className="text-sm/6 font-medium text-zinc-950 dark:text-white">#PED-003</p>
                  <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Metalúrgica Del Norte</p>
                </div>
                <Badge color="green">Completado</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
            <Subheading level={2}>Productos Más Vendidos</Subheading>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <span className="text-lg">⚙️</span>
                  </div>
                  <div>
                    <p className="text-sm/6 font-medium text-zinc-950 dark:text-white">Válvulas Industriales</p>
                    <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">€142,500</p>
                  </div>
                </div>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">29%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/20">
                    <span className="text-lg">🔧</span>
                  </div>
                  <div>
                    <p className="text-sm/6 font-medium text-zinc-950 dark:text-white">Herramientas Especiales</p>
                    <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">€128,700</p>
                  </div>
                </div>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">27%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20">
                    <span className="text-lg">🔩</span>
                  </div>
                  <div>
                    <p className="text-sm/6 font-medium text-zinc-950 dark:text-white">Componentes Mecánicos</p>
                    <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">€118,750</p>
                  </div>
                </div>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">24%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
        <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
          <Subheading level={2}>Accesos Rápidos</Subheading>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/pedidos" 
              className="flex flex-col items-center rounded-lg border border-zinc-950/10 p-4 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <span className="text-xl">📋</span>
              </div>
              <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Nuevo Pedido</span>
            </Link>
            <Link 
              href="/clientes" 
              className="flex flex-col items-center rounded-lg border border-zinc-950/10 p-4 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/20">
                <span className="text-xl">👥</span>
              </div>
              <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Agregar Cliente</span>
            </Link>
            <Link 
              href="/productos" 
              className="flex flex-col items-center rounded-lg border border-zinc-950/10 p-4 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20">
                <span className="text-xl">📦</span>
              </div>
              <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Ver Inventario</span>
            </Link>
            <Link 
              href="/informes" 
              className="flex flex-col items-center rounded-lg border border-zinc-950/10 p-4 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/20">
                <span className="text-xl">📊</span>
              </div>
              <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Ver Informes</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
