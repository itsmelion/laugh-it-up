import Image from 'next/image';
import { memo } from 'react';

import starVector from './star.svg';
import reviewAuthorBitmap from './author.png';
import styles from './Reviews.module.css'

type Review = {
  content: string;
  rate: number;
  author: string;
}

interface ReviewsProps {
  reviews: Review[]
}

export function Reviews(props:ReviewsProps) {
  const { reviews } = props;

  return (
    <section>
      {reviews.map(review => (
        <article className={styles.card}>
          <Image
            src={reviewAuthorBitmap}
            className={styles.avatar}
            alt='reviewer avatar'
            width={56}
            height={56}
          />

          <div className={styles.reviewWrapper}>
            <p className={styles.content}>{review.content}</p>
            <Stars rate={review.rate} />
            <h4 className={styles.author}>- {review.author}</h4>
          </div>
        </article>
      ))}
    </section>
  )
}

const Stars = memo((props: { rate: number }) => {
  const { rate } = props;

  return (
    <span className={styles.rateWrapper}>
      {new Array(rate).fill(null)
        .map((_, i) => (
          <Image
            key={i}
            width={11}
            height={11}
            alt='star rating'
            src={starVector}
          />
      ))}
    </span>
  );
})
