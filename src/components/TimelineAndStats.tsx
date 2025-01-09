import React from 'react';
import { useInView } from 'react-intersection-observer';
import './TimelineAndStats.css';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si'; // Replace with valid exports

// Timeline Data
const milestones = [
  {
    year: '2021 - Present',
    title: 'Full-Stack Developer at Amdocs',
    description: [
      'Designed React.js user interfaces, increasing user satisfaction by 85%',
      'Developed scalable telecom software solutions and APIs using Node.js and Java.',
      'Improved system processing time by 60% through optimized architecture.',
    ],
  },
  {
    year: '2020 - 2021',
    title: 'Backend Developer at CG Solutions',
    description: [
      'Engineered APIs for seamless platform integrations.',
      'Enhanced system efficiency, improving API response times by 70%.',
      'Onboarded 12 new game providers, expanding market reach.',
    ],
  },
  {
    year: '2019 - 2020',
    title: 'QA Engineer at Qlik',
    description: [
      'Tested and automated data replication solutions.',
      'Reduced QA testing time by 80% through automation.',
      'Ensured reliable data replication across 40 platforms.',
    ],
  },
];

// Stats Data
const stats = [
  { icon: <FaReact />, label: 'Technologies Mastered', value: 8 },
  { icon: <SiDocker />, label: 'Years of Experience', value: 4 },
  { icon: <FaNodeJs />, label: 'Projects Delivered', value: 15 },
  { icon: <FaDatabase />, label: 'Databases Managed', value: 5 },
];

// Single Responsibility Components
const TimelineItem: React.FC<{
  year: string;
  title: string;
  description: string[];
}> = ({ year, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`timeline-item ${inView ? 'fade-in' : ''}`}>
      <h3>{year}</h3>
      <h4>{title}</h4>
      <ul>
        {description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

const StatItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: number;
}> = ({ icon, label, value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`stat-item ${inView ? 'fade-in' : ''}`}>
      <div className="stat-icon">{icon}</div>
      <h3>{value}+</h3>
      <p>{label}</p>
    </div>
  );
};

const TimelineAndStats: React.FC = () => {
  return (
    <section className="timeline-stats-section">
      <h2 className="section-title">My Journey & Achievements</h2>

      {/* Timeline Section */}
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={index}
            year={milestone.year}
            title={milestone.title}
            description={milestone.description}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="stats">
        {stats.map((stat, index) => (
          <StatItem key={index} icon={stat.icon} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default TimelineAndStats;
