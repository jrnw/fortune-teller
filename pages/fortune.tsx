import type { NextPage } from 'next'
import styles from '../styles/Main.module.css'

import Button from '@material-ui/core/Button'
import Link from 'next/link'

import { getRandomEmojis } from '../components/emojis'


const Fortune: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>
        Your fortune!
      </h1>

      <p className={styles.description}>
        <span className={styles.emojidisplay}>{getRandomEmojis(4)}</span>
      </p>

      <Link href="/" passHref>
        <Button variant="contained" color="primary">back</Button>
      </Link>
    </>
  )
}

export default Fortune
