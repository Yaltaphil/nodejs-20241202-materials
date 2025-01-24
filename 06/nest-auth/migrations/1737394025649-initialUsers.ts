import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class InitialUsers1737394025649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = ['john', 'maria'];
    const password = 'passw0rd';

    for (const user of users) {
      const hash = await bcrypt.hash(password, 10);

      await queryRunner.query(`
        INSERT INTO user (username, password)
        VALUES ('${user}', '${hash}')
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM user WHERE username IN ('john', 'maria') 
    `);
  }
}
