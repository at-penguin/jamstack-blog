import type { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk"

export interface Metadata {
    title?: string
    description?: string
    keywords?: string | string[]
}

export interface Category extends MicroCMSContentId, MicroCMSDate {
    name: string
}

export interface Tags extends MicroCMSContentId, MicroCMSDate {
    tags: string
}

export interface Post extends MicroCMSContentId, MicroCMSDate {
    title: string
    content: string
    old_content?: string // 旧リッチエディタ
    eyecatch?: MicroCMSImage
    category: Category
    Emoji: string
    tags: Tags[]
}

export interface TocItem {
    text: string
    id: string
    name: string
}

interface MicroCMSResponse<T> {
    contents: T[]
    totalCount: number
    offset?: number
    limit?: number
}
