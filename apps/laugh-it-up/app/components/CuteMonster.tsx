import cuteMonsterBitmap from './cute_monster4.png';
import Image from 'next/image';

const ratios = {
  width: 138,
  height: 117.6,
}

export const CuteMonster = () => (
  <div style={{ position: 'absolute', width: '100%', left: 0, right: 0, top: 0 }}>
    <div className='relative'>
      <div style={{ height: ratios.height / 7.35, background: 'white' }} />

      <Image
        width={ratios.width}
        height={ratios.height}
        src={cuteMonsterBitmap}
        alt="cute monster expectant"
        style={{ position: 'absolute', right: '10%', bottom:0 }}
      />
    </div>
  </div>
);

// Cute Monsters Offset
export const CuteMostersOffset = <div style={{ marginTop: ratios.height * 0.9 }} />;
