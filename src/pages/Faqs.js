import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        <span className="text-2xl font-bold text-green-600">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const Faqs = () => {
  const faqData = [
    {
      question: "What industries does BigbroMultibiz focus on?",
      answer: "We are a social enterprise primarily focusing on transforming three key industries: Agriculture, Real Estate, and Hospitality. Our mission is to drive innovation and create sustainable solutions in these critical sectors."
    },
    {
      question: "Where is BigbroMultibiz located?",
      answer: "We are proudly based in Ilorin, Kwara State, Nigeria. Our local roots allow us to understand and address the unique challenges and opportunities in our region."
    },
    {
      question: "What makes BigbroMultibiz different from other businesses?",
      answer: "Unlike traditional businesses, we are a social enterprise driven by a mission to create meaningful impact. We blend innovative business strategies with social responsibility, focusing on sustainable development and community empowerment."
    },
    {
      question: "How does BigbroMultibiz contribute to social development?",
      answer: "Through our innovative approaches in agriculture, real estate, and hospitality, we aim to create economic opportunities, improve living standards, and drive sustainable growth. We prioritize solutions that benefit both our clients and the wider community."
    },
    {
      question: "Do you offer consultation services?",
      answer: "Yes, we provide comprehensive consultation services across our core industries. Our team of experts offers tailored solutions to help businesses and individuals navigate and succeed in agriculture, real estate, and hospitality sectors."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about BigbroMultibiz, our mission, and how we're transforming industries through innovation
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-16 bg-green-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6 text-lg">
            We're always happy to help. Reach out to our team for personalized assistance.
          </p>
          <Link 
            to="/contacts"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faqs;