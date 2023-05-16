import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import styles from '@/styles/Home.module.css'
import { store } from '../src/store';
import dynamic from 'next/dynamic'

const RemoteApp = dynamic(
  () => import('remote/RemoteApp'),
  { ssr: false }
);
export default function Home() {
  return (
    <>
     <Provider store={store}>
      <div style={{height:'100vh',padding:'3%'}}>
      <div className={styles.description}>
          <p>
            this is Host App {" "}            
            <code className={styles.code}>localhost:3001</code>
          </p>
        </div>
       
        <div>
          <Suspense fallback="Loading...">
            <RemoteApp store={store} />
          </Suspense>
        </div>
      </div>
    </Provider>
    </>
  )
}
