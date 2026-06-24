import React from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from '@remotion/player';
import { IndustrialHero } from './IndustrialHero';

const init = () => {
  const container = document.getElementById('remotion-player');
  if (container) {
    console.log("Remotion Player: Container found, attempting to mount...");
    try {
      const root = createRoot(container);
      root.render(
        <Player
          component={IndustrialHero}
          durationInFrames={300}
          compositionWidth={1920}
          compositionHeight={1080}
          fps={30}
          style={{
            width: '100%',
            height: '100%',
          }}
          loop
          autoPlay
          controls={false}
        />
      );
      console.log("Remotion Player: Mount successful!");
    } catch (e) {
      console.error("Remotion Player Error: ", e);
      container.style.opacity = "1";
      container.style.backgroundColor = "red";
      container.style.color = "white";
      container.style.zIndex = "9999";
      container.style.pointerEvents = "auto";
      const msg = e instanceof Error ? e.message : String(e);
      container.innerText = `Remotion Error: ${msg}`;
    }
  } else {
    console.error("Remotion Player: Container #remotion-player not found!");
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
