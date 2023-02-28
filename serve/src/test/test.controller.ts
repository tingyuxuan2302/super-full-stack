import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from '../mysql/test.entity';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }
}
