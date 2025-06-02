import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Heading, Subheading } from '@/components/ui/heading'
import { Badge } from '@/components/ui/badge'
import { Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu } from '@/components/ui/dropdown'
import { ArrowLeftIcon, EllipsisHorizontalIcon, PencilSquareIcon } from '@heroicons/react/16/solid'

export const Route = createFileRoute('/productos_/$id')({
  component: ProductDetailPage,
})

// Mock product data - in a real app this would come from an API
const getProductById = (id: string) => {
  const products = {
    'VI-2024': {
      id: 'VI-2024',
      name: 'Casco Stormtrooper',
      description: 'Casco de Stormtrooper para uso en la guerra',
      category: 'Cascos',
      type: 'Guerra',
      price: '$55645.50',
      stock: 1250,
      status: 'En Stock',
      specifications: {
        material: 'Fibra de Vidrio',
        medidas: '25x25x10cm',
        color: 'Negro',
        peso: '1.5kg'
      },
      supplier: 'Proveedor Industrial S.A.',
      lastUpdated: '15/03/2024',
      reorderPoint: 100,
      leadTime: '14 días'
    },
    'CM-450': {
      id: 'CM-450',
      name: 'Casco Boba Fett',
      description: 'Casco de Boba Fett para uso en la guerra',
      category: 'Cascos',
      type: 'Guerra',
      price: '$3250.75',
      stock: 890,
      status: 'En Stock',
      specifications: {
        material: 'Fibra de Vidrio',
        medidas: '25x25x10cm',
        color: 'Negro',
        peso: '1.5kg'
      },
      supplier: 'Componentes de Precisión Ltda.',
      lastUpdated: '12/03/2024',
      reorderPoint: 50,
      leadTime: '7 días'
    }
  }

  return products[id as keyof typeof products] || products['VI-2024']
}

function ProductDetailPage() {
  const { id } = Route.useParams()
  const product = getProductById(id)

  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'En Stock': return 'green'
      case 'Stock Bajo': return 'amber'
      case 'Agotado': return 'red'
      default: return 'zinc'
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col ">
        <Link to="/productos">
          <Button plain>
            <ArrowLeftIcon />
            Volver a productos
          </Button>
        </Link>
        <div className="flex items-center justify-between gap-4">

          <div>
            <Heading>{product.name}</Heading>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              {product.description}
            </p>
          </div>

          <div className="flex gap-3">
            <Button>
              <PencilSquareIcon />
              Editar Producto
            </Button>

            <Dropdown>
              <DropdownButton plain>
                <EllipsisHorizontalIcon />
              </DropdownButton>
              <DropdownMenu anchor="bottom end">
                <DropdownItem>
                  <DropdownLabel>Duplicar producto</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>Historial de cambios</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>Eliminar producto</DropdownLabel>
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
          {/* Product Info */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={2}>Información del Producto</Subheading>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Código</div>
                  <code className="mt-1 rounded bg-zinc-950/5 px-1.5 py-0.5 text-sm font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                    {product.id}
                  </code>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Categoría</div>
                  <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white">{product.category} - {product.type}</div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Precio</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-950 dark:text-white">{product.price}</div>
                </div>
                <div>
                  <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">Estado</div>
                  <div className="mt-1">
                    <Badge color={getBadgeColor(product.status)}>{product.status}</Badge>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={2}>Especificaciones Técnicas</Subheading>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="mt-1 text-sm/6 text-zinc-950 dark:text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Inventory Summary */}
          <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
            <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
              <Subheading level={3}>Resumen de Inventario</Subheading>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm/6 text-zinc-600 dark:text-zinc-400">Stock disponible</span>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">{product.stock.toLocaleString()}</span>
              </div>
      
              <div className="flex justify-between items-center">
                <span className="text-sm/6 text-zinc-600 dark:text-zinc-400">Tiempo de preparacion</span>
                <span className="text-sm/6 font-medium text-zinc-950 dark:text-white">{product.leadTime}</span>
              </div>
              <div className="pt-4 border-t border-zinc-950/10 dark:border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm/6 text-zinc-600 dark:text-zinc-400">Valor total en stock</span>
                  <span className="text-sm/6 font-semibold text-zinc-950 dark:text-white">
                    ${(parseFloat(product.price.replace('$', '').replace(',', '')) * product.stock).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Supplier Info */}
    

       
        </div>
      </div>
    </div>
  )
} 