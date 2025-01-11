import React, { useState } from 'react';
import { MenuIcon, XIcon, GithubIcon, MailIcon, LinkedinIcon, ExternalLinkIcon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python',
    'SQL', 'AWS', 'Git', 'Machine Learning'
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js',
      techStack: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Project 2',
      description: 'Machine learning model for predictive analytics',
      techStack: ['Python', 'TensorFlow', 'scikit-learn'],
      github: '#',
      live: '#'
    },
    {
      title: 'Project 3',
      description: 'Real-time data visualization dashboard',
      techStack: ['React', 'D3.js', 'Firebase'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Pranjal</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I'm Pranjal
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Full Stack Developer & AI Enthusiast
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <GithubIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <LinkedinIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <MailIcon />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              About Me
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600">
                I'm a passionate developer with experience in building modern web applications
                and working with AI technologies. I love solving complex problems and creating
                intuitive user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-gray-900 flex items-center"
                      >
                        <GithubIcon className="w-5 h-5 mr-1" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="text-gray-600 hover:text-gray-900 flex items-center"
                      >
                        <ExternalLinkIcon className="w-5 h-5 mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Contact Me
            </h2>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Pranjal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;