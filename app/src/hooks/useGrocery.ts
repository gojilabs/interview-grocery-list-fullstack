import { useMutation, useQuery } from '@tanstack/react-query'

import { createGroceryItem, getGroceryList } from '@services/grocery'

export const useGroceryList = (params?: { priority?: number; status?: string; perPage?: number }, enabled = true) => {
  return useQuery({
    queryKey: ['groceryList'],
    queryFn: () => getGroceryList({ ...params }),
    enabled,
  })
}

export const useCreateGrocery = () => {
  return useMutation({
    mutationKey: ['createGrocery'],
    mutationFn: (groceryItem: GroceryItem) => createGroceryItem(groceryItem),
  })
}
