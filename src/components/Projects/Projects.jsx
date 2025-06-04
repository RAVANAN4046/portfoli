import React from 'react';
import projects from '../../data/projects';
import Particles from '../../../ReactBits/Particles/Particles';
import CardSwap, { Card } from '../../../ReactBits/CardSwap/CardSwap';
import './Projects.css';

const Projects = () => (
  <section
    id="projects"
    className="relative bg-black py-20 px-6 md:px-20 text-center overflow-hidden"
  >
    {/* Particles Background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        particleColors={['#ffffff', '#888888']}
        particleCount={150}
        particleSpread={10}
        speed={0.05}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>

    {/* Main Content */}
    <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Projects</h2>

      {/* CardSwap Carousel with Projects */}
      <div className="mx-auto max-w-3xl" style={{ height: '600px' }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-left h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:text-blue-200 font-medium transition duration-300 mt-auto"
                >
                  View Project →
                </a>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  </section>
);

export default Projects;
