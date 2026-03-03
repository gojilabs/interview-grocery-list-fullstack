import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { useCreateGrocery } from 'hooks/useGrocery'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/ui/dialog'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'

const GroceryForm: FC<{ openForm: boolean; setOpenForm: (openForm: boolean) => void }> = ({
  openForm,
  setOpenForm,
}) => {
  const { handleSubmit, control, reset } = useForm<GroceryFormItem>()
  const { mutateAsync: createGroceryItem } = useCreateGrocery()

  const handleFormClose = () => {
    setOpenForm(false)
    reset()
  }

  const onSubmit = async (data: GroceryFormItem) => {
    await createGroceryItem(data)
    setOpenForm(false)
    reset()
  }

  return (
    <Dialog open={openForm} onOpenChange={(open) => !open && handleFormClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} autoFocus placeholder="Name" />}
          />
          <Controller
            name="quantity"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <Input
                {...field}
                value={field.value ?? ''}
                onChange={(e) => field.onChange(e.target.value === '' ? undefined : Number(e.target.value))}
                placeholder="Quantity"
                type="number"
              />
            )}
          />
          <DialogFooter>
            <Button type="button" variant="outline" onMouseDown={handleFormClose}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default GroceryForm
