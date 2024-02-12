import { Title } from '@mantine/core'

import { Metadata } from '@redwoodjs/web'

import classes from './HomePage.module.scss'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <Title className={classes.title}>This is a test</Title>
    </>
  )
}

export default HomePage
