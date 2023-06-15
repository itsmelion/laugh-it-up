import { Card, Header, Reviews, Stickers } from '@laugh-it-up/components';
import { CuteMonsters, MonstersOffset } from './components/CuteMonsters';
import { PhoneForm } from './components/PhoneForm/PhoneForm';

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

            <PhoneForm/>
          </Card>

          <Stickers />

          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
