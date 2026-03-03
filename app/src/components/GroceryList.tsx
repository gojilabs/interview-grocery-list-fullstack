import { FC } from 'react'
import { TrashIcon } from 'lucide-react'

import { useGroceryList } from 'hooks/useGrocery'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'
import { Checkbox } from '@components/ui/checkbox'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'

const GroceryList: FC<{ isEditing?: boolean }> = ({ isEditing }) => {
  const { data, isLoading, isError, error } = useGroceryList()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Status</TableHead>
          {isEditing && <TableHead>Action</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {isEditing ? (
                <Input
                  value={String(item.quantity ?? '')}
                  readOnly
                  className="w-20"
                />
              ) : (
                item.quantity
              )}
            </TableCell>
            <TableCell>
              <Checkbox checked={item.status === 'HAVE'} />
            </TableCell>
            {isEditing && (
              <TableCell>
                <Button variant="ghost" size="icon">
                  <TrashIcon />
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default GroceryList
