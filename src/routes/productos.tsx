import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heading, Subheading } from '@/components/ui/heading'
import { Badge } from '@/components/ui/badge'
import { Input, InputGroup } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Pagination, PaginationPrevious, PaginationNext, PaginationList, PaginationPage, PaginationGap } from '@/components/ui/pagination'
import { Dialog, DialogTitle, DialogDescription, DialogBody, DialogActions } from '@/components/ui/dialog'
import { Fieldset, FieldGroup, Field, Label, Description } from '@/components/ui/fieldset'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { toast } from 'sonner'

export const Route = createFileRoute('/productos')({
  component: ProductosPage,
})

function ProductosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    category: '',
    price: '',
    stock: '',
    description: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
   
    
    // Reset form and close modal
    setFormData({
      name: '',
      code: '',
      category: '',
      price: '',
      stock: '',
      description: ''
    })
    setIsModalOpen(false)
    
    toast.success('Producto creado exitosamente!')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    // Reset form when canceling
    setFormData({
      name: '',
      code: '',
      category: '',
      price: '',
      stock: '',
      description: ''
    })
  }

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <Heading>Productos</Heading>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Gestiona el catálogo de productos de la fábrica
          </p>
        </div>
          <Button onClick={() => setIsModalOpen(true)}>Nuevo Producto</Button>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="flex-1 max-w-md">
          <InputGroup>
            <MagnifyingGlassIcon />
            <Input 
              type="search" 
              placeholder="Buscar productos..." 
            />
          </InputGroup>
        </div>
      </div>
             
   
      
      {/* Products Table */}
      <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
        {/* Table Header */}
        <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
          <Subheading level={2}>Catálogo de Productos</Subheading>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex gap-6">
              <span className="text-zinc-600 dark:text-zinc-400">
                <span className="font-medium text-zinc-950 dark:text-white">156</span> productos
              </span>
           
            </div>
            <div className="flex gap-4">
              <Badge color="green">142 en stock</Badge>
              <Badge color="amber">8 stock bajo</Badge>
              <Badge color="red">6 agotados</Badge>
            </div>
          </div>
        </div>
        
        {/* Table Content */}
        <div className="overflow-x-auto">
          <Table className='px-4'>
            <TableHead>
              <TableRow>
                <TableHeader className="pl-6">Código</TableHeader>
                <TableHeader>Producto</TableHeader>
                <TableHeader>Categoría</TableHeader>
                <TableHeader>Precio</TableHeader>
                <TableHeader>Stock</TableHeader>
                <TableHeader>Estado</TableHeader>
                
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="pl-6">
                  <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                    VI-2024
                  </code>
                </TableCell>
                <TableCell>
                  <Link to="/productos/$id" params={{ id: 'VI-2024' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 -mx-4 px-4 py-2 rounded">
                    <div className="flex items-center gap-2">
                      <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Casco Stormtrooper</div>
                       
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Cascos</div>
                </TableCell>
                <TableCell className="font-medium">$55645.50</TableCell>
                <TableCell>
                  <div className="font-medium">1,250</div>
                </TableCell>
                <TableCell>
                  <Badge color="green">En Stock</Badge>
                </TableCell>
              
              </TableRow>
              
              <TableRow>
                <TableCell className="pl-6">
                  <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                    CM-450
                  </code>
                </TableCell>
                <TableCell>
                  <Link to="/productos/$id" params={{ id: 'CM-450' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 -mx-4 px-4 py-2 rounded">
                    <div className="flex items-center gap-2">
                      <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Casco Boba Fett</div>
               
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Cascos</div>
                </TableCell>
                <TableCell className="font-medium">$3250.75</TableCell>
                <TableCell>
                  <div className="font-medium">890</div>
                </TableCell>
                <TableCell>
                  <Badge color="green">En Stock</Badge>
                </TableCell>
         
              </TableRow>
              
              <TableRow>
                <TableCell className="pl-6">
                  <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                    PF-100
                  </code>
                </TableCell>
                <TableCell>
                  <Link to="/productos/$id" params={{ id: 'PF-100' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 -mx-4 px-4 py-2 rounded">
                    <div className="flex items-center gap-2">
                      <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Casco Darth Vader</div>
                        
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Cascos</div>
                </TableCell>
                <TableCell className="font-medium">$12850.00</TableCell>
                <TableCell>
                  <div className="font-medium">45 </div>
                </TableCell>
                <TableCell>
                  <Badge color="amber">Stock Bajo</Badge>
                </TableCell>
                
              </TableRow>
              
              <TableRow>
                <TableCell className="pl-6">
                  <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:bg-white/10 dark:text-white">
                    HE-890
                  </code>
                </TableCell>
                <TableCell>
                  <Link to="/productos/$id" params={{ id: 'HE-890' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 -mx-4 px-4 py-2 rounded">
                    <div className="flex items-center gap-2">
                      <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Casco Stormtrooper v2</div>
     
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                      <div className="font-medium">Cascos</div>
                </TableCell>
                <TableCell className="font-medium">$895589.90</TableCell>
                <TableCell>
                  <div className="font-medium">0</div>
                </TableCell>
                <TableCell>
                  <Badge color="red">Agotado</Badge>
                </TableCell>
               
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        <div className="border-t border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Mostrando 4 de 156 productos
            </p>
            <Pagination>
              <PaginationPrevious href={null}>Anterior</PaginationPrevious>
              <PaginationList>
                <PaginationPage href="#" current>1</PaginationPage>
                <PaginationPage href="#">2</PaginationPage>
                <PaginationPage href="#">3</PaginationPage>
                <PaginationGap />
                <PaginationPage href="#">39</PaginationPage>
              </PaginationList>
              <PaginationNext href="#">Siguiente</PaginationNext>
            </Pagination>
          </div>
        </div>
      </div>

      {/* Create Product Modal */}
      <Dialog open={isModalOpen} onClose={handleCancel} size="lg">
        <DialogTitle>Crear Nuevo Producto</DialogTitle>
        <DialogDescription>
          Completa la información para agregar un nuevo producto al catálogo.
        </DialogDescription>
        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Fieldset>
              <FieldGroup>
                <Field>
                  <Label>Nombre del Producto</Label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ej: Casco Stormtrooper"
                    required
                  />
                  <Description>El nombre que aparecerá en el catálogo</Description>
                </Field>

                <Field>
                  <Label>Código del Producto</Label>
                  <Input
                    type="text"
                    value={formData.code}
                    onChange={(e) => handleInputChange('code', e.target.value)}
                    placeholder="Ej: ST-2024"
                    required
                  />
                  <Description>Código único para identificar el producto</Description>
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field>
                    <Label>Categoría</Label>
                    <Select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      required
                    >
                      <option value="">Seleccionar categoría</option>
                      <option value="Cascos">Cascos</option>
                      <option value="Armaduras">Armaduras</option>
                      <option value="Accesorios">Accesorios</option>
                      <option value="Armas">Armas de utilería</option>
                    </Select>
                  </Field>

                  
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field>
                    <Label>Precio</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      placeholder="0.00"
                      required
                    />
                
                  </Field>

                  <Field>
                    <Label>Stock Inicial</Label>
                    <Input
                      type="number"
                      value={formData.stock}
                      onChange={(e) => handleInputChange('stock', e.target.value)}
                      placeholder="0"
                      required
                    />
                    <Description>Cantidad inicial en inventario</Description>
                  </Field>
                </div>

                <Field>
                  <Label>Descripción</Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Descripción detallada del producto..."
                    rows={3}
                  />
                  <Description>Descripción opcional del producto</Description>
                </Field>
              </FieldGroup>
            </Fieldset>
          </form>
        </DialogBody>
        <DialogActions>
          <Button type="button" plain onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Crear Producto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
} 