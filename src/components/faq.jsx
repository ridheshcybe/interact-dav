"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the purpose of this club?",
      answer:
        "Our club aims to bring together students with shared interests and create opportunities for learning, growth, and community engagement.",
    },
    {
      question: "How can I become a member?",
      answer:
        "Joining our club is simple! Fill out the membership form available on our website or attend one of our introductory meetings to learn more. We welcome all interested students, regardless of their background or experience.",
    },
    {
      question: "What activities do we organize?",
      answer:
        "We organize a variety of activities, including workshops, guest speaker sessions, community service projects, and social events. Our goal is to provide enriching experiences that cater to the diverse interests of our members.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "No, membership is completely free! We believe that everyone should have the opportunity to participate and benefit from our club's activities without any financial barriers.",
    },
    {
      question: "Who can I contact for more information?",
      answer:
        "For more information, feel free to reach out to our club president via the contact form on our website, or you can speak to any of our members during club meetings.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">All You Need to Know</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg px-4 py-2 shadow-sm"
          >
            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
