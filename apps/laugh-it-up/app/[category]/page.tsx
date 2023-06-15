import { Card, Header, Reviews, Stickers } from '@laugh-it-up/components';
import { CuteMonsters, MonstersOffset } from './components/CuteMonsters';
import dynamic from 'next/dynamic'

const PhoneForm = dynamic(() =>
  import('./components/PhoneForm/PhoneForm')
    .then(({ PhoneForm: component }) => ({ default: component })),
  { ssr: true }
);

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
          {MonstersOffset}
          <Card>
            <CuteMonsters />

            <PhoneForm />
          </Card>

          <Stickers />

          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
