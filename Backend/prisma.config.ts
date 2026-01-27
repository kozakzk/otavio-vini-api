import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: 'postgresql://neondb_owner:npg_PSj1dQ3nzrIT@ep-floral-union-acel2718-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
});
