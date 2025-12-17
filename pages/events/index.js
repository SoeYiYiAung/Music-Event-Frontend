import React from 'react'
import styles from '../../styles/Layout.module.css'
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'
import EventItem from '@/components/EventItem'
import Link
 from 'next/link'
export default function EventsPage({ events, page, total } ) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>

      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {/* {events.length > 0 && (
        <Link href='/events'>
          View All Events
        </Link>
      )} */}
       <Pagination page={page} total={total} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {

  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json()

  // Fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  )

  const events = await eventRes.json()
  console.log("events",events)
  return {
    props: { events, page: +page, total },
    // revalidate: 1,
  }
}