import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Tenants } from './constants';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';
import { RolesConstants } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }



  @Post('login')
  login(@Body() body: any): any {
    return { accessToken: this.appService.createToken(body) };
  }

  @Get('weather')
  @Roles(RolesConstants.ADMIN)
  @UseGuards(RolesGuard)
  getWeather(): any {
    return { weather: 'Boston' };
  }


  @Get('tenant')
  getTenant(): any {
    return Tenants;
  }
}
