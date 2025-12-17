import React from 'react'
import styles from '../../styles/Layout.module.css'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'
import Link
 from 'next/link'
export default function EventsPage({events} ) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>

      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          View All Events
        </Link>
      )}
    </Layout>
  )
}

export async function getServerSideProps(){
  // const res = await fetch(`${API_URL}/api/event`) //Nextjs Json
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`) //Strapi Backend

  const events = await res.json()
  console.log("events",events)
  return {
    props: { events },
    // revalidate: 1,
  }
}