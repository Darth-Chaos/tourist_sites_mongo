import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesModule } from './sites/sites.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Stefannii:stefanni@cluster0.wcr1r.mongodb.net/tourist_sites?retryWrites=true&w=majority',
    ),
    SitesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
