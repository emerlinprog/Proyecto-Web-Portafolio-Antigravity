import React from 'react';
import { registerRoot, Composition } from 'remotion';
import { IndustrialHero } from './IndustrialHero';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="IndustrialHero"
        component={IndustrialHero}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
