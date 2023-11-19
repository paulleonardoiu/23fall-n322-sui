import React from 'react';
import { useRouter } from 'next/router';
import { Button, Icon, Label, Card, Loader, Image } from 'semantic-ui-react';
import styles from '@/styles/Pokemon.module.css';

export default function PokemonNamePage() {
    const [pokemonInfo, setPokemonInfo] = React.useState({ loading: true })
    const router = useRouter();

    React.useEffect(function(){
        if(pokemonInfo.name !== router.query.name && router.query.name){
            console.log('Load in pokemon info');
            fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
            .then(r=> r.json())
            .then(function (r){
                setPokemonInfo(r);
            })
            .catch((e)=>setPokemonInfo({loading: false, name: router.query.name}));
        }
    })

    // console.log(router.query);

    return (
        <>
            <div className={styles.pokemon}>
                <Card>
                    <h1>Pokemon Name: {router.query.name}</h1>
                    <Loader active={pokemonInfo.loading || pokemonInfo.name !== router.query.name}/>
                    {
                        // if this statement
                        pokemonInfo.id ? (
                        // then do this; true
                         <>
                         <Image src={pokemonInfo.sprites.front_default}></Image>
                            <h2>Type: {pokemonInfo.types[0].type.name}</h2>
                            <h2>Move: {pokemonInfo.moves[0].move.name}</h2>                        
                            <h2>Weight: {pokemonInfo.weight} lbs</h2>
                        </>
                        ) : ( 
                        // else do this; false
                        <>
                            {isNaN(pokemonInfo.id)
                            ? <h2>Searching for Pokemon</h2>
                        : <h2>Pokemon Not Found</h2>
                        }
                        </>
                        )
                    }
                    <div className='likeBtn'>
                        <Button as='div' labelPosition='right'>
                            <Button color='red'>
                                <Icon name='heart' />
                                Like
                            </Button>
                            <Label as='a' basic color='red' pointing='left'>
                                2,048
                            </Label>
                        </Button> 
                    </div>
                </Card>
            </div>
        </>
    )
}