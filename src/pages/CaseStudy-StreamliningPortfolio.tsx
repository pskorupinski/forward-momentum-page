
import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const CaseStudy2: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Streamlining Product Portfolio"
      subtitle="How we unlocked business strategy by reducing product portfolio efforts with maintained $2M/Y revenues."
      heroImage="https://1drv.ms/i/c/e5c67f4bca25096f/IQR5DAkDiZkmRo3J7rIpkzTSAdviz-LcerwZu2tSHGOBuaU?width=1024"
      projectStats={{
        timeline: "2 months",
        teamSize: "15 people",
        role: "Lead Business Analyst",
        techStack: "SQL, Excel, PowerPoint"
      }}
      outcomes={{
        satisfaction: "High C-level approval",
        impact: "Reduced efforts by 30% and increased predictability while maintaining revenue streams",
        adoption: "Fully rolled out throughout the organization"
      }}
      subsections={[
        {
          title: "Context / Background",
          content: ["An organization I worked for was at a stage of reshaping its activities in alignment with the new business strategy adopted after Series A. Sustaining a product portfolio with stable, incrementally growing revenues was joined by the goal to develop and commercialize two new product lines that investors bet on. The CEO wanted to see the organization adapt, substantially reducing efforts invested in the current portfolio while safeguarding its stable revenues as soon as possible. And for good."],
          image: "",
          description: ""
        },
        {
          title: "Objectives and Goals",
          content: ["I was requested by a member of the top management to lead the efforts. My primary task was to coordinate gathering and analyzing all the information that might be useful while taking informed decisions about shifting efforts or even product discontinuations. Later, I also became a lead in presenting results and options to the management and facilitating the executive conversation.", "We faced a unique challenge in the company’s history. No one before has evaluated the significance of all product lines and of the global distribution of their sales. Furthermore, there was very little quantitative input on the amount of efforts that sustaining these product lines was costing or going to cost the company. Also, members of the management and stakeholders had natural differences in terms of the preferred scope of the change, from readiness to discontinue products and entire markets, to preference to reduce efforts without any irreversible decisions."],
          image: "",
          description: ""
        },
        {
          title: "Approach and Implementation",
          content: [
            "This high-visibility effort comprised of three fast-paced chapters in close collaboration with 15 stakeholders: information gathering and analysis; decision-making; and communication.",
            "I started the first chapter from the end, by preparing an output template. I was aimed to allow us to get a glimpse of each product line’s status in one comprehensive view, including aspects such as global historical sales and dimensions of operational costs. Aligning on the end-result allowed me to distribute the work between people. While I tasked a colleague to focus on obtaining quantitative information where sources were clear, I went on to elicit qualitative insights from across the departments. They included global market dynamics, subjective perspectives on product quality, or regulatory-related challenges ahead. I leveraged that stage to explore motivations and opinions of stakeholders across the company and to deepen our common understanding of the goal. This prove essential to choose facts for the executive meetings that were not only supported in data but also already had initial stakeholder buy-in.",
            "The general concept for a change began to emerge, and we proceeded with decision-making. With a few clarification efforts ongoing, in a few days we proceeded from a draft list of 15 granular decisions I prepared to the final decision list, wrapped up in a strategic narrative I had a pleasure to co-create.",
            "As stakeholders from across departments went on to share an impact with their teams, I prepared a communication for commercial departments. Since a list of far-sighted decisions we took included many items that the market could easily misinterpret, I paid attention to every word and supported myself with metaphors such as “one step behind, three steps ahead”."
          ],
          image: "",
          description: ""
        },
        {
          title: "Outcome & Impact",
          content: ["We successfully reduced efforts and increased their predictability while maintaining revenue streams. In consequence, the organization maintained a stable source of revenue while unlocking well-balanced execution toward its objectives. As a delightful side effect, the whole organization started speaking one language about what the in-sales product portfolio was and what was the most important to achieve. That greatly helped in further planning efforts."],
          image: "",
          description: ""
        },
        {
          title: "Lessons Learned",
          content: ["The project boosted my skills in cross-functional stakeholder management. I took a lead in a complex effort that was impacting the future of every department and required every department’s contribution. Looking back, if I missed the edge on any of the habits like starting with why, listening actively and empathizing, coining accurate research questions, overcommunicating, or turning complexity into simple visuals, the decision-making as effective and as confident as it was would not have been possible."],
          image: "",
          description: ""
        }
      ]}
    />
  );
};

export default CaseStudy2;
