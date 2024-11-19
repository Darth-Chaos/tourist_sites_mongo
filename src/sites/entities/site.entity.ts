import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Site extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({
    type: {
      name: { type: String },
      description: { type: String },
    },
  })
  category?: {
    name: string;
    description: string;
  };

  @Prop({
    type: {
      city: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
    },
  })
  location?: {
    city: string;
    latitude: number;
    longitude: number;
  };

  @Prop()
  opening_hours?: string;

  @Prop()
  entry_fee?: number;

  @Prop()
  website?: string;

  @Prop({
    type: [
      {
        photo_url: { type: String },
        description: { type: String },
        upload_date: { type: String },
      },
    ],
  })
  photos?: {
    photo_url: string;
    description?: string;
    upload_date?: string;
  }[];

  @Prop({
    type: [
      {
        reviewer_name: { type: String },
        rating: { type: Number },
        comment: { type: String },
        review_date: { type: String },
      },
    ],
  })
  reviews?: {
    reviewer_name: string;
    rating: number;
    comment?: string;
    review_date?: string;
  }[];
}

export const SiteSchema = SchemaFactory.createForClass(Site);
