import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateResistanceInput {
  @Field(() => Int, { description: 'damage resistance', nullable: true })
  damage?: number;

  @Field(() => Int, { description: 'burn resistance', nullable: true })
  burn?: number;

  @Field(() => Int, { description: 'freeze resistance', nullable: true })
  freeze?: number;

  @Field(() => Int, { description: 'shock resistance', nullable: true })
  shock?: number;

  @Field(() => Int, { description: 'blind resistance', nullable: true })
  blind?: number;

  @Field(() => Int, { description: 'panic resistance', nullable: true })
  panic?: number;

  @Field(() => Int, { description: 'poison resistance', nullable: true })
  poison?: number;

  @Field(() => Int, { description: 'pain resistance', nullable: true })
  pain?: number;
}
