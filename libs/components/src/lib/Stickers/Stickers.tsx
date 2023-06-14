import Image from 'next/image';

import stickersBitmap from './stickers.png';
import badgeVector from './badge.svg';
import styles from './Stickers.module.css'

export function Stickers() {
  return (
    <section className={styles.stickersSection}>
      <Image
        src={stickersBitmap}
        alt='stickers demo'
        fill
      />

      <Image
        src={badgeVector}
        alt='new badge'
        width={40}
        height={40}
        className={styles.badge}
      />
    </section>
  )
}
