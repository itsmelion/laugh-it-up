import { Card, Header, Reviews, Stickers } from '@laugh-it-up/components';
import Image from 'next/image';

import peekyMonster from './peeky-monster.png';
import { PinVerification } from './PinVerification';

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

          <div style={{ textAlign: 'center'  }}>
            <Image
              style={{ marginTop: 50, marginBottom: -65  }}
              src={peekyMonster}
              width={118}
              height={132}
              alt='peeky monster'
            />
          </div>

          <Card>
            <h1 className='text-medium'>The sticker packs is ready!</h1>
            <p>
              We&apos;ve sent you a <b className='text-900'>4 digit code</b> please enter it below to confirm subscription!
            </p>

            <PinVerification />
          </Card>

          <Stickers />

          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
