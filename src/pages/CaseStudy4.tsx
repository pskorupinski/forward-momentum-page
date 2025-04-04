
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudy4: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Engineering Production System Capabilities II"
      subtitle="Scaling production capabilities through advanced engineering methods that boosted throughput by 65%."
      heroImage="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80"
      projectStats={{
        timeline: "9 months",
        teamSize: "12 people",
        role: "Technical Product Manager",
        techStack: "Java, Spring Boot, MongoDB, AWS"
      }}
      outcomes={{
        satisfaction: "4.8/5.0",
        impact: "65% increase in throughput",
        adoption: "95% team adoption rate"
      }}
    />
  );
};

export default CaseStudy4;
