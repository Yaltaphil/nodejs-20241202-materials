import { UsersService } from '../users.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService (mocked)', () => {
  let service: UsersService;
  let userRepository: Repository<User>;

  const mockedRepository = {
    findOneBy: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockedRepository,
        },
      ],
    }).compile();

    service = module.get(UsersService);
    userRepository = module.get(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return user by username', async () => {
    const user = { id: 1, username: 'John' };
    mockedRepository.findOneBy.mockReturnValue(user);
    const result = await service.findOne('John');
    expect(result).toEqual(user);
    expect(mockedRepository.findOneBy).toHaveBeenCalledWith({
      username: 'John',
    });
  });

  it('should return null if user not found', () => {});

  it('should create new user', () => {});
});
