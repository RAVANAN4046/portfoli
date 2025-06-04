import React from 'react';
import ScrambledText from '../../../ReactBits/ScrambledText/ScrambledText';
import Particles from '../../../ReactBits/Particles/Particles'; 
import './About.css';

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-center text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

        <ScrambledText
          className="scrambled-text-demo text-lg max-w-3xl mx-auto mb-4"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          I'm a passionate MERN stack developer with experience building full-stack web
          applications using MongoDB, Express.js, React, and Node.js. I love turning complex
          problems into elegant solutions, and I enjoy creating clean, user-friendly interfaces
          and efficient backends.
        </ScrambledText>
      </div>
    </section>
  );
};

export default About;
