import styles from '../styles/Home.module.css'; 
import { useEffect, useState } from 'react'; 
import { getYugiOh } from '../lib/getsPokemons'; 
import React from 'react';

export default function Home() { 
    const [cards, setCards] = useState<Array<any>>([]); 

    useEffect(() => { 
        const fetchCards = async () => { 
            console.log('Fetching yu-gi-oh...');
            const cardData = await getYugiOh(); 
            console.log('Fetched pokemons:', cardData);
            setCards(cardData); 
        };

        fetchCards(); 
    }, []);

    return (
        <div className={styles.container}> 
            <main className={styles.main}> 
                <h1>Cartas de yu-gi-oh</h1> 
                <div className={styles.grid}> 
                    {cards.map(card => ( 
                        <div key={card.id} className={styles.card}> 
                            <img src={card.card_images[0].image_url} alt={card.name} /> 
                            <h3>{card.name}</h3> 
                            <p>{card.desc}</p>
                        </div> 
                    ))}
                </div>
            </main>
        </div>
    );
}