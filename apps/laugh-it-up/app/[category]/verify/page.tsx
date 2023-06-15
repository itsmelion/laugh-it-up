import { Card, Header, Reviews, Stickers, PinInput } from '@laugh-it-up/components';

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
            <h1 className='text-medium'>The sticker packs is ready!</h1>
            <p>
              We&apos;ve sent you a <b className='text-900'>4 digit code</b> please enter it below to confirm subscription!
            </p>

            <PinInput />
          </Card>

          <Stickers />

          <Reviews reviews={reviews} />
        </section>
      </div>
    </div>
  );
}
