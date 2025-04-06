
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudy3: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Re-Designing Large Cloud Service Specs"
      subtitle="How we got the critical cloud service design ready for new business use cases for 1M+ connected devices in 2 months."
      heroImage="https://1drv.ms/i/c/e5c67f4bca25096f/IQQmFu9PJLJuRY6N9SsSzoQUAaXJwLbNRPVXj_UGXC10XSA?width=1024"
      heroVideo=""
      projectStats={{
        timeline: "2 months",
        teamSize: "13 people",
        role: "Lead Business Analyst",
        techStack: "Confluence, Miro, PlantUML"
      }}
      outcomes={{
        satisfaction: "High stakeholder satisfaction",
        impact: "Unlocked implementation of the new capability across the system at schedule",
        adoption: "Deployed as an important enabler for B2B markets in the EU"
      }}
      subsections={[
        {
          title: "Context / Background",
          content: ["I joined a team of around 13 people at a client company taking care of 3 cloud services serving over a million connected vehicles. The team was foregoing a switch of all the developers, while the rest of the team (architecture, verification, support) except the area lead on the client side was relatively new. In short, DevOps team was expected to go into the next Product Increment starting in 2 months in very little product knowledge."],
          image: "",
          description: ""
        },
        {
          title: "Objectives and Goals",
          content: ["I was tasked to lead one portfolio epic. It included a significant expansion of a feature set of one of the critical services. My objective was to define detailed new requirements and API specifications for that service and document them following the organization’s process. I had 8 weeks to the PI Planning to onboard myself and specify the features down to a detail.",
            "It was very important for the Agile Release Train stakeholders that the team successfully foregoes the transition by effectively implementing this high-priority request. I knew the Product Owner was very busy with operational and onboarding aspects, so my proactiveness at acquiring relevant knowledge and stakeholder engagement was critical. I was introduced to system architects who conceptualized the high-level solution, and was ready to take on the challenge."
          ],
          image: "",
          description: ""
        },
        {
          title: "Approach and Implementation",
          content: [
            "I started from analysing all solution architecture inputs and comparing it with the current feature set of the cloud service to be expanded. I invited the business lead to refine an interaction concept with other services to increase its similarity with other use cases. Then, I went through a series of iterations where I drafted API specs, reviewed feature split and defined acceptance criteria (using Miro, Confluence, PlantUML) and reviewed the pending questions with system architects and stakeholders from other services.",
            "Two weeks before the PI Planning, we began onboarding the development and verification teams into the domain. I got backing from the development team about the problematic aspects of the system architecture we surfaced: multiple sources of truth and database re-design. With support of the area lead we ensured support and agreement from stakeholders in resolving these issues. By the time the PI Planning was over, the team had a clear plan for the next PI, aligned with the plans of other teams."
          ],
          image: "",
          description: ""
        },
        {
          title: "Outcome & Impact",
          content: ["Thanks to an excellent performance of the team and regular alignments with stakeholders I organized, the team indeed managed to deliver on specifications on time and was ready to undergo end-to-end solution tests. This unlocked the organization to proceed with its launch timeline for the portfolio epic."],
          image: "",
          description: ""
        },
        {
          title: "Lessons Learned",
          content: ["We spotted later that end-to-end verification was unnecessarily lagging behind, some aspects could have been sorted out before. Even though it was far beyond my formal responsibility, this fact taught me that, while conceptualizing a successful execution, one can never get too creative listing potential stakeholders worth introducing early into the project."],
          image: "",
          description: ""
        }
      ]}
    />
  );
};

export default CaseStudy3;
