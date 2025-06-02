import { Button } from '@/components/ui/button'
import { Heading, Subheading } from '@/components/ui/heading'
import { Input, InputGroup } from '@/components/ui/input'
import { Pagination, PaginationGap, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
  import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/clientes')({
  component: ClientesPage,  
})

function ClientesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <Heading>Clientes</Heading>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Gestiona la información de los clientes
          </p>
        </div>
        <Button >Nuevo Cliente</Button>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="flex-1 max-w-md">
          <InputGroup>
            <MagnifyingGlassIcon />
            <Input 
              type="search" 
              placeholder="Buscar clientes..." 
            />
          </InputGroup>
        </div>
      </div>
      
      {/* Clientes Table */}
      <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:border-white/10 dark:bg-zinc-900">
        {/* Table Header */}
        <div className="border-b border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
          <Subheading level={2}>Lista de Clientes</Subheading>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex gap-6">
              <span className="text-zinc-600 dark:text-zinc-400">
                <span className="font-medium text-zinc-950 dark:text-white">47</span> clientes
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                Nuevos este mes: <span className="font-medium text-zinc-950 dark:text-white">5</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Table Content */}
        <div className="overflow-x-auto">
          <Table className='px-4'>
            <TableHead>
              <TableRow>
                <TableHeader >Nombre</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Teléfono</TableHeader>
                <TableHeader>Último Pedido</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody >
              <TableRow>
                <TableCell >
                  <Link to="/clientes/$id" params={{ id: 'clark-kent' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                    <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Clark Kent</div>
                    <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Daily Planet</div>
                  </Link>
                </TableCell>
                <TableCell>ckent@smallville.com</TableCell>
                <TableCell>+54 9 11 5685 4875</TableCell>
                <TableCell>
                  <div className="font-medium">15/03/2024</div>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Hace 2 días</div>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell >
                  <Link to="/clientes/$id" params={{ id: 'barry-allen' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50  px-4 py-2 rounded">
                    <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Barry Allen</div>
                    <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Central City Labs</div>
                  </Link>
                </TableCell>
                <TableCell>ballen@centralc.com</TableCell>
                <TableCell>+54 9 11 5685 4875</TableCell>
                <TableCell>
                  <div className="font-medium">08/03/2024</div>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Hace 9 días</div>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell >
                  <Link to="/clientes/$id" params={{ id: 'antony-stark' }} className="block hover:bg-zinc-50 dark:hover:bg-zinc-800/50 px-4 py-2 rounded">
                    <div className="font-medium text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Antony Stark</div>
                    <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Stark Industries</div>
                  </Link>
                </TableCell>
                <TableCell>astark@starkindustries.com</TableCell>
                <TableCell>+54 9 11 5685 4875</TableCell>
                <TableCell>
                  <div className="font-medium">01/03/2024</div>
                  <div className="text-sm/6 text-zinc-500 dark:text-zinc-400">Hace 16 días</div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        <div className="border-t border-zinc-950/10 bg-zinc-50/50 px-6 py-4 dark:border-white/10 dark:bg-white/2.5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Mostrando 3 de 47 clientes
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
    </div>
  )
} 