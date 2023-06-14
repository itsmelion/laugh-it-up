import { Button, Card, Header, Reviews, Stickers } from '@laugh-it-up/components';

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

          <Card>
            <h1>Hello</h1>
          </Card>

          <Button title='Funny' />
          <Stickers />

          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
