
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudy4: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Shaping Global Release to 1K+ Customers"
      subtitle="How we boosted adoption and success rate of the the critical quality release."
      heroImage="https://1drv.ms/i/c/e5c67f4bca25096f/IQSPekS7XDNgQoMMcU-MiI3yAdQP1ds1vmOTLtp1hMFGqMQ?width=1024"
      projectStats={{
        timeline: "6 months (part-time)",
        teamSize: "~6 people involved",
        role: "Product Manager",
        techStack: "PowerPoint, Excel"
      }}
      outcomes={{
        satisfaction: "Increased customer satisfaction",
        impact: "No more support tickets related to the major software issue",
        adoption: "40% team adoption rate (very high given the nature of product use)"
      }}
      subsections={[
        {
          title: "Context / Background",
          content: ["Products of an organization I worked in were facing an important product quality issue. Not only was it reducing the ease-of-use but also directly impacting the value of products’ differentiating feature. It was also posing a risk of setting major regulatory constraints. Hence, the CTO initiated regular efforts to explore root causes behind the instability issues. For the rising customer pressure, it was crucial for the executive team that we conclude the initiative as soon as possible."],
          image: "",
          description: ""
        },
        {
          title: "Objectives and Goals",
          content: ["Observing the project’s evolution during updates with the technical team, I decided to offer my support to fill in the gap of the market deployment considerations, both in terms of the final design details, release staging and communications. The team did a fantastic job spotting root causes, proving improvements, and developing recommendations for use. However, a clear benchmark on what was good enough to consider the problem solved for the users was missing. All key stakeholders were putting a strong emphasis on releasing the update as soon as possible and relieving resources from the project, hence, my communications required lots of precision about major risks ahead and only minor efforts and delays to substantially reduce them."],
          image: "",
          description: ""
        },
        {
          title: "Approach and Implementation",
          content: [
            "I started by coining a release plan. I wanted to gain confidence before we communicate the software with all customers and consider the project finished by introducing a beta phase. I scheduled a meeting with 5 important stakeholders including COO. I talked to most of them before and had a buy-in, e.g., from the support manager. After a dynamic conversation, we found a resolution that was satisfactory to everyone. I also proposed to raise the bar in terms of what we considered success. I knew from sales and customer conversations that, able to find alternatives, our users were not always reporting issues to us yet they were keen of sharing the limitations publicly. Hence, as success criteria, I wanted 50% of already existing customers to start using the new software version immediately and start following the use recommendations we were to publish.",
            "I joined the engineer leading the testing efforts to understand the results and observations from the perspective of customer and business importance. We put together a list of essential product configurations that were missing statistical significance in the testing results, proposing further testing. The CTO backed us up and scheduled an action plan fully aligned with my concept.",
            "While the engineering team was confirming final results, we initiated a closely controlled beta phase. Meanwhile, I engaged with stakeholders from sales, marketing, and software to coin a launch concept that would increase customer interest, including those not necessarily aware of the quality issue. For that, we ensured there was a balanced mix of exciting features along the quality updates. From there, I let a junior product manager coordinate the details of the communication and channels with the marketing team. Within a scheduled time, we put everything together, demoed a final software version internally, released, and sent over communication."
          ],
          image: "",
          description: ""
        },
        {
          title: "Outcome & Impact",
          content: ["Thanks to the additional setup-focused testing round and beta phase customer feedback, edge cases were found and mitigated. There were no support requests since the launch except previously identified edge cases, that support technicians knew how to handle. The software download rate was unexpectedly high: around 40% of people receiving communication went on to update the product version. A few customer expressed their delight with the improvement."],
          image: "",
          description: ""
        },
        {
          title: "Lessons Learned",
          content: ["Personally, the project was a fantastic case study on how product management state-of-the-art naturally fill in the gap between the technology and the market. It also allow me to deepen my knowledge about two aspects. First, how much clarity and structure even a bit of customer quantitative and qualitative insight can bring. Second, that good ideas win as long as I understand priorities of stakeholders, and leverage them in communications and the flow of execution."],
          image: "",
          description: ""
        }
      ]}
    />
  );
};

export default CaseStudy4;
