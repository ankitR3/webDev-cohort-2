import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({
        // where: {
        //     email: "ankitraj123@gmail.com"
        // }
    });
    console.log(users);
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    });
    console.log(user);
};

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })