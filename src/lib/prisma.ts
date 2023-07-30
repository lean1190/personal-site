import { PrismaClient } from '@prisma/client';

function isDevEnvironment() {
    return process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';
}

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient({ log: ['info', 'warn', 'error'] });

if (isDevEnvironment()) {
    globalForPrisma.prisma = prisma;
}

export default prisma;
