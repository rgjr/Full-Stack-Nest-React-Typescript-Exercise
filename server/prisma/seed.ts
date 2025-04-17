import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Bob Rob',
      email: 'bob@rob.com',
      password: 'password',
    },
  });

  const invoice = await prisma.invoice.create({
    data: {
      vendor_name: 'Vendor 1',
      amount: 100,
      due_date: new Date(),
      description: 'Invoice 1',
      user_id: 1,
      paid: false,
    },
  });

  console.log({ user, invoice });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
