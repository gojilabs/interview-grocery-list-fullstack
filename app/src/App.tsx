import { useState } from 'react'
import { PlusIcon, PencilIcon, SaveIcon } from 'lucide-react'
import { QueryClientProvider } from '@tanstack/react-query'

import { Card, CardContent, CardHeader, CardTitle, CardAction } from '@components/ui/card'
import { Button } from '@components/ui/button'
import GroceryList from '@components/GroceryList'
import { queryClient } from '@utils/client'
import GroceryForm from '@components/GroceryForm'

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
      <div className="container mx-auto">
        <Card className="my-8">
          <CardHeader>
            <CardTitle>Grocery List</CardTitle>
            <CardAction>
              <Button variant="ghost" size="icon" onClick={handleEditClick}>
                {isEditing ? <SaveIcon /> : <PencilIcon />}
              </Button>
              <Button variant="ghost" size="icon" onClick={handleFormOpen}>
                <PlusIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <GroceryList isEditing={isEditing} />
            <GroceryForm openForm={openForm} setOpenForm={setOpenForm} />
          </CardContent>
        </Card>
      </div>
    </QueryClientProvider>
  )
}

export default App
