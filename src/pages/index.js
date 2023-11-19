import React from 'react';
import { Card, Image, Grid, Button } from 'semantic-ui-react';
import styles from '@/styles/Home.module.css';

export default function Home(){
  return (
    <>
        <Grid centered columns={2}>
          <Grid.Column>
            <Image src='/pokemon.png' ui={false} style={{width: '100%'}}/>
          </Grid.Column>
          <Grid.Row centered columns={2} className={styles.header}>
            <Grid.Column >
              <h1 className={styles.title} style={{'text-align': 'center'}}>Welcome to the Pokedex!</h1>
              <h2 className={styles.subHeader} style={{'text-align': 'center'}}> Search for any existing pokemon to learn more about them!</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </>
  )
}