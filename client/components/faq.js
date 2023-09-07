import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How can I become a member of the Joint Airmen Mess?",
    answer: "To become a member, you need to express your interest by filling out a Membership Intent Form available through the mess administration. Eligibility criteria of the 305 Special Mobility Group and adhering to Nigerian Air Force regulations.",
  },
  {
    question: "What are the benefits of being a mess member?",
    answer: "As a member, you'll enjoy access to a vibrant community, networking opportunities, recreational facilities, and engaging events. The mess fosters camaraderie, provides a relaxing space, and offers shared experiences within the Nigerian Air Force family.",
  },
  {
    question: "What kind of events does the mess organize?",
    answer:
      "The mess hosts a variety of events including parties, celebrations for holidays and milestones, sports competitions, community service initiatives, and career development workshops. These events provide opportunities for bonding and personal growth.",
  },
  {
    question: "Can I bring guests to mess events?",
    answer:
      "Yes, most mess events allow members to bring guests. However, guest policies may vary depending on the event and mess regulations. Be sure to check with the mess administration for specific guidelines",
  },
  {
    question: "How can I stay updated about mess events and activities?",
    answer:
      "Stay informed by regularly checking the mess's website and notice boards. You can also subscribe to mess newsletters or follow official social media channels for announcements, event schedules, and important updates.",
  },
  {
    question: "Can I volunteer to organize or contribute to mess events?",
    answer:
      "Absolutely! The mess often welcomes volunteers who are interested in contributing to event planning and execution. Volunteering is a great way to get involved, showcase your skills, and enhance the mess experience for all members.",
  },
  {
    question: "Are there any dress codes for mess events?",
    answer:
      "Yes, many mess events may have specific dress codes, especially for formal or themed gatherings. Dress codes ensure a respectful and appropriate atmosphere. Details about dress codes are usually communicated prior to the event.",
  },
  {
    question: " How can I provide feedback or suggestions to improve the mess experience?",
    answer:
      "The mess administration values member input. You can provide feedback or suggestions directly to mess organizers, through feedback forms, or during meetings. Your insights help shape a better mess community for everyone.",
  },
  {
    question: "Are there any membership fees associated with joining the mess?",
    answer:
      "Membership fees are applicable to cover the operational costs of maintaining the mess facilities and organizing events. Specifics about membership fees can be obtained from the mess administration.",
  },
];

export default Faq;