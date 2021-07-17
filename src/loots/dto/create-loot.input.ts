import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLootInput {
  @Field({ description: 'Loot description' })
  description: string;
}
