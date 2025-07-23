"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function insertAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: 'localhost',
            port: 5433, // change this if your PostgreSQL uses a different port
            database: 'postgres',
            user: 'postgres',
            password: 'mysecretpassword'
        });
        try {
            yield client.connect();
            const insertQuery = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5)
        `;
            const values = [1, 'New York', 'USA', '123 Broadway St', '10001'];
            const res = yield client.query(insertQuery, values);
            console.log('Address insertion success:', res.rowCount);
        }
        catch (err) {
            console.error('Error inserting address:', err);
        }
        finally {
            yield client.end();
        }
    });
}
insertAddress();
// const client = new Client({
//     host: "localhost",
//     port: 5433,
//     database: "postgres",
//     user: "postgres",
//     password: "mysecretpassword",
// });
// async function createAddressesTable() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE addresses (
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//             city VARCHAR(100),
//             country VARCHAR(100),
//             street VARCHAR(255),
//             pincode VARCHAR(20),
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//     console.log("Table 'addresses' created:", result.command); // should log: CREATE
//     await client.end();
// }
// createAddressesTable();
// // Async function to fetch user data from the database given an email
// async function getUser(email: string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5433,
//         database: "postgres",
//         user: "postgres",
//         password: "mysecretpassword"
//     })
//     try {
//         await client.connect(); // Ensure client connection is established
//         const query = 'SELECT * FROM users WHERE email = $1';
//         const values = [email];
//         const result = await client.query(query, [email]);
//         if (result.rows.length) {
//             console.log('Users found', result.rows[0]); // Output user data
//             return result.rows[0]; // Return the user data
//         } else {
//             console.log('No user found with the given email');
//             return null;
//         }
//     } catch (err) {
//         console.log('Error during fetching user', err);
//         throw err; // Rethrow or handle error appropriately
//     } finally {
//         await client.end(); // Close the client connection
//     }
// }
// // Example usage
// getUser('user3@example.com').catch(console.error);
// async function insertData() {
//     const client = new Client({
//         host: 'localhost',
//         port: 5433,
//         database: "postgres",
//         user: "postgres",
//         password: "mysecretpassword"
//     });
//     try {
//         await client.connect(); // Ensure client connection is established
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password')";
//         const res = await client.query(insertQuery);
//         console.log('Insertion success:', res); // Output insertion result
//     } catch (err) {
//         console.log('Error during the insertion:', err);
//     } finally {
//         await client.end(); // Close the client connection
//     }
// }
// insertData();
// const client = new Client({
//     host: "localhost",
//     port: 5433,
//     database: "postgres",
//     user: "postgres",
//     password: "mysecretpassword",
// })
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result);
// }
// createUsersTable();
