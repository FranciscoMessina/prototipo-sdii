import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heading, Subheading } from '@/components/ui/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Input, InputGroup } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Pagination, PaginationPrevious, PaginationNext, PaginationList, PaginationPage, PaginationGap } from '@/components/ui/pagination'
import { Dialog, DialogTitle, DialogDescription, DialogBody, DialogActions } from '@/components/ui/dialog'
import { Fieldset, FieldGroup, Field, Label, Description } from '@/components/ui/fieldset'
import { Textarea } from '@/components/ui/textarea'
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { toast } from 'sonner'

export const Route = createFileRoute('/pedidos')({
    component: PedidosPage,
})

function PedidosPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        clientId: '',
        productId: '',
        quantity: '',
        deliveryDate: '',
        priority: 'Normal',
        notes: ''
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
            clientId: '',
            productId: '',
            quantity: '',
            deliveryDate: '',
            priority: 'Normal',
            notes: ''
        })
        setIsModalOpen(false)
        
        toast.success('Pedido creado exitosamente!')
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        // Reset form when canceling
        setFormData({
            clientId: '',
            productId: '',
            quantity: '',
            deliveryDate: '',
            priority: 'Normal',
            notes: ''
        })
    }

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Header */}
            <div className="flex items-end justify-between">
                <div>
                    <Heading>Pedidos</Heading>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                        Gestiona los pedidos
                    </p>
                </div>
                <Button onClick={() => setIsModalOpen(true)}>Nuevo Pedido</Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex-1 max-w-md">
                    <InputGroup>
                        <MagnifyingGlassIcon />
                        <Input
                            type="search"
                            placeholder="Buscar pedidos..."
                        />
                    </InputGroup>
                </div>

                <div className="flex gap-3">
                    <div className="min-w-[140px]">
                        <Select defaultValue="">
                            <option value="">Todos los estados</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="produccion">En Producción</option>
                            <option value="completado">Completado</option>
                            <option value="retrasado">Retrasado</option>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Pedidos Table */}
            <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
                {/* Table Header */}
                <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
                    <Subheading level={2}>Pedidos Recientes</Subheading>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
                        <div className="flex gap-6">
                            <span className="text-zinc-600 dark:text-zinc-400">
                                <span className="font-medium text-zinc-950 dark:text-white">47</span> pedidos
                            </span>
                            <span className="text-zinc-600 dark:text-zinc-400">
                                Valor total: <span className="font-medium text-zinc-950 dark:text-white">€1,247,890</span>
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <Badge color="green">1 completados</Badge>
                            <Badge color="blue">1 en producción</Badge>
                            <Badge color="amber">1 pendientes</Badge>
                        </div>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <Table className='px-4'>
                        <TableHead>
                            <TableRow>
                                <TableHeader>ID</TableHeader>
                                <TableHeader>Cliente</TableHeader>
                                <TableHeader>Producto</TableHeader>
                                <TableHeader>Cantidad</TableHeader>
                                <TableHeader>Fecha Entrega</TableHeader>
                                <TableHeader>Estado</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Link to="/pedidos/$id" params={{ id: '001' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                        <div className="flex items-center gap-2">
                                            <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:bg-white/10 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30">
                                                #001
                                            </code>
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to="/clientes/$id" params={{ id: 'clark-kent' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                        <div className="flex items-start leading-4 gap-2">
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                            <div>
                                                <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Clark Kent</div>
                                                <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">ckent@gmail.com</div>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to="/productos/$id" params={{ id: 'VI-2024' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                    <div className="flex items-start leading-4 gap-2">
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                            <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Casco Stormtrooper</div>



                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell className="font-medium">500 uds</TableCell>
                                <TableCell>
                                    <div className="font-medium">15/03/2024</div>
                                    <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">En 5 días</div>
                                </TableCell>
                                <TableCell>
                                    <Badge color="blue">En Producción</Badge>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Link to="/pedidos/$id" params={{ id: '002' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                    <div className="flex items-start leading-4 gap-2">
                                            <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:bg-white/10 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/30">
                                                #002
                                            </code>
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to="/clientes/$id" params={{ id: 'barry-allen' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                    <div className="flex items-start leading-4 gap-2">
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                            <div>
                                                <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Barry Allen</div>
                                                <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">barry.allen@gmail.com</div>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to="/productos/$id" params={{ id: 'CM-450' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                    <div className="flex items-start leading-4 gap-2">
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                            <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Casco Boba Fett</div>



                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell className="font-medium">250 uds</TableCell>
                                <TableCell>
                                    <div className="font-medium">22/03/2024</div>
                                    <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">En 12 días</div>
                                </TableCell>
                                <TableCell>
                                    <Badge color="amber">Pendiente</Badge>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Link to="/pedidos/$id" params={{ id: '003' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                    <div className="flex items-start leading-4 gap-2">
                                            <code className="rounded bg-zinc-950/5 px-1.5 py-0.5 text-xs font-medium text-zinc-950 dark:text-white">
                                                #003
                                            </code>
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to="/clientes/$id" params={{ id: 'antony-stark' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                    <div className="flex items-start leading-4 gap-2">
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                            <div>
                                                <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Antony Stark</div>
                                                <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">antony.stark@gmail.com</div>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to="/productos/$id" params={{ id: 'PF-100' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                                    <div className="flex items-start leading-4 gap-2">
                                            <EyeIcon className="h-4 w-4 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                            <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"> Casco Iron Man</div>



                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell className="font-medium">100 uds</TableCell>
                                <TableCell>
                                    <div className="font-medium">10/03/2024</div>
                                    <div className="text-sm/6 text-green-600 dark:text-green-400">Completado</div>
                                </TableCell>
                                <TableCell>
                                    <Badge color="green">Completado</Badge>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="border-t border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Mostrando 3 de 47 pedidos
                        </p>
                        <Pagination>
                            <PaginationPrevious href={null}>Anterior</PaginationPrevious>
                            <PaginationList>
                                <PaginationPage href="#" current>1</PaginationPage>
                                <PaginationPage href="#">2</PaginationPage>
                                <PaginationPage href="#">3</PaginationPage>
                                <PaginationGap />
                                <PaginationPage href="#">16</PaginationPage>
                            </PaginationList>
                            <PaginationNext href="#">Siguiente</PaginationNext>
                        </Pagination>
                    </div>
                </div>
            </div>

            {/* Create Order Modal */}
            <Dialog open={isModalOpen} onClose={handleCancel} size="lg">
                <DialogTitle>Crear Nuevo Pedido</DialogTitle>
                <DialogDescription>
                    Completa la información para crear un nuevo pedido.
                </DialogDescription>
                <DialogBody>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Fieldset>
                            <FieldGroup>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <Field>
                                        <Label>Cliente</Label>
                                        <Select
                                            value={formData.clientId}
                                            onChange={(e) => handleInputChange('clientId', e.target.value)}
                                            required
                                        >
                                            <option value="">Seleccionar cliente</option>
                                            <option value="clark-kent">Clark Kent - Daily Planet</option>
                                            <option value="barry-allen">Barry Allen - Central City Labs</option>
                                            <option value="antony-stark">Antony Stark - Stark Industries</option>
                                        </Select>
                                    </Field>

                                    <Field>
                                        <Label>Producto</Label>
                                        <Select
                                            value={formData.productId}
                                            onChange={(e) => handleInputChange('productId', e.target.value)}
                                            required
                                        >
                                            <option value="">Seleccionar producto</option>
                                            <option value="VI-2024">Casco Stormtrooper - $55,645.50</option>
                                            <option value="CM-450">Casco Boba Fett - $3,250.75</option>
                                            <option value="PF-100">Casco Darth Vader - $12,850.00</option>
                                            <option value="HE-890">Casco Stormtrooper v2 - $89,558.90</option>
                                        </Select>
                                    </Field>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <Field>
                                        <Label>Cantidad</Label>
                                        <Input
                                            type="number"
                                            value={formData.quantity}
                                            onChange={(e) => handleInputChange('quantity', e.target.value)}
                                            placeholder="0"
                                            min="1"
                                            required
                                        />
                                        <Description>Número de unidades</Description>
                                    </Field>

                                    <Field>
                                        <Label>Fecha de Entrega</Label>
                                        <Input
                                            type="date"
                                            value={formData.deliveryDate}
                                            onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                                            required
                                        />
                                    </Field>

                                    <Field>
                                        <Label>Prioridad</Label>
                                        <Select
                                            value={formData.priority}
                                            onChange={(e) => handleInputChange('priority', e.target.value)}
                                        >
                                            <option value="Baja">Baja</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Alta">Alta</option>
                                            <option value="Urgente">Urgente</option>
                                        </Select>
                                    </Field>
                                </div>

                                <Field>
                                    <Label>Notas Adicionales</Label>
                                    <Textarea
                                        value={formData.notes}
                                        onChange={(e) => handleInputChange('notes', e.target.value)}
                                        placeholder="Especificaciones especiales, instrucciones de entrega, etc..."
                                        rows={3}
                                    />
                                    <Description>Información adicional sobre el pedido (opcional)</Description>
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
                        Crear Pedido
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
} 