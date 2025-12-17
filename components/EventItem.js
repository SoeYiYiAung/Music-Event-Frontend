import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'
import { API_URL } from '@/config/index'

export default function EventItem({ evt }) {
  const imageUrl = evt.image
  ? `${API_URL}${evt.image.formats.thumbnail.url}`
  : '/images/event-default.png';

  console.log("imafe",imageUrl)

  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          // src={evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'}
          src={imageUrl}
          width={170}
          height={100} unoptimized 
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          {/* <a className='btn'>Details</a>
           */}
           Details
        </Link>
      </div>
    </div>
  )
}