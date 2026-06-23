import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const IndustrialHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  // Animations
  const rotation = interpolate(frame, [0, fps * 10], [0, 10]);
  const scanLinePos = (frame * 2) % height;
  const glitchOpacity = Math.random() > 0.98 ? 0.3 : 0;

  // Spring animation for initial reveal
  const reveal = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#050505', overflow: 'hidden' }}>
      {/* Dynamic Background Glow */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(204, 255, 0, 0.05) 0%, transparent 70%)',
          opacity: reveal,
        }}
      />

      {/* Primary Technical Grid */}
      <div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
          backgroundImage: `
            linear-gradient(to right, rgba(204, 255, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(204, 255, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `rotate(${rotation}deg)`,
          opacity: 0.5 * reveal,
        }}
      />

      {/* Scanning Laser */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          backgroundColor: '#ccff00',
          top: scanLinePos,
          opacity: 0.1,
          boxShadow: '0 0 15px #ccff00',
        }}
      />

      {/* Random Digital Glitch Overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#ccff00',
          opacity: glitchOpacity,
          mixBlendMode: 'overlay',
        }}
      />

      {/* HUD Data Readouts */}
      <div style={{ position: 'absolute', top: 40, left: 40, color: '#ccff00', opacity: 0.4, fontSize: 10, fontFamily: 'monospace' }}>
        LAT: {40.7128 + Math.sin(frame * 0.01) * 0.001}<br/>
        LNG: {-74.0060 + Math.cos(frame * 0.01) * 0.001}<br/>
        SYSTEM_LOAD: {(Math.sin(frame * 0.05) * 20 + 40).toFixed(2)}%<br/>
        ENCRYPTION: AES_256_ACTIVE
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
          fontFamily: 'monospace',
          color: '#ccff00',
          fontSize: 12,
          letterSpacing: 8,
          opacity: 0.3 * reveal,
        }}
      >
        [ ENGINE_STATUS: NOMINAL ]
      </div>

      {/* Circular Tech HUD */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${reveal})`,
          width: '400px',
          height: '400px',
          border: '1px solid rgba(204, 255, 0, 0.1)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.2,
        }}
      >
        {/* Rotating Inner Ring */}
        <div
          style={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            border: '2px dashed rgba(204, 255, 0, 0.2)',
            borderRadius: '50%',
            transform: `rotate(${rotation * 5}deg)`,
          }}
        />
        {/* Rapid Outer Ring */}
        <div
          style={{
            position: 'absolute',
            width: '110%',
            height: '110%',
            border: '1px solid rgba(204, 255, 0, 0.05)',
            borderTopColor: 'rgba(204, 255, 0, 0.3)',
            borderRadius: '50%',
            transform: `rotate(${-rotation * 10}deg)`,
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${20 + i * 15}%`,
            top: `${10 + (frame * (i + 1) * 0.05) % 80}%`,
            width: '2px',
            height: '40px',
            backgroundColor: '#ccff00',
            opacity: 0.05,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
