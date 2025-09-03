import type { Category, MicroCMSResponse, Post, Tags } from "@/types/type"
import { createClient } from "microcms-js-sdk"

const apiKey = import.meta.env.MICROCMS_API_KEY
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN

const client = createClient({
    apiKey,
    serviceDomain,
})

export const getPosts = async () => {
    const { contents } = await client.get<MicroCMSResponse<Post>>({
        endpoint: "blogs",
    })

    return contents
}

export const getPost = async (id: string) => {
    const post = await client.get<Post>({
        endpoint: "blogs",
        contentId: id,
    })

    return post
}

export const getCategories = async () => {
    const { contents } = await client.get<MicroCMSResponse<Category>>({
        endpoint: "categories",
    })

    return contents
}

export const getTags = async () => {
    const { contents } = await client.get<MicroCMSResponse<Tags>>({
        endpoint: "tag",
    })

    return contents
}
