'use client'

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PricingPage = () => {
  const [isPaidEvent, setIsPaidEvent] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('passOn');
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);

  const calculateFees = () => {
    if (!isPaidEvent) {
      return {
        totalReceived: 0,
        perTicketAttendeesPay: 0,
        totalServiceFee: 0
      };
    }

    const totalRevenue = ticketPrice * ticketCount;
    const serviceFeeRate = 0.029; // 2.9% service fee
    const serviceFee = totalRevenue * serviceFeeRate;
    const totalReceived = totalRevenue - serviceFee;
    const perTicketAttendeesPay = paymentMethod === 'passOn' ? ticketPrice + (ticketPrice * serviceFeeRate) : ticketPrice;

    return {
      totalReceived: totalReceived,
      perTicketAttendeesPay: perTicketAttendeesPay,
      totalServiceFee: serviceFee
    };
  };

  const fees = calculateFees();

  const faqs = [
    {
      question: "Is Barren really free?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Does Barren charge for free events?",
      answer: "No, Barren does not charge any fees for free events. You can create and manage free events without any cost."
    },
    {
      question: "How do I receive payment from my attendees?",
      answer: "Payments are processed through our secure payment system and transferred to your account within 2-3 business days after the event."
    },
    {
      question: "When do I need to give my credit card details?",
      answer: "You only need to provide credit card details when you want to receive payments from paid events. Free events don't require any payment information."
    },
    {
      question: "Is there any free trial option?",
      answer: "Yes, you can start using Barren for free and only pay fees when you sell tickets to paid events."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Title and Description */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Calculate Your Barren Fees
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Organise venue events and host online events with unlimited possibilities using our built-in virtual event platform. Build a unique event experience for you and your attendees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Inputs */}
          <div className="space-y-8">
            {/* Event Type */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Is your event paid or free?
              </h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsPaidEvent(true)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    isPaidEvent
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Paid
                </button>
                <button
                  onClick={() => setIsPaidEvent(false)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    !isPaidEvent
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Free
                </button>
              </div>
            </div>

            {/* Payment Method */}
            {isPaidEvent && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How do you want to pay the service fee?
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setPaymentMethod('passOn')}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      paymentMethod === 'passOn'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Pass On
                  </button>
                  <button
                    onClick={() => setPaymentMethod('absorb')}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      paymentMethod === 'absorb'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Absorb
                  </button>
                </div>
              </div>
            )}

            {/* Ticket Price */}
            {isPaidEvent && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What is the ticket price?
                </h3>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">USD</span>
                  <input
                    type="number"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(parseFloat(e.target.value) || 0)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>
              </div>
            )}

            {/* Ticket Count */}
            {isPaidEvent && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How many tickets?
                </h3>
                <input
                  type="number"
                  value={ticketCount}
                  onChange={(e) => setTicketCount(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
            )}
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Total Amount You Receive</h4>
              <div className="text-3xl font-bold text-gray-900">
                USD {fees.totalReceived.toFixed(2)}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Per Ticket Attendees Pay</h4>
              <div className="text-3xl font-bold text-gray-900">
                USD {fees.perTicketAttendeesPay.toFixed(2)}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Total Service Fee (Exclusive Of Stripe Processing Fee)</h4>
              <div className="text-3xl font-bold text-gray-900">
                USD {fees.totalServiceFee.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
