import {
  IsString,
  MinLength,
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsPositive()
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @IsIn(['men', 'woman', 'kid', 'unisex'])
  gender: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images: string[];
}
