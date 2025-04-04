
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudy2: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Strategic Business Analysis"
      subtitle="A comprehensive business strategy analysis that led to 35% increase in operational efficiency."
      heroImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80"
      projectStats={{
        timeline: "6 months",
        teamSize: "8 people",
        role: "Lead Business Analyst",
        techStack: "Tableau, Power BI, R, Python"
      }}
      outcomes={{
        satisfaction: "4.7/5.0",
        impact: "35% operational efficiency increase",
        adoption: "90% stakeholder buy-in"
      }}
    />
  );
};

export default CaseStudy2;
