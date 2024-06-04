import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Card, CardContent, CardHeader } from '@mui/material'
import Container from '@mui/material/Container'

import GroceryList from '@components/groceryList'
import { QueryClientProvider, queryClient } from '@utils/client'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Card sx={{ my: 4 }} variant="outlined">
          <CardHeader title="Grocery List" />
          <CardContent>
            <GroceryList />
          </CardContent>
        </Card>
      </Container>
    </QueryClientProvider>
  )
}

export default App
