import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common'
import { GroceryService } from './grocery.service'
import { FilterGroceryDto } from './dto/filter.dto'
import { CreateGroceryDto, UpdateGroceryDto } from './dto/grocery.dto'

@Controller({
  version: '1',
  path: 'grocery',
})
export class GroceryController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get()
  async filterGroceries(@Query() filter: FilterGroceryDto) {
    const data = await this.groceryService.filterGroceries(filter)

    return {
      data,
    }
  }

  @Post()
  async createGrocery(@Body() createGroceryDto: CreateGroceryDto) {
    const data = await this.groceryService.createGrocery(createGroceryDto)

    return {
      data,
    }
  }

  @Put(':id')
  async updateGrocery(@Param('id') id: string, @Body() updateGroceryDto: UpdateGroceryDto) {
    const data = await this.groceryService.updateGrocery(id, updateGroceryDto)

    return {
      data,
    }
  }
}
