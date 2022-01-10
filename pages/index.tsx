import type { ReactElement } from 'react'
import styles from '../styles/Home.module.css';
import { Layout } from '../components';

export default function Page(){
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
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
