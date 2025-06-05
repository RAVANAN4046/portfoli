import React from 'react';
import projects from '../../data/projects';
import Particles from '../../../ReactBits/Particles/Particles';
import CardSwap, { Card } from '../../../ReactBits/CardSwap/CardSwap';
import './Projects.css';

const Projects = () => (
  <section
    id="projects"
    className="relative bg-black min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-20 text-center overflow-hidden"
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
    <div className="relative z-10 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">Projects</h2>

      {/* CardSwap Carousel with Projects */}
      <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl" style={{ height: '500px' }}>
        <CardSwap
          cardDistance={40}
          verticalDistance={50}
          delay={5000}
          pauseOnHover={true}
        >
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg text-left h-full flex flex-col justify-between">
                {project.image && (
                  <div className="mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 sm:h-48 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Text Section */}
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:text-blue-200 font-medium transition duration-300 text-sm sm:text-base"
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
