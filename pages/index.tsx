import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import { allBlogs } from '.contentlayer/data';
import BlogPost from '../components/BlogPost';
import { pick } from '../lib/utils';

import Container from '../components/Container';

export default function Page({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>){

  return (
    <Container>
      <div className="w-full max-w-2xl mx-auto">
        <div className='flex flex-col-reverse sm:flex-row'>
          <div>
            <h1 className="text-5xl font-bold mb-1">
              Hi, Im Chamika
            </h1>
            <p className='text-gray-700 mb-4'>Associate Product Developer at And Digital</p>
            <br />
            <p>Coding and learning React, Next JS and frontend stuff.</p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Chamika Adikari"
              height={176}
              width={176}
              src="/avatar.jpeg"
              className="rounded-full"
            />
          </div>
        </div>
        <div className='mt-16'>
          <h3 className='font-bold text-2xl md:text-4xl'>Blog Posts</h3>
          <div>
          {posts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
