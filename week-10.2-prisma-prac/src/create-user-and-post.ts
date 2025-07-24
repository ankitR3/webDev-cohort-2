
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
     email: "ankit3@gmail.com",
     name: "ankit",
     posts: {
        create: [
            {
                title: "ankits title1"
            },
            {
                title: "ankits title2"
            },
        ]
     }
    }
  })
}

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