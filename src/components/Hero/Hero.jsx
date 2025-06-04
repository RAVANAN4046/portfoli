import React from 'react';

import GlareHover from '../../../ReactBits/GlareHover/GlareHover';
import Particles from '../../../ReactBits/Particles/Particles'; 
import ProfileCard from '../../../ReactBits/ProfileCard/ProfileCard'

const Hero = () => (
  <section className="relative w-full h-screen overflow-hidden bg-black">
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

    
    <div className="absolute inset-0 z-10 pointer-events-none">
      
    </div>

    {/* Hero Content */}
    <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 gap-12 text-white text-center md:text-left">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Sachin Babu K
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Full-Stack MERN Developer
        </p>
        <div className="flex justify-center mt-6">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <a
              href="#projects"
              className="px-6 py-3 text-white font-bold text-3xl bg-transparent rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              View my Works
            </a>
          </GlareHover>
        </div>
      </div>

      {/* Image Section */}
        <ProfileCard
        name="Sachin Babu K"
        title="MERN Stack Developer"
        handle="sachinmern"
        status="Online"
        contactText="Contact Me"
        avatarUrl="https://wallpapers.com/images/high/monkey-d-luffy-smile-yghmb75ti4z7p68o.webp"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
        />
    </div>
  </section>
);

export default Hero;
