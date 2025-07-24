import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient(); // {log: ['info', 'query']}

async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
            email: "ankit4142@gmail.com",
            name: "Ankit Raj"
        }
    })
}

main()
    .then(async () => {
        console.log("done with the query");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })