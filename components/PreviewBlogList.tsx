'use client'

import { usePreview } from "@/lib/sanity.preview";
import Bloglist from './BlogList'

type Props = {
    query: string;
}

const PreviewBlogList = ({ query }: Props) => {
    const posts = usePreview(null, query)
    console.log('Loading posts', posts)
  return (
    <Bloglist posts={posts} />
  )
}

export default PreviewBlogList
