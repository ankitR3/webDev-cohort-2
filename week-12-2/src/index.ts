
import { z } from 'zod';
import express from 'express';

const app = express();
app.use(express.json());

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional()
});

// ✅ Create TypeScript type from Zod schema
type UserProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const parsed = userProfileSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(411).json({ errors: parsed.error.format() });
  }

  // ✅ parsed.data is now strongly typed as UserProfile
  const updateBody: UserProfile = parsed.data;

  // Update database logic here
  res.json({
    message: "User updated",
    data: updateBody
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});













// // Exclude
// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = {event: ExcludeEvent} => {
//     console.log(`Handling event: ${event}`);
// }

// handleEvent('click'); // OK
// handleEvent('scroll'); // OK













// // Record and Map
// // Record
// // type Users = Record<string, {age: number, name: string}>;

// // const users: Users = {
// //     "ras1dr@": {age: 26, name: "harkirat"},
// //     "ank9dr@": {age: 21, name: "ankit"},
// // }

// // Map
// type User = {
//     name: string;
//     age: number;
//     email: string;
// }

// const users = new Map<string, User>()
// users.set("ras@qd1", { name: "Ras", age: 30, email: "ras@qd1" })
// users.set("sarah@qd1", { name: "Sarah", age: 32, email: "sarah@qd1" })

// const user = users.get("ras@qd1")
// console.log(user);















// // readonly
// type User = {
//     readonly name: string;
//     readonly age: number;
// }

// const user: User = {
//     name: 'John',
//     age: 21
// }

// user.age = 12; // if i use readonly then this will complaint that i cannot change the value

// // a good example -> 
// interface Config {
//     readonly endpoint: string;
//     readonly apiKey: string;
// }

// const config: Readonly<Config> = {
//     endpoint: 'https://api.example.com',
//     apiKey: 'abcdef123456',
// };

// // config.apiKey = 'newKey'; // Error: Cannot assign to 'apiKey' because
// // it is a read-only property












// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };

// type UserProfile = Pick<User, 'name' | 'age' | 'password'>

// type UserProfileOptional = Partial<UserProfile>

// function updateUser(userProfile: UserProfileOptional) {
//     // hit the database to update the user
// }

// // if we use type UserProfileOptional = Partial<UserProfile> we can only change one thing like name or age or password it will not give any complaint
// // if we not use type UserProfileOptional = Partial<UserProfile> and want to change only one thing it will give error i have to change all 3
// updateUser({
//     name: "Ankit"
// })











// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };

// type UserProfile = Pick<User, 'name' | 'age' | 'password'>

// const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Age: ${user.age} Password: ${user.password}`);
// };










// interface User {
//     name: string;
//     age: number;
// };

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({ name: 'Taro', age: 20}, { name: 'Jiro', age: 30});
// console.log(age);