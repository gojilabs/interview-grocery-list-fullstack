import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import Container from '@mui/material/Container'

import GroceryList from '@components/GroceryList'
import { QueryClientProvider, queryClient } from '@utils/client'
import GroceryForm from '@components/GroceryForm'
import { useState } from 'react'
import { Add, Edit, Save } from '@mui/icons-material'

function App() {
  const [openForm, setOpenForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  const handleFormOpen = () => {
    setOpenForm(true)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Card sx={{ my: 4 }} variant="outlined">
          <CardHeader
            title="Grocery List"
            action={
              <>
                <IconButton onClick={handleEditClick}>{isEditing ? <Save /> : <Edit />}</IconButton>
                <IconButton onClick={handleFormOpen}>
                  <Add />
                </IconButton>
              </>
            }
          />
          <CardContent>
            <GroceryList isEditing={isEditing} />
            <GroceryForm openForm={openForm} setOpenForm={setOpenForm} />
          </CardContent>
        </Card>
      </Container>
    </QueryClientProvider>
  )
}

export default App
