'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation';

import funnyMonsterBitmap from './funny-monster.png'
import romanticMonsterBitmap from './romantic-monster.png'

export const CuteMonsters = () => {
  const { category } = useParams();

  if (category === 'funny') {
    return (
      <div>
        {/* TODO: add monster shadow */}
        <Image
          src={funnyMonsterBitmap}
          width={260 / 3}
          height={308 / 3}
          alt='funny monster'
          style={{ marginTop: -76 }}
        />

        <h1 className='text-medium'>You&apos;ve got good sense of humour</h1>
      </div>
    );
  }

  return (
    <div>
      {/* TODO: add monster shadow */}
      <Image
        src={romanticMonsterBitmap}
        width={308 / 3}
        height={260 / 3}
        alt='romantic monster'
        style={{ marginTop: -76 }}
      />

      <h1 className='text-medium'>You&apos;re so romantics</h1>
    </div>
  );
}

export const MonstersOffset = <div style={{ marginBottom: 60 }}/>
