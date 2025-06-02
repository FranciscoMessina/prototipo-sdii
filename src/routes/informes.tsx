import { createFileRoute } from '@tanstack/react-router'
import { Heading, Subheading } from '@/components/ui/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu, DropdownDescription  } from '@/components/ui/dropdown'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'

export const Route = createFileRoute('/informes')({
  component: InformesPage,
})

function InformesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <Heading>Informes</Heading>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Analiza el rendimiento y estadísticas
          </p>
        </div>
        
        <div className="flex gap-3">
          <div className="min-w-[140px]">
            <Select defaultValue="mes">
              <option value="dia">Último día</option>
              <option value="semana">Última semana</option>
              <option value="mes">Último mes</option>
              <option value="trimestre">Último trimestre</option>
              <option value="año">Último año</option>
            </Select>
          </div>
          
          <Dropdown>
            <DropdownButton as={Button} >
              <ArrowDownTrayIcon />
              Exportar
            </DropdownButton>
            <DropdownMenu anchor='bottom end'>
              <DropdownItem>
                
                  <DropdownLabel >Exportar como PDF</DropdownLabel>
                  <DropdownDescription >Informe completo en formato PDF</DropdownDescription>
               
              </DropdownItem >
                <DropdownItem>
               
                  <DropdownLabel >Exportar como Excel</DropdownLabel>
                  <DropdownDescription >Datos en formato de hoja de cálculo</DropdownDescription>
              
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">$</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Ventas del Mes</div>
                <div className="text-lg font-semibold text-zinc-950 dark:text-white">$487,350</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-green-600 dark:text-green-400">+12.5% vs mes anterior</div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">#</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Pedidos Completados</div>
                <div className="text-lg font-semibold text-zinc-950 dark:text-white">127</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-green-600 dark:text-green-400">+8.2% vs mes anterior</div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amber-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⏱</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Tiempo Promedio</div>
                <div className="text-lg font-semibold text-zinc-950 dark:text-white">4.2 días</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-red-600 dark:text-red-400">+0.3 días vs mes anterior</div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">%</span>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Eficiencia</div>
                <div className="text-lg font-semibold text-zinc-950 dark:text-white">94.7%</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm/6 text-green-600 dark:text-green-400">+2.1% vs mes anterior</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
            <Subheading level={2}>Ventas por Producto</Subheading>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Válvulas Industriales</span>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">€142,500 (29%)</span>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-2 dark:bg-zinc-700">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '29%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Componentes Mecánicos</span>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">€118,750 (24%)</span>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-2 dark:bg-zinc-700">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Piezas Fundidas</span>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">€97,400 (20%)</span>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-2 dark:bg-zinc-700">
                <div className="bg-amber-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Herramientas Especiales</span>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">€128,700 (27%)</span>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-2 dark:bg-zinc-700">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '27%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
            <Subheading level={2}>Pedidos por Estado</Subheading>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Completados</span>
                </div>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">127 pedidos</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">En Producción</span>
                </div>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">45 pedidos</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                  <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Pendientes</span>
                </div>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">23 pedidos</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">Retrasados</span>
                </div>
                <span className="text-sm/6 text-zinc-500 dark:text-zinc-400">8 pedidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Clients Table */}
      <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
        <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
          <Subheading level={2}>Top Clientes del Mes</Subheading>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex gap-6">
              <span className="text-zinc-600 dark:text-zinc-400">
                <span className="font-medium text-zinc-950 dark:text-white">10</span> clientes principales
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                Facturación total: <span className="font-medium text-zinc-950 dark:text-white">€325,450</span>
              </span>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader className="pl-6">Cliente</TableHeader>
                <TableHeader>Pedidos</TableHeader>
                <TableHeader>Facturación</TableHeader>
                <TableHeader className="pr-6">Porcentaje</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="pl-6">
                  <div className="font-medium text-zinc-950 dark:text-white">Empresa ABC S.L.</div>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Sector Automotriz</div>
                </TableCell>
                <TableCell className="font-medium">18 pedidos</TableCell>
                <TableCell className="font-medium">€142,500</TableCell>
                <TableCell className="pr-6 font-medium">29.2%</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="pl-6">
                  <div className="font-medium text-zinc-950 dark:text-white">Industrias XYZ</div>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Sector Energético</div>
                </TableCell>
                <TableCell className="font-medium">15 pedidos</TableCell>
                <TableCell className="font-medium">€128,700</TableCell>
                <TableCell className="pr-6 font-medium">26.4%</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="pl-6">
                  <div className="font-medium text-zinc-950 dark:text-white">Metalúrgica Del Norte</div>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Sector Metalúrgico</div>
                </TableCell>
                <TableCell className="font-medium">12 pedidos</TableCell>
                <TableCell className="font-medium">€118,750</TableCell>
                <TableCell className="pr-6 font-medium">24.4%</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="pl-6">
                  <div className="font-medium text-zinc-950 dark:text-white">Construcciones Beta</div>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Sector Construcción</div>
                </TableCell>
                <TableCell className="font-medium">8 pedidos</TableCell>
                <TableCell className="font-medium">€97,400</TableCell>
                <TableCell className="pr-6 font-medium">20.0%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
} 