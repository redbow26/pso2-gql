import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateArmorInput } from './dto/create-armor.input';
import { UpdateArmorInput } from './dto/update-armor.input';
import { Armor } from './schemas/armor.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArmorsService {
  constructor(
    @InjectModel(Armor.name)
    private readonly armorModel: Model<Armor>,
  ) {}

  async create(createArmorInput: CreateArmorInput): Promise<Armor> {
    const createdArmor = new this.armorModel(createArmorInput);
    return createdArmor.save();
  }

  async findAll(): Promise<Armor[]> {
    return this.armorModel.find().exec();
  }

  async findOne(id: string): Promise<Armor> {
    return this.armorModel.findById(id).exec();
  }

  async update(id: string, updateArmorInput: UpdateArmorInput): Promise<Armor> {
    throw new NotImplementedException('Not yet implemented');
  }

  async remove(id: string): Promise<Armor> {
    throw new NotImplementedException('Not yet implemented');
  }
}
