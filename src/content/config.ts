import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      author: z.string(),
      image: image(),
      isDraft: z.boolean().default(false),
    }),
});

export const collections = { blog: blogCollection };
