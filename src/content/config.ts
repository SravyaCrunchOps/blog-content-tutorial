// import utitlites from astro:content
import { z, defineCollection } from "astro:content";

// Define type and  schema for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
});

// export single collections object to register your collection
export const collections = {
    posts: postsCollection,
}

// then quit 'run dev' and add 'npx astro sync' to sync astro with collections 
// this will define astro:content module for Content Collection API. Restart tutorial 