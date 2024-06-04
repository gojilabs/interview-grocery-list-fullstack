import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { Edit, Save, Delete, Add } from '@mui/icons-material'
import { useGroceryList } from 'hooks/useGrocery'

const GroceryList = () => {
  const { data, isLoading, isError, error } = useGroceryList()
  const [isEditing, setIsEditing] = useState(false)
  const [editQuantity, setEditQuantity] = useState('')
  const [openForm, setOpenForm] = useState(false)

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  const handleFormOpen = () => {
    setOpenForm(true)
  }

  const handleFormClose = () => {
    setOpenForm(false)
  }

  const handleFormSubmit = () => {
    setOpenForm(false)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <>
      <IconButton onClick={handleEditClick}>{isEditing ? <Save /> : <Edit />}</IconButton>
      <IconButton onClick={handleFormOpen}>
        <Add />
      </IconButton>
      <Dialog open={openForm} onClose={handleFormClose}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Name" fullWidth />
          <TextField margin="dense" label="Quantity" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
              {isEditing && <TableCell>Action</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField value={editQuantity} onChange={e => setEditQuantity(e.target.value)} />
                  ) : (
                    item.quantity
                  )}
                </TableCell>
                <TableCell>
                  <Checkbox checked={item.status === 'HAVE'} />
                </TableCell>
                {isEditing && (
                  <TableCell>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default GroceryList
