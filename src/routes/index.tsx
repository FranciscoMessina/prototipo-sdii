import { createFileRoute, Link } from '@tanstack/react-router'
import { Heading, Subheading } from '@/components/ui/heading'
import { Badge } from '@/components/ui/badge'

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-gradient-to-r from-blue-500 to-blue-600 dark:border-white/10">
          <div className="p-6 text-white">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-white bg-opacity-30 rounded-md flex items-center justify-center">
                  <span className="text-black text-sm font-bold">#</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-blue-100">Pedidos Pendientes</div>
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
                  <span className=" text-sm  text-green-800 font-bold">$</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-green-100">Ventas del Mes</div>
                <div className="text-2xl font-semibold text-white">$487.000</div>
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
                  <Link to="/pedidos/$id" params={{ id: '001' }} className="text-sm/6 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    #001
                  </Link>
                  <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Clark Kent</p>
                </div>
                <Badge color="blue">En Producción</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 p-4 dark:border-white/10">
                <div>
                  <Link to="/pedidos/$id" params={{ id: '002' }} className="text-sm/6 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    #002
                  </Link>
                  <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Barry Allen</p>
                </div>
                <Badge color="amber">Pendiente</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 p-4 dark:border-white/10">
                <div>
                  <Link to="/pedidos/$id" params={{ id: '003' }} className="text-sm/6 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    #003
                  </Link>
                  <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">Antony Stark</p>
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
                    <span className="text-lg">🪖</span>
                  </div>
                  <div>
                    <Link to="/productos/$id" params={{ id: 'VI-2024' }} className="text-sm/6 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      Casco Stormtrooper
                    </Link>
                    <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">$2,850</p>
                  </div>
                </div>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/20">
                    <span className="text-lg">⛑️</span>
                  </div>
                  <div>
                    <Link to="/productos/$id" params={{ id: 'CM-450' }} className="text-sm/6 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      Casco Boba Fett
                    </Link>
                    <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">$2,200</p>
                  </div>
                </div>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">28%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20">
                    <span className="text-lg">🎭</span>
                  </div>
                  <div>
                    <Link to="/productos/$id" params={{ id: 'DV-750' }} className="text-sm/6 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      Casco Darth Vader
                    </Link>
                    <p className="text-sm/6 text-zinc-500 dark:text-zinc-400">$3,450</p>
                  </div>
                </div>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
  )
}
