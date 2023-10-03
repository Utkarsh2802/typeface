import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FileDocument = HydratedDocument<File>;

@Schema()
export class File {
  @Prop()
  name: string;

  @Prop()
  url: string; //url where the file is stored

  @Prop()
  size: number; //size of the file in bytes

  @Prop()
  date_created: Date;

  @Prop()
  date_modified: Date;
}

export const FileSchema = SchemaFactory.createForClass(File);
