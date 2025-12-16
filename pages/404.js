import React from 'react'
import { FaExclamation } from 'react-icons/fa'
import Link from 'next/link'
import styles from '../styles/404.module.css'
import Layout from '@/components/Layout'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
            <FaExclamation />
        </h1>
        <h1>404</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href='/'> Back </Link>
      </div>
    </Layout>
  )
}
