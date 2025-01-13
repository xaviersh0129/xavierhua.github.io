import React from 'react';
import { Github, Linkedin, Instagram, Code2, Briefcase, User, Cpu, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-800">Xavier Hua</a>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQGliEurG_zWVw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714377129873?e=1742428800&v=beta&t=M-IX3PqnTewr4qNxSFcVNcBpzdzIOD1kNn2bz0njEII" 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hua Shiao Hong (Xavier)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quantitative Researcher @ NUS Fintech Society | Business Analytics
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Contact Me
              </a>
              <a href="#projects" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently sharpening my expertise in Business Analytics and Quantitative Finance as a Bachelor of Science student at the National University of Singapore, I drive data-driven decisions and strategies within the fintech domain. My tenure as a Quantitative Researcher at NUS Fintech Society and a Teaching Assistant for Business Analytics has honed my ability to increase engagement and improve analytical skills among peers.
            <br /><br />
            The skills I've cultivated are recognized by multiple certifications, including Applied Data Science and AI Literacy, underpinning my commitment to excel in the evolving landscape of financial technology.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Cpu className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Python', 'R', 'SQL', 'Machine Learning',
              'Data Analysis', 'Statistical Modeling', 'Financial Modeling', 'Algorithmic Trading',
              'Backtesting', 'Data Visualization', 'Quantitative Analytics', 'Risk Management',
              'Optimization', 'Reinforcement Learning', 'Portfolio Management', 'Derivatives Pricing'
            ].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quantitative Researcher</h3>
              <p className="text-gray-600 mb-4">NUS Fintech Society | Aug 2024 – Present</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Developing and optimizing quantitative trading models using advanced statistical algorithms and machine learning techniques</li>
                <li>Collaborating with cross-functional teams to enhance model accuracy, improving performance by 30%</li>
                <li>Utilizing custom research infrastructure for simulation and validation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Analyst</h3>
              <p className="text-gray-600 mb-4">NUS Fintech Society | Jan 2024 – Aug 2024</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Analyzed and forecasted stock prices using ML models, achieving 25% increase in prediction reliability</li>
                <li>Engineered efficient data scraping pipeline, reducing retrieval time by 30%</li>
                <li>Developed interactive web application using Flask for data visualization</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning Trainee</h3>
              <p className="text-gray-600 mb-4">NUS Fintech Society | Sep 2023 – Jan 2024</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Conducted stock price predictions using ARIMA/ML models and NLP sentiment analysis</li>
                <li>Enhanced trading signals accuracy by 20% through iterative testing</li>
                <li>Documented and presented research findings to peers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=400" alt="RL Trading" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">RL Trading Strategies</h3>
                <p className="text-gray-600 mb-4">Developed reliable RL trading strategies utilizing DQN and PPO algorithms, achieving 15% cumulative return increase in simulated environments.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">DQN</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">PPO</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&h=400" alt="Trading System" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quantitative Trading System</h3>
                <p className="text-gray-600 mb-4">Implemented a trading system achieving Sharpe Ratio of 5.03 and Calmar Ratio of 12.16 through pair trading and mean reversion.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Algorithmic Trading</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&h=400" alt="Quantify" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quantify</h3>
                <p className="text-gray-600 mb-4">Machine learning project for stock price forecasting with ARIMA and GARCH, achieving 25% increase in forecast accuracy.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">ARIMA</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">GARCH</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Flask</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">National University of Singapore</h3>
            <p className="text-gray-600">Bachelor of Science in Business Analytics</p>
            <p className="text-gray-600">Minor in Quantitative Finance</p>
            <p className="text-gray-600">GPA: 4.71/5.0 Honours (Highest Distinction)</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
              I'm always interested in connecting with fellow professionals in the quantitative finance and technology space.
              Feel free to reach out if you'd like to collaborate or discuss opportunities!
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/huashiaohong/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/xaviersh0129" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://www.instagram.com/xavierhua00/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Xavier Hua. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;