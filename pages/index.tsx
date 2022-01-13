import type { ReactElement } from 'react'
import Image from 'next/image';

import { Layout } from '../components';

export default function Page(){
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className='flex flex-col-reverse sm:flex-row'>
        <div>
          <h1 className="text-5xl font-bold mb-1">
            Hi, Im Chamika
          </h1>
          <p className='text-gray-700 mb-4'>Product Developer at And Digital</p>
          <br />
          <p>Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.</p>
        </div>
        <Image
          className='rounded-full'
          src="/my-pic.jpeg"
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </div>
      <div className='mt-16'>
        <h3 className='font-bold text-2xl md:text-4xl'>Blog Posts</h3>
        <div>
          <div className='mt-12'>
            <h4 className='text-lg font-bold'>My Custom CSS Reset</h4>
            <p className='mt-4'>I have a set of baseline CSS styles that come with me from project to project. In the past, Id use a typical CSS reset, but times have changed, and I believe I have a better set of global styles!</p>
          </div>
          <div className='mt-12'>
            <h4 className='text-lg font-bold'>My Custom CSS Reset</h4>
            <p className='mt-4'>I have a set of baseline CSS styles that come with me from project to project. In the past, Id use a typical CSS reset, but times have changed, and I believe I have a better set of global styles!</p>
          </div>
          <div className='mt-12'>
            <h4 className='text-lg font-bold'>My Custom CSS Reset</h4>
            <p className='mt-4'>I have a set of baseline CSS styles that come with me from project to project. In the past, Id use a typical CSS reset, but times have changed, and I believe I have a better set of global styles!</p>
          </div>
          <div className='mt-12'>
            <h4 className='text-lg font-bold'>My Custom CSS Reset</h4>
            <p className='mt-4'>I have a set of baseline CSS styles that come with me from project to project. In the past, Id use a typical CSS reset, but times have changed, and I believe I have a better set of global styles!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
