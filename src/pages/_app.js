import React from 'react';
import 'semantic-ui-css/semantic.css';
import '@/styles/globals.css';
import { Menu, Input, Button } from 'semantic-ui-react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';


export default function App({ Component, pageProps }) {
  const [pokemonSearch, setPokemonSearch] = React.useState('');

  function updateSearch(e, {value}) {
    setPokemonSearch(value);
  }
  return (
    <>

      <div className={styles.siteContainer}>
        <Menu>
          <Menu.Item as={Link} href='/'>Home</Menu.Item>
          <Menu.Item>
            <Input name='pokemonSearch' onChange={updateSearch} value={pokemonSearch}/>
            <Button as={Link} href={`/pokemon/${pokemonSearch}`}>Search</Button>
          </Menu.Item>
        </Menu>
        <Component {...pageProps} />
      </div>
    </>
  )
}
