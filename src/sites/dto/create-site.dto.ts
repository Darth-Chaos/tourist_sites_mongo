import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  IsObject,
  IsPositive,
  IsUrl,
} from 'class-validator';

export class CreateSiteDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsObject()
  @IsOptional()
  category?: {
    name: string;
    description: string;
  };

  @IsObject()
  @IsOptional()
  location?: {
    city: string;
    latitude: number;
    longitude: number;
  };

  @IsString()
  @IsOptional()
  opening_hours?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  entry_fee?: number;

  @IsString()
  @IsOptional()
  @IsUrl()
  website?: string;

  @IsArray()
  @IsOptional()
  photos?: {
    photo_url: string;
    description?: string;
    upload_date?: string;
  }[];

  @IsArray()
  @IsOptional()
  reviews?: {
    reviewer_name: string;
    rating: number;
    comment?: string;
    review_date?: string;
  }[];
}
