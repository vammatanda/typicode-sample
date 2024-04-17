import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import * as path from 'path';

@Controller('test1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  findFile(@Param('id') id: string) {
    const s1 = './src/files/conf_';
    const filePath = path.join(process.cwd(), s1.concat(id).concat('.json'));
    const configFile = fs.readFileSync(filePath, 'utf-8').toString();
    const config = JSON.parse(configFile);
    return config;
  }
}
