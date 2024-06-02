import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useState } from 'react'
import { Card, CardActions, CardContent } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ky from 'ky'

import { QueryClientProvider, queryClient, useQuery } from '@utils/client'
import { env } from '@constants/env'

console.log({ env })

const Users = () => {
  const { data, refetch } = useQuery<{ data: { id: string; email: string }[] }>({
    queryKey: ['users'],
    queryFn: () => ky.get(`${env.API_URL}/user`).json(),
    enabled: false, // disable auto fetching by default
  })

  return (
    <Container>
      <Typography>get users number: {data?.data.length ?? 'no data'}</Typography>
      <Button onMouseDown={() => refetch()}>Update data</Button>
    </Container>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Card sx={{ my: 4 }} variant="outlined">
          <CardContent>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              Material UI Vite.js example in TypeScript
            </Typography>
            <Users />
          </CardContent>
          <CardActions>
            <Button onMouseDown={() => setCount(count => count + 1)}>count is {count}</Button>
          </CardActions>
        </Card>
      </Container>
    </QueryClientProvider>
  )
}

export default App
