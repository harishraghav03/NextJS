// Prisma automatically regenerates the PrismaClient (always in sync with the models) and the result will be cached

import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
