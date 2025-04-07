
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyTemplate from './CaseStudyTemplate';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CaseStudies: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Building Household Helper AI Agent, pt. 1"
      subtitle="Diving into the problem space of household management inconveniences to explore agentic AI use cases, interaction design, and development tech stack."
      heroVideo="https://www.youtube.com/embed/ipx2xbR7UrA"
      projectStats={{
        timeline: "5 days",
        teamSize: "Solo project",
        role: "Designer + Engineer",
        techStack: "Python, LangGraph, LangChain, AsyncIO, SQLite, FigJam"
      }}
      outcomes={{
        satisfaction: "N/A (fresh prototype)",
        impact: "N/A (fresh prototype)",
        adoption: "N/A (fresh prototype)"
      }}
      subsections={[
        {
          title: "Challenge",
          content: [
            "As new technologies emerge, the key aspect I am aiming to understand first is 'what is now possible that previously was not?'. In this spirit, I was looking for a challenge that fits well for the first protype with emerging AI agent frameworks (if you are new to this topic, see more in the 'Design Analysis' section).", 
            "While interacting with LLMs via a chat window to answer our questions is already a state of the art, I began to think how such agents might be useful in daily challenges beyond the concept of a window/app we open when we need it. <b>Instead, my curiosity went in the direction of a seamless intelligence very well aware of the entire process, hence effectively reducing a person's cognitive load over time.</b>",
            "Before I jumped in to discover industrial use cases, I wanted to explore a problem space I have a direct access to: my household. Figure 1 shows my analysis of our weekly 'laundry management journey'. Already with a high-level look at it, you may notice an opportunity space. Namely, we often become aware of a need to do the laundry too late. In other words: we often miss cues that it's time to make our laundry during the week, and we only realise it when it becomes inconvenient. Furthermore, there are errors in the process across all the steps, which tend to cause further delays and inconveniences."
          ],
          image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQQ5jX6plFauT4N_uEViYaqyAbx-PyQRdVKCvM8YbV1xWRk?width=1024",
          description: "Figure 1: Current-State Journey Map of Laundry Management"
        },
        {
          content: [
            "Having found an empathy for this aspect of our life, I defined the problem space by naming the jobs we got in our household (functional and emotional), pains we are encountering on the way, and gains we are seeking. Have a look at Figure 2, do some of them resonate? Remember, we are still in the problem space - many of those could sure be solved by exploring a different equipment. As you will see in the next sections, I focused on the aspects that require more of a behavioral change."
          ],
          image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQS_YnMR1dc7Rb39h8BiYPBQAZdFW2q9i3VfMG08D9Yn0Vw?width=1024",
          description: "Figure 2: Hypothetical Customer Profile (click to see full)"
        },
        {
          title: "Solution Design Ideation",
          content: [
            "Having converged on the problem space, I let my mind free on how might such a process-aware intelligent entity disrupt our weekly process. As you see on Figure 3, for each stage of our human-centered map, I drafted a hypothetical AI agent-centered map. On a high-level, our 'not thinking-noticing-confirming' pattern might be boosted with an agentic 'monitoring' pattern. Other stages could be boosted with agentic 'guidance' patterns.",
            "Zooming in on these future-state stages and steps, I brainstormed potential processes that the AI agent would need to be capable of performing. Some of them involving us (human agents), some of them occuring with no human intervention. This is the essence of this high-level solution: the design constraint that the AI agent will not do the manual part (reviewing the amount of dirty clothes or hanging laundry). <b>Instead, the agent is conceptualized as a leader of the common goal with a group of humans. It knows it can leverage their senses and manual capacities, and use its own high-level communication/persuasion skills, in order to achieve it.</b>"
          ],
          image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQTCV0E9fD4QRZMWvPWJTkM_AcysQzDYmK_TKGItPAYlHbo?width=1024",
          description: "Figure 3: Current-State + Ideated Future-State Journey Map of Laundry Management (click to see full)"
        },
        {
          title: "",
          content: [
            "As the final step, I converged this ideated future-state journey map into a hypothetical value proposition map. At that stage, I was aiming to ideate a final solution where all of the process challenges are solved. I was thinking about feasibility or viability only in terms of whether, with my understanding of LLMs and agentic framework capabilities at the time, such a product was at all implementable."
          ],
          image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQS7OZr_rbf-Qojq-KYJAvsRAdj6muuO7uMbzvNSa2vI4Lg?width=1024",
          description: "Figure 4: Hypothetical Customer Profile + Ideated Value Map (click to see full)"
        },
        {
          title: "Narrowed-Down Challenge: How-Might-We...",
          content: [
            "The outcomes of brainstorming the agentic solutions for the household needs gave me a good foundation to zoom-in on lower-level pain points. Of course, there is a wealth of interesting challenges both in the laundry monitoring and guidance cycle. They are quite interrelated and it did not seem trivial to extract one piece.",
            "However, an insight I found was that all of these challenges - and arguably any challenge that involves an AI agent interacting with a group of people - has one common requirement. It is: at all times, the AI agent must decide which person is the most appropriate one to contact. I coined a 'how might we' question:",
            "<b>How might we fairly and effectively engage a group of household members in any given activity leveraging LLM-based AI agent frameworks?</b>",
            "On Figure 5, I emphasized that focus in the original customer and value map. I put the nuances of the weekly laundry management aside for a while, and focused on the world of AI Agents'-Humans' interaction patterns, <b>starting from the simplest of activities: a small talk</b>."
          ],
          image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQQ48MHmpBpXS6MfdGVfWnpUAZ3SZj7C9_aJjn--p6w6-0A?width=1024",
          description: "Figure 5: Part of the Value Map I Chose to Focus On (click to see full)"
        },
        {
          title: "Design Analysis",
          content: [
            "Focusing on the Small Talk Agent, but also inspired by the larger vision of the Household Helper AI Agent, I extracted the following requirements:<li>Must be able to interact with humans through channels <b>convenient</b> for them</li><li>Must communicate in a <b>kind</b> and <b>engaging</b> way</li><li>Must be <b>fair</b> in choosing who to interact with (and be perceived as fair!)</li><li>Must be <b>considerate</b> about the humans' availability (communicate only when it's fruitful for the set objective)</li><li>Must be able to <b>continue</b> regularly (schedule its own continuation)</li>",
            "On a high-level, the following functions were needed:"
          ],
          image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQTxNcr3fAwGSbkxwgI_hmuRAV-g_7lybkApm6RXwGkjwdc?width=1024",
          description: "Figure 6: Small Talk AI Agent Functions"
        },
        {
          content: [
            "Below my considerations for each of the blocks presented on Figure 6.",
            "<b>Small Talk AI Agent.</b> When shaping the core of the conversational AI agent itself, two decisions must be taken: agent framework to use and large language model to use. At the moment of deciding, I was knowledgable with Smolagents and LangGraph frameworks. Smolagents itself seemed too flexible for a rather static requirements of this prototype, it would very likely require more model calls (since it's a coding agent) that I wanted to avoid. I chose LangGraph. However, instead of defining the entire workflow step-by-step, I just created an 'Assistant' and a 'Tools' node, and followed LangGraph's implementation of a so called ReAct Agent - the model itself decides on the appropriate tool to call.",
            "For the LLM, I sticked to the GPT-4o model. Certainly, further refinements would include testing how the changes of models impact the behaviour of the agent within set requirements.",

            "<b>Memory.</b> The standard way of enriching the AI Agent with an up-to-date knowledge is by implementing RAG technique. Models generation would be enriched with relevant documents usually stored in a vector database. For my prototype use case I skipped this approach and implemented instead a simple SQL schema that stores the very little information that is necessary: basic metadata about household humans and history of interaction with them.",
            "Practically speaking, in the current implementation, the agent has 2 memory-related tools at its disposal. It can decide to 'recall' all the information in one shot. Also, at any time, it can decide to 'memorize' the basic information on the interaction it just had for the future retrieval.",
            "For the production solution, it would be worth to analyze the RAG approaches for retrieval. The alternative would be to create a collaborator for our Agent - an SQL Master Agent, that writes the most appropriate SQL queries to retrieve information, based on the need. Finally, since it might be the Agent scheduling its own continuation at a later time, one might imagine a swift solution, where the agent shapes the 'user prompt' for its next execution, including the information it considers essential for fair decision-making.",

            "<b>Real-time Human Availability Check.</b> For this particular need, I let the vision of a 'household helper' guide me. Think about it, when would you like the agent to write you when it wants you to do something at home? Of course, when you are there, at home. And also, when you are actually available to receive and read the agent's message. I found the best approximation for that for the prototype purpose: the API of my home router. :) The connection of a person's phone to the router is a good approximation for them being at home and being able to receive/respond to the message from the agent. Hence, the Small Talk Agent has access to the tool providing it just that information.",
            "Naturally, this solution has big shortcomings as it's not really scalable or portable. It might actually be a fantastic use case for CAMARA Project that mobile telecommunications companies are working on to unify access to network devices' information. Giving the AI Agent access to the API where it has access rights to retrieve chosen mobile phones' connection and location would help satisfy set requirements.",

            "<b>Human Interaction Interface.</b> For the prototype purposes, I chose to implement the communication channel via email, using Google APIs for that. Importantly, I considered a way to unlock a two way communication. In the end, we want the email to work in a similar way as our chatbot interface: model writes and awaits our response. Hence, the tool I created allows the AI Agent to specify if it wants to await the response and, if so, then for how long. This behaviour can be observed well in the demo video.",
            "I naturally considered other technologies for this interaction, with WhatsApp being likely the most intuitive one. This would be a subject of further investigation.",
            "<b>Small Talk AI Agent Prompts.</b> The high-level question I encountered during design was how to spread the detail of what I demand of the agent between the 'system prompt' and the 'user prompt'. In the end, so far the user prompt is hardcoded - as it's the agent that decides to initiate the conversation with a human. The division that I found useful was that everything that should be configurable between current use cases forms a part of a 'user prompt'. That is the request itself to have a chat with a human, given the following constraints (e.g., do not do it if no one is available) or the approach to take when communicating with a human (e.g., the maximum length of a conversation).",
            "What belongs in the system prompt is the definition of the general role of the agent, the tools it has access to, how and why to use them, and elaboration on the expectations of kindness, fairness, considerateness, and continuation. I also included the current date and time.",
            "<b>Next Contact Schedule.</b> For now, this tool is implemented as a dummy - it does nothing. The implementation would be production-dependent. E.g., if I was to run the Agent in AWS Lambda, I would have this tool schedule the next execution of Lambda."
          ],
          image: "https://1drv.ms/i/c/e5c67f4bca25096f/IQTLJAqTqlq-ToTcie1-rMo9Ac3B15DVh0j0XrBIU4L9W9k?width=1024",
          description: "Figure 7: AI Agent and tools mapped to the libraries used to make them work."
        },
        {
          title: "Results",
          content: [
            "I invite you to judge for yourself by watching the demo video at the top of the page!",
            "To summarize from my side, within a few hours of refinement of prompts and interfaces, I managed to get the implementation to act reasonably pretty much every time and pretty much in every aspect. The agent never ever missed to check the contact history or human availability before beginning the interaction with a chosen human. In fact, I ran that demo's scenario 4 times, encountering no issues that would depend on the LLM's reasoning itself. Checking logs, I also never encountered any unnecessary tool calls. That opens a promising path to use even such frameworks as LangGraph - considered to be optimized for control - to create a simple 'assistant-tools loop' workflow and let LLM do the magic leveraging a gradually extended set of tools.",
            "It is true, however, that I tested the agent only for quite a limited set of use cases. The dimensions of flexibility I experimented with were, one, setting contraints to the agent (e.g., write only if you did not write to anyone yet today); two, communication patterns with a human (e.g., how many message exchanges are allowed). I also tested the agent with different historical considerations to judge its logic of fairness - further experiments here might bring interesting results (including a conclusion that a more explicit definition of fairness is needed). As you can see in the demo, the agent is also quite good at explaining why it found it fair to write to that particular human - it would be interesting to see how the agent explains why its past decisions were fair!"
          ]
            ,
          image: "",
          description: ""
        },
        {
          title: "Lessons Learned",
          content: ["My main lesson learned is that LLM such a GPT-4o is effective at choosing tools, given a well-shaped prompt - creating a path toward replacing complex human-defined workflows, especially in a context where it is hard or impossible to keep up with all the scenarios. However, I have to emphasize here: 'a well-shaped prompt'. One might claim I would spend less time creating a rigid workflow satisfying the requirements compared to the time I spend refining the 'system prompt' to have the agent behave the way that in my eyes was fulfiling the solution's requirements.",
            "The second interesting lesson learned was that GPT-4o has a bias toward finalizing its workflow with user response when it is asked to communicate with a human. In other words, in my early tests, agent was sometimes skipping the email sending and sending that content as a response to the user prompt. Interestingly, I did not see that behavior anymore once I emphasized in the Human Interaction Interface tool description that 'this is the only inferface you have to interact with humans'. Similar LLM's bias might have occured with another issue I encountered - sometimes, it was responding 'confidently' to the user prompt saying it memorized the interaction, while the tool for that was never called. Hypothetically, emphasizing that the tool is 'the only way to memorize' might help solve the issue.",
            "The final lesson learned that I want to share is an interesting behavior of GPT-4o when it comes to current date and time. It sort of knew it but sometimes was making mistakes. It started working more reliably once I included dynamically generated current date and time in the system prompt."
          ],
          image: "",
          description: ""
        }
      ]}
    />
  );
};

export default CaseStudies;
