import Image from 'next/image';
import { Card, Header, Reviews, Stickers } from '@laugh-it-up/components';

import funnyMonsterBitmap from './grateful-monster.png';
import styles from './thankYou.module.css';


const reviews = [
  {
    content: "It's good. There are many cool stickers!",
    author: "Fikri Aziz",
    rate: 4
  }
];

export default async function Index() {
  return (
    <div className="wrapper">
      <div className="container">
        <section id="welcome">
          <Header />

          <div style={{ marginTop: 65 }} />
          <Card>
            <div className={styles['card-wrapper']}>
              <Image
                src={funnyMonsterBitmap}
                alt='grateful monster bidding farewell'
                style={{ marginTop: -120 }}
                width={127}
                height={152}
              />

              <h1 className='mt-1 text-medium'>Thank You!</h1>
              <p>Now you can express your emotions with the amazing stickers. Have fun!</p>
            </div>
          </Card>

          <Stickers />

          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
