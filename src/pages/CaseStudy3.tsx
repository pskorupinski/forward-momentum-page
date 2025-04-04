
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudy3: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Engineering Production System Capabilities I"
      subtitle="Revolutionizing production systems through innovative engineering approaches that reduced downtime by 42%."
      heroImage="https://images.unsplash.com/photo-1581094794329-c8112c4418af?q=80"
      projectStats={{
        timeline: "10 months",
        teamSize: "15 people",
        role: "Lead Engineer",
        techStack: "Python, Docker, Kubernetes, TensorFlow"
      }}
      outcomes={{
        satisfaction: "4.6/5.0",
        impact: "42% reduction in downtime",
        adoption: "85% system utilization"
      }}
    />
  );
};

export default CaseStudy3;
