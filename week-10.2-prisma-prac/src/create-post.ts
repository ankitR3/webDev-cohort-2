import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient(); // {log: ['info', 'query']}

async function main() {
  await prisma.post.create({
    data: {
     title: "title of post",
     content: "asdasd",
     published: true,
     author: {
        connect: {
            id: 1
        }
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