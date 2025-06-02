import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Heading, Subheading } from '@/components/ui/heading'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu } from '@/components/ui/dropdown'
import { ArrowLeftIcon, EllipsisHorizontalIcon, PencilSquareIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid'

export const Route = createFileRoute('/clientes_/$id')({
  component: ClientDetailPage,
})

// Mock client data - in a real app this would come from an API
const getClientById = (id: string) => {
  const clients = {
    'clark-kent': {
      id: 'clark-kent',
      name: 'Clark Kent',
      email: 'ckent@smallville.com',
      phone: '+54 9 11 5685 4875',
      company: 'Daily Planet',
      address: {
        street: 'Av. Metropolis 1234',
        city: 'Buenos Aires',
        postalCode: '1425',
        country: 'Argentina'
      },
      status: 'Activo',
      customerSince: '15/01/2022',
      lastOrder: '15/03/2024',
      totalOrders: 18,
      totalSpent: '$142500.00',
      creditLimit: '$250000.00',
      paymentTerms: '30 días',
      orders: [
        { id: '001', date: '15/03/2024', amount: '$12500.00', status: 'Completado' },
        { id: '002', date: '28/02/2024', amount: '$8750.00', status: 'Completado' },
        { id: '003', date: '10/02/2024', amount: '$15300.00', status: 'Completado' }
      ]
    },
    'barry-allen': {
      id: 'barry-allen',
      name: 'Barry Allen',
      email: 'ballen@centralc.com',
      phone: '+54 9 11 5685 4875',
      company: 'Central City Labs',
      address: {
        street: 'Calle Flash 567',
        city: 'Córdoba',
        postalCode: '5000',
        country: 'Argentina'
      },
      status: 'Activo',
      customerSince: '22/06/2021',
      lastOrder: '08/03/2024',
      totalOrders: 15,
      totalSpent: '$128700.00',
      creditLimit: '$200000.00',
      paymentTerms: '15 días',
      orders: [
        { id: '004', date: '08/03/2024', amount: '$9800.00', status: 'Completado' },
        { id: '005', date: '25/02/2024', amount: '$11200.00', status: 'Completado' },
        { id: '006', date: '15/02/2024', amount: '$7950.00', status: 'En Proceso' }
      ]
    },
    'antony-stark': {
      id: 'antony-stark',
      name: 'Antony Stark',
      email: 'astark@starkindustries.com',
      phone: '+54 9 11 5685 4875',
      company: 'Stark Industries',
      address: {
        street: 'Av. Iron Man 10880',
        city: 'Rosario',
        postalCode: '2000',
        country: 'Argentina'
      },
      status: 'VIP',
      customerSince: '10/03/2020',
      lastOrder: '01/03/2024',
      totalOrders: 45,
      totalSpent: '$875000.00',
      creditLimit: '$1000000.00',
      paymentTerms: '45 días',
      orders: [
        { id: '007', date: '01/03/2024', amount: '$85000.00', status: 'Completado' },
        { id: '008', date: '18/02/2024', amount: '$42500.00', status: 'Completado' },
        { id: '009', date: '05/02/2024', amount: '$67800.00', status: 'Completado' }
      ]
    }
  }

  return clients[id as keyof typeof clients] || clients['clark-kent']
}

function ClientDetailPage() {
  const { id } = Route.useParams()
  const client = getClientById(id)

  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'Activo': return 'green'
      case 'VIP': return 'blue'
      case 'Inactivo': return 'zinc'
      case 'Suspendido': return 'red'
      default: return 'zinc'
    }
  }

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'Completado': return 'green'
      case 'En Proceso': return 'blue'
      case 'Pendiente': return 'amber'
      case 'Cancelado': return 'red'
      default: return 'zinc'
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex  flex-col">
        <Link to="/clientes">
          <Button plain>
            <ArrowLeftIcon />
            Volver a clientes
          </Button>
        </Link>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Heading>{client.name}</Heading>
           
          </div>

          <div className="flex gap-3">
            <Button>
              <PencilSquareIcon />
              Editar Cliente
            </Button>

            <Dropdown>
              <DropdownButton plain>
                <EllipsisHorizontalIcon />
              </DropdownButton>
              <DropdownMenu anchor="bottom end">
                <DropdownItem>
                  <DropdownLabel>Crear pedido</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>Historial completo</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>Suspender cliente</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>


      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Client Info */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={2}>Información del Cliente</Subheading>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Email</div>
                  <div className="mt-1 flex items-center gap-2">
                    <EnvelopeIcon className="h-4 w-4 text-zinc-400" />
                    <a href={`mailto:${client.email}`} className="text-sm/6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      {client.email}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Teléfono</div>
                  <div className="mt-1 flex items-center gap-2">
                    <PhoneIcon className="h-4 w-4 text-zinc-400" />
                    <a href={`tel:${client.phone}`} className="text-sm/6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      {client.phone}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Estado</div>
                  <div className="mt-1">
                    <Badge color={getBadgeColor(client.status)}>{client.status}</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Cliente desde</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white">{client.customerSince}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Dirección</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white">
                    {client.address.street}<br />
                    {client.address.city}, {client.address.postalCode}<br />
                    {client.address.country}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={2}>Pedidos Recientes</Subheading>
            </div>
            <div className="overflow-x-auto">
              <Table className='px-4'>
                <TableHead>
                  <TableRow>
                    <TableHeader className="pl-6">Pedido</TableHeader>
                    <TableHeader>Fecha</TableHeader>
                    <TableHeader>Monto</TableHeader>
                    <TableHeader className="pr-6">Estado</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {client.orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="pl-6">
                        <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                          #{order.id}
                        </code>
                      </TableCell>
                      <TableCell className="font-medium">{order.date}</TableCell>
                      <TableCell className="font-medium">{order.amount}</TableCell>
                      <TableCell className="pr-6">
                        <Badge color={getOrderStatusColor(order.status)}>{order.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Summary */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={3}>Resumen</Subheading>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm/6 text-zinc-600 dark:text-zinc-400">Total pedidos</span>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">{client.totalOrders}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm/6 text-zinc-600 dark:text-zinc-400">Total gastado</span>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">{client.totalSpent}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm/6 text-zinc-600 dark:text-zinc-400">Último pedido</span>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">{client.lastOrder}</span>
              </div>
              <div className="pt-4 border-t border-zinc-950/10 dark:border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm/6 text-zinc-600 dark:text-zinc-400">Promedio por pedido</span>
                  <span className="text-sm/6 font-semibold text-zinc-950 dark:text-white">
                    ${(parseFloat(client.totalSpent.replace('$', '').replace(',', '')) / client.totalOrders).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

         

          
        </div>
      </div>
    </div>
  )
} 