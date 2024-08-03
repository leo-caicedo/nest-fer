import { IsPositive, IsString, MinLength } from "class-validator"

export class CreateCarDto {
  @IsString()
  @MinLength(3)
  readonly name: string
  @IsPositive()
  readonly year: number
}