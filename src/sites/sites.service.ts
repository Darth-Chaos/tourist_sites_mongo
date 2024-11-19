import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site } from './entities/site.entity';
import { CreateSiteDto } from './dto/create-site.dto';

@Injectable()
export class SitesService {
  constructor(
    @InjectModel(Site.name) private readonly siteModel: Model<Site>,
  ) {}

  async create(createSiteDto: CreateSiteDto): Promise<Site> {
    const createdSite = new this.siteModel(createSiteDto);
    return createdSite.save();
  }

  async findAll(): Promise<Site[]> {
    return this.siteModel.find().exec();
  }

  async findOne(id: string): Promise<Site> {
    return this.siteModel.findById(id).exec();
  }

  async update(
    id: string,
    updateSiteDto: Partial<CreateSiteDto>,
  ): Promise<Site> {
    return this.siteModel
      .findByIdAndUpdate(id, updateSiteDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Site> {
    return this.siteModel.findByIdAndDelete(id).exec();
  }
}
