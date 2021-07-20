import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArmorsService } from './armors.service';
import { Armor } from './entities/armor.entity';
import { CreateArmorInput } from './dto/create-armor.input';
import { UpdateArmorInput } from './dto/update-armor.input';

@Resolver(() => Armor)
export class ArmorsResolver {
  constructor(private readonly armorsService: ArmorsService) {}

  @Mutation(() => Armor)
  async createArmor(
    @Args('createArmorInput') createArmorInput: CreateArmorInput,
  ): Promise<Armor> {
    return this.armorsService.create(createArmorInput);
  }

  @Query(() => [Armor], { name: 'armors' })
  async findAll(): Promise<Armor[]> {
    return this.armorsService.findAll();
  }

  @Query(() => Armor, { name: 'armor' })
  async findOne(@Args('id') id: string): Promise<Armor> {
    return this.armorsService.findOne(id);
  }

  @Mutation(() => Armor)
  async updateArmor(
    @Args('updateArmorInput') updateArmorInput: UpdateArmorInput,
  ): Promise<Armor> {
    return this.armorsService.update(updateArmorInput.id, updateArmorInput);
  }

  @Mutation(() => Armor)
  async removeArmor(@Args('id') id: string): Promise<Armor> {
    return this.armorsService.remove(id);
  }
}
