import { Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Filters from '../components/filters/filters'
import Timeline from '../components/timeline/timeline'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
      <main>
        <Container maxWidth="md" sx={{ my: 15 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={4}>
              <Filters />
            </Grid>
            <Grid item xs={8}>
              <Timeline />
            </Grid>
          </Grid>
        </Container>
      </main>
  )
}

export default IndexPage;
