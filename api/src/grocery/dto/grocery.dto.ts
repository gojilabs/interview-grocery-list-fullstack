import { IsEnum, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'
import { Transform } from 'class-transformer'
import { PartialType } from '@nestjs/mapped-types'

import { GroceryItemStatus } from '@prisma/client'

export class CreateGroceryDto {
  @IsString()
  name: string

  @IsNumber()
  @Transform(({ value }) => (value ? Number(value) : undefined))
  priority: number

  @IsNumber()
  @Transform(({ value }) => (value ? Number(value) : undefined))
  quantity: number

  @IsEnum(GroceryItemStatus)
  @IsOptional()
  status?: GroceryItemStatus
}

export class UpdateGroceryDto extends PartialType(CreateGroceryDto) {}

export class GroceryItemIdDto {
  @IsUUID()
  id: string
}
