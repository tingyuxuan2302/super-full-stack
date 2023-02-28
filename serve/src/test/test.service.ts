import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from '../mysql/test.entity';
@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  private readonly test: Test[] = [];

  async findAll(): Promise<Test[]> {
    return await this.testRepository.find();
  }
}
