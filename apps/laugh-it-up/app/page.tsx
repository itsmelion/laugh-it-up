import { Button, Card, Header, Reviews, Stickers } from '@laugh-it-up/components';
import Link from 'next/link';

import { CuteMonster, CuteMostersOffset } from './components/CuteMonster';

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

          {CuteMostersOffset}
          <Card>
            <CuteMonster/>
            <h1 className='mt-1'>
              Express your self with<br/>
              <b className='text-900'>New <span className='color-primary'>WhatsApp Stickers</span></b>
            </h1>

            <p>Choose your sticker type:</p>

            <Link href={'/funny'}>
              <Button title='Funny' />
            </Link>

            <Link href={'/romance'}>
              <Button title='Romance' />
            </Link>
          </Card>

          <Stickers />

          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
