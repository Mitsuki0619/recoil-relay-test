import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    },
    allPosts: () => {
      return prisma.post.findMany();
    },
    findPost: (_, { id }) => {
      return prisma.post.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createUser: (_, { name, email, password }) => {
      return prisma.user.create({ data: { name, email, password } });
    },
    createPost: (_, { title, content, authorId }) => {
      return prisma.post.create({ data: { title, content, authorId } });
    },
    updatePost: (_, { id, title, content }) => {
      return prisma.post.update({
        where: { id },
        data: { title, content },
      });
    },
    deletePost: (_, { id }) => {
      return prisma.post.delete({
        where: { id },
      });
    },
  },
};
