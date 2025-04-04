
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudy5: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Healthcare Patient Experience Prototype"
      subtitle="An innovative product prototype that redefined user experiences in healthcare, resulting in 40% improved patient satisfaction."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80"
      projectStats={{
        timeline: "7 months",
        teamSize: "10 people",
        role: "Product Manager",
        techStack: "React Native, Node.js, Firebase"
      }}
      outcomes={{
        satisfaction: "4.9/5.0",
        impact: "40% increase in patient satisfaction",
        adoption: "88% user retention"
      }}
    />
  );
};

export default CaseStudy5;
