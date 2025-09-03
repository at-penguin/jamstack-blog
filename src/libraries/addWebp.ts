export const addWebp = (url: string): string => {
    const src = new URL(url)
    src.searchParams.append("fm", "webp")
    return src.toString()
}
