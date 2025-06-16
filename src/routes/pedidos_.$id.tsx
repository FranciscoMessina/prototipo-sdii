import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Heading, Subheading } from '@/components/ui/heading'
import { Badge } from '@/components/ui/badge'
import { Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu } from '@/components/ui/dropdown'
import { ArrowLeftIcon, EllipsisHorizontalIcon, PencilSquareIcon, TruckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/16/solid'

export const Route = createFileRoute('/pedidos_/$id')({
  component: OrderDetailPage,
})

// Mock order data - in a real app this would come from an API
const getOrderById = (id: string) => {
  const orders = {
    '001': {
      id: '001',
      clientName: 'Empresa ABC S.L.',
      clientEmail: 'maria.garcia@empresaabc.com',
      clientId: 'clark-kent',
      productName: 'Válvulas Industriales',
      productCode: 'VI-2024',
      quantity: 500,
      unitPrice: '$111.29',
      totalAmount: '$55645.00',
      orderDate: '01/03/2024',
      deliveryDate: '15/03/2024',
      status: 'En Producción',
      priority: 'Normal',
      notes: '',
      shippingAddress: {
        street: 'Av. Industrial 1234',
        city: 'Buenos Aires',
        postalCode: '1425',
        country: 'Argentina'
      },
      timeline: [
        { date: '01/03/2024', event: 'Pedido recibido', status: 'completed' },
        { date: '02/03/2024', event: 'Pedido confirmado', status: 'completed' },
        { date: '05/03/2024', event: 'Producción iniciada', status: 'completed' },
        { date: '12/03/2024', event: 'Producción 70% completada', status: 'current' },
        { date: '15/03/2024', event: 'Entrega programada', status: 'pending' }
      ]
    },
    '002': {
      id: '002',
      clientName: 'Industrias XYZ',
      clientEmail: 'c.rodriguez@industriasxyz.es',
      clientId: 'barry-allen',
      productName: 'Componentes Mecánicos',
      productCode: 'CM-450',
      quantity: 250,
      unitPrice: '$13.00',
      totalAmount: '$3250.00',
      orderDate: '28/02/2024',
      deliveryDate: '22/03/2024',
      status: 'Pendiente',
      priority: 'Alta',
      notes: '',
      shippingAddress: {
        street: 'Polígono Industrial Norte 45',
        city: 'Córdoba',
        postalCode: '5000',
        country: 'Argentina'
      },
      timeline: [
        { date: '28/02/2024', event: 'Pedido recibido', status: 'completed' },
        { date: '01/03/2024', event: 'Esperando aprobación', status: 'current' },
        { date: '05/03/2024', event: 'Producción programada', status: 'pending' },
        { date: '18/03/2024', event: 'Control de calidad', status: 'pending' },
        { date: '22/03/2024', event: 'Entrega programada', status: 'pending' }
      ]
    },
    '003': {
      id: '003',
      clientName: 'Metalúrgica Del Norte',
      clientEmail: 'ana.lopez@metalnorte.com',
      clientId: 'antony-stark',
      productName: 'Piezas Fundidas',
      productCode: 'PF-100',
      quantity: 100,
      unitPrice: '$128.50',
      totalAmount: '$12850.00',
      orderDate: '15/02/2024',
      deliveryDate: '10/03/2024',
      status: 'Completado',
      priority: 'Normal',
      notes: '',
      shippingAddress: {
        street: 'Zona Franca 789',
        city: 'Rosario',
        postalCode: '2000',
        country: 'Argentina'
      },
      timeline: [
        { date: '15/02/2024', event: 'Pedido recibido', status: 'completed' },
        { date: '16/02/2024', event: 'Pedido confirmado', status: 'completed' },
        { date: '20/02/2024', event: 'Producción iniciada', status: 'completed' },
        { date: '08/03/2024', event: 'Control de calidad', status: 'completed' },
        { date: '10/03/2024', event: 'Entregado', status: 'completed' }
      ]
    }
  }
  
  return orders[id as keyof typeof orders] || orders['001']
}

function OrderDetailPage() {
  const { id } = Route.useParams()
  const order = getOrderById(id)

  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'Completado': return 'green'
      case 'En Producción': return 'blue'
      case 'Pendiente': return 'amber'
      case 'Retrasado': return 'red'
      case 'Cancelado': return 'red'
      default: return 'zinc'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'red'
      case 'Normal': return 'green'
      case 'Baja': return 'zinc'
      default: return 'zinc'
    }
  }

  const getTimelineStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'current': return 'bg-blue-500'
      case 'pending': return 'bg-zinc-300'
      default: return 'bg-zinc-300'
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <Link to="/pedidos">
            <Button plain>
              <ArrowLeftIcon />
              Volver a pedidos
            </Button>
          </Link>
      <div className="flex items-center justify-between">
   
        <div className="flex items-center gap-4">
       
          <div>
            <Heading>Pedido #{order.id}</Heading>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              {order.clientName} • {order.orderDate}
            </p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button>
            <PencilSquareIcon />
            Editar Pedido
          </Button>
          
          <Dropdown>
            <DropdownButton plain>
              <EllipsisHorizontalIcon />
            </DropdownButton>
            <DropdownMenu anchor="bottom end">
              <DropdownItem>
                <DropdownLabel>Duplicar pedido</DropdownLabel>
              </DropdownItem>
              <DropdownItem>
                <DropdownLabel>Generar factura</DropdownLabel>
              </DropdownItem>
              <DropdownItem>
                <DropdownLabel>Cancelar pedido</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Info */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={2}>Información del Pedido</Subheading>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">ID del Pedido</div>
                  <code className="mt-1 rounded bg-zinc-950/5 px-1.5 py-0.5 text-sm font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                    #{order.id}
                  </code>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Estado</div>
                  <div className="mt-1">
                    <Badge color={getBadgeColor(order.status)}>{order.status}</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Cliente</div>
                  <Link to="/clientes/$id" params={{ id: order.clientId }} className="mt-1 text-sm/6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    {order.clientName}
                  </Link>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">{order.clientEmail}</div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Prioridad</div>
                  <div className="mt-1">
                    <Badge color={getPriorityColor(order.priority)}>{order.priority}</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Fecha de Pedido</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white">{order.orderDate}</div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Fecha de Entrega</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white">{order.deliveryDate}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Notas</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white">{order.notes}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={2}>Detalles del Producto</Subheading>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Producto</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white font-medium">{order.productName}</div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Código</div>
                  <code className="mt-1 rounded bg-zinc-950/5 px-1.5 py-0.5 text-sm font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                    {order.productCode}
                  </code>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Cantidad</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white font-medium">{order.quantity} unidades</div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Precio Unitario</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white font-medium">{order.unitPrice}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Total</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-950 dark:text-white">{order.totalAmount}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={2}>Cronograma del Pedido</Subheading>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {order.timeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${getTimelineStatusColor(item.status)}`}></div>
                    <div className="flex-1">
                      <div className="text-sm/6 font-medium text-zinc-950 dark:text-white">{item.event}</div>
                      <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={3}>Resumen</Subheading>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <CurrencyDollarIcon className="h-5 w-5 text-zinc-400" />
                <div>
                  <div className="text-sm/6 text-zinc-600 dark:text-zinc-400">Valor total</div>
                  <div className="text-lg font-semibold text-zinc-950 dark:text-white">{order.totalAmount}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-zinc-400" />
                <div>
                  <div className="text-sm/6 text-zinc-600 dark:text-zinc-400">Entrega</div>
                  <div className="text-sm/6 font-medium text-zinc-950 dark:text-white">{order.deliveryDate}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TruckIcon className="h-5 w-5 text-zinc-400" />
                <div>
                  <div className="text-sm/6 text-zinc-600 dark:text-zinc-400">Estado</div>
                  <Badge color={getBadgeColor(order.status)}>{order.status}</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={3}>Dirección de Envío</Subheading>
            </div>
            <div className="p-6">
              <div className="text-sm/6 text-zinc-950 dark:text-white">
                {order.shippingAddress.street}<br/>
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}<br/>
                {order.shippingAddress.country}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={3}>Acciones Rápidas</Subheading>
            </div>
            <div className="p-6 space-y-3">
              <Button className="w-full justify-start" color="blue">
                Actualizar Estado
              </Button>
              <Button className="w-full justify-start" outline>
                Generar Factura
              </Button>
              <Button className="w-full justify-start" outline>
                Contactar Cliente
              </Button>
              <Button className="w-full justify-start" outline>
                Iniciar Devolución
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 