import { IsOptional, IsPositive, IsString, IsUUID, MinLength } from "class-validator"

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly name?: string

  @IsPositive()
  @IsOptional()
  readonly year?: number
}