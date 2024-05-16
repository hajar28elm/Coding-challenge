// // pages/api/posts/create.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient, Post } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Post | { error: string }>) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     const { title, content } = req.body;

//     try {
//         const newPost = await prisma.post.create({
//             data: {
//                 title,
//                 content,
//                 created_at: new Date(), // Assuming you want to set the current date as the creation date
//                 updated_at: new Date(), // Assuming the post is also updated at creation time
//             },
//         });
//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     } finally {
//         await prisma.$disconnect(); // Disconnect from the Prisma Client
//     }
// }
