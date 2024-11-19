import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';

@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  async create(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  @Get()
  async findAll() {
    return this.sitesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.sitesService.findOne(id);
  }

  @Post('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateSiteDto: Partial<CreateSiteDto>,
  ) {
    return this.sitesService.update(id, updateSiteDto);
  }

  @Post('delete/:id')
  async remove(@Param('id') id: string) {
    return this.sitesService.remove(id);
  }
}
