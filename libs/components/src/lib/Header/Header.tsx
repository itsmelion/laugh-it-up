import Image from 'next/image';

import styles from './Header.module.css';

import newBadge from './NEW.png';
import whatsAppLogo from './whatsapp.svg';
import logoVector from './logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        alt='new sticker packs badge'
        src={newBadge}
        width={56}
        height={56}
      />

      <Image
        alt='whatsapp logo'
        src={whatsAppLogo}
        width={56}
        height={56}
      />

      <Image
        alt='laugh it up logo'
        src={logoVector}
        width={45}
        height={56}
      />
    </header>
  );
}
