import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book a flight?",
      answer: "You can easily book a flight by searching your destination, selecting dates, and completing the payment process through our secure platform."
    },
    {
      question: "Are payments secure?",
      answer: "Yes, all payments are protected with advanced encryption to ensure your personal and financial details remain safe."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, cancellations are allowed depending on airline policies. You can manage your booking from your account."
    },
    {
      question: "Do you offer refunds?",
      answer: "Refunds are processed as per airline rules. Once approved, the amount will be credited to your original payment method."
    },
    {
      question: "Is customer support available?",
      answer: "Yes, our support team is available 24/7 to help you with bookings, cancellations, or any queries."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-6 bg-gray-50" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-red-700 text-center mb-10">
         Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex  justify-between text-2xl items-center">
              <h3 className="font-semibold  text-lg">
                {item.question}
              </h3>
              <span className="text-3xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-md">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}