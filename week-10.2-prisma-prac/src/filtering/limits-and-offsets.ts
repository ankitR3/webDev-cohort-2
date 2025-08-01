
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient({
    log: ['info', 'query']
})

async function main() {
  let res = await prisma.post.findMany({
    take: 2,
    skip: 2
  })
    console.log(res);
    
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