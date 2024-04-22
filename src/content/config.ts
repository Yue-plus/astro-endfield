import {z, defineCollection} from "astro:content"

const docsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // pubDate: z.date(),
        // description: z.string(),
        // author: z.string(),
        // image: z.object({
        //     url: z.string(),
        //     alt: z.string()
        // }),
        // tags: z.array(z.string())
    })
})

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // pubDate: z.date(),
        // description: z.string(),
        // author: z.string(),
        // image: z.object({
        //     url: z.string(),
        //     alt: z.string()
        // }),
        // tags: z.array(z.string())
    })
})

// 参考：https://docs.astro.build/zh-cn/guides/content-collections/
export const collections = {
    'docs': docsCollection,
    'blog': blogCollection,
}
