import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '../../components/MDXComponents';
import BlogLayout from '../../layouts/blog';
import { allBlogs } from '.contentlayer/data';
import react from 'react';

export default function Post({ post }: { post: any }) {
  const Component = useMDXComponent(post.body.code);
 
  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p : any) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params } : any) {
  const post = allBlogs.find((post: any) => post.slug === params.slug);

  return { props: { post } };
}
