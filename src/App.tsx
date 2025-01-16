import React, { useEffect } from 'react';
import { Github, Linkedin, Instagram, Code2, Briefcase, User, Cpu, GraduationCap, ChevronDown, Mail } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text">Xavier Hua</a>
            <div className="flex gap-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-4 flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQGliEurG_zWVw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714377129873?e=1742428800&v=beta&t=M-IX3PqnTewr4qNxSFcVNcBpzdzIOD1kNn2bz0njEII" 
                alt="Profile" 
                className="w-40 h-40 rounded-full object-cover ring-4 ring-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                <Code2 className="w-5 h-5" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Hua Shiao Hong (Xavier)
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              Passionate Quantitative Researcher at NUS Fintech Society, leveraging data-driven insights 
              to revolutionize financial technology through innovative solutions.
            </p>
            <div className="flex gap-6">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-white border border-gray-200 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
            <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold gradient-text">About Me</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently sharpening my expertise in Business Analytics and Quantitative Finance as a Bachelor of Science student 
              at the National University of Singapore, I drive data-driven decisions and strategies within the fintech domain. 
              My tenure as a Quantitative Researcher at NUS Fintech Society and a Teaching Assistant for Business Analytics has 
              honed my ability to increase engagement and improve analytical skills among peers.
              <br /><br />
              The skills I've cultivated are recognized by multiple certifications, including Applied Data Science and AI Literacy, 
              underpinning my commitment to excel in the evolving landscape of financial technology.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Cpu className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold gradient-text">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Python', 'R', 'SQL', 'Machine Learning',
              'Data Analysis', 'Statistical Modeling', 'Financial Modeling', 'Algorithmic Trading',
              'Backtesting', 'Data Visualization', 'Quantitative Analytics', 'Risk Management',
              'Optimization', 'Reinforcement Learning', 'Portfolio Management', 'Derivatives Pricing'
            ].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-xl shadow-sm card-hover">
                <p className="font-medium text-gray-800 text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold gradient-text">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "Quantitative Researcher",
                company: "NUS Fintech Society",
                period: "Aug 2024 – Present",
                achievements: [
                  "Developing and optimizing quantitative trading models using advanced statistical algorithms and machine learning techniques",
                  "Collaborating with cross-functional teams to enhance model accuracy, improving performance by 30%",
                  "Utilizing custom research infrastructure for simulation and validation"
                ]
              },
              {
                title: "Technical Analyst",
                company: "NUS Fintech Society",
                period: "Jan 2024 – Aug 2024",
                achievements: [
                  "Analyzed and forecasted stock prices using ML models, achieving 25% increase in prediction reliability",
                  "Engineered efficient data scraping pipeline, reducing retrieval time by 30%",
                  "Developed interactive web application using Flask for data visualization"
                ]
              },
              {
                title: "Machine Learning Trainee",
                company: "NUS Fintech Society",
                period: "Sep 2023 – Jan 2024",
                achievements: [
                  "Conducted stock price predictions using ARIMA/ML models and NLP sentiment analysis",
                  "Enhanced trading signals accuracy by 20% through iterative testing",
                  "Documented and presented research findings to peers"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-blue-600 mb-4">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold gradient-text">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "RL Trading Strategies",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=400",
                description: "Developed reliable RL trading strategies utilizing DQN and PPO algorithms, achieving 15% cumulative return increase in simulated environments.",
                tags: ["DQN", "PPO", "Python"]
              },
              {
                title: "Quantitative Trading System",
                image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&h=400",
                description: "Implemented a trading system achieving Sharpe Ratio of 5.03 and Calmar Ratio of 12.16 through pair trading and mean reversion.",
                tags: ["Algorithmic Trading", "Python"]
              },
              {
                title: "Quantify",
                image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&h=400",
                description: "Machine learning project for stock price forecasting with ARIMA and GARCH, achieving 25% increase in forecast accuracy.",
                tags: ["ARIMA", "GARCH", "Flask"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold gradient-text">Education</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm card-hover">
            <div className="flex items-start gap-6">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&h=200" 
                alt="NUS" 
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">National University of Singapore</h3>
                <p className="text-lg text-blue-600 mb-2">Bachelor of Science in Business Analytics</p>
                <p className="text-gray-600">Minor in Quantitative Finance</p>
                <p className="text-gray-600 font-semibold mt-2">GPA: 4.71/5.0 Honours (Highest Distinction)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Mail className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl w-full mb-8">
              <p className="text-lg text-gray-600 text-center">
                I'm always interested in connecting with fellow professionals in the quantitative finance and technology space.
                Feel free to reach out if you'd like to collaborate or discuss opportunities!
              </p>
            </div>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/huashiaohong/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a href="https://github.com/xaviersh0129" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github className="w-6 h-6" />
                GitHub
              </a>
              <a href="https://www.instagram.com/xavierhua00/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Xavier Hua. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;