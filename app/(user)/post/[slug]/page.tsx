import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'
import { groq } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60; // Revalidates this page every 'x' seconds where x is the value after equals to sign

export async function generateStaticParams(){
    const query = groq`*[_type=='post']
    {
        slug
    }`
    const slugs: Post[] = await client.fetch(query)
    const slugRoutes = slugs.map(slug => slug.slug.current)

    return slugRoutes.map(slug => ({
        slug,
    }))
}

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `

  const post: Post = await client.fetch(query, { slug })

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 text-white border border-primary">
        <div className="relative min-h-[224px] flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full p-10 opacity-10 blur-sm">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="w-full p-5 bg-primary">
            <div className="flex flex-col justify-between md:flex-row gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className='w-64'>
                    <h3 className='text-lg font-bold'>{post.author.name}</h3>
                    <div>{/* Author Bio */ }</div>
                </div>
              </div>
            </div>
            <div>
                <h2 className='pt-10 italic'>{post.description}</h2>
                <div className='flex items-center justify-end mt-auto space-x-2'>
                    {post.categories.map((category) => (
                        <p key={category._id} className='px-3 py-1 mt-4 text-sm font-semibold text-white bg-gray-800 rounded-full'>
                            {category.title}
                        </p>
                    ))}
                </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  )
}

export default Post
