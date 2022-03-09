import type { NextPage } from 'next'
import styles from '../styles/Main.module.css'

import Button from '@material-ui/core/Button'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>
        Fortune teller
      </h1>

      <p className={styles.description}>
        What will today bring for you?
      </p>

      <Link href="/fortune" passHref>
        <Button variant="contained" color="primary">tell me</Button>
      </Link>

    </>
  )
}

export default Home
