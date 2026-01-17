'use client'

import React, { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  
  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How do I use these conversation templates?',
      answer: 'Select a conflict type that matches your situation, then choose from the generated templates. Each template includes an opening line, core message, empathy statement, and solution guidance. Copy the template and adapt it to your personal style and relationship dynamic.'
    },
    {
      id: 'faq-2',
      question: 'Are these templates personalized to my specific situation?',
      answer: 'The templates are designed to be general frameworks that address common relationship conflicts. For best results, customize the language to match your unique circumstances, feelings, and the personality of your partner.'
    },
    {
      id: 'faq-3',
      question: 'How do I know which conflict type to choose?',
      answer: 'Browse the conflict types and select the one that most closely matches your situation. If you\'re unsure, use the search function to find relevant topics. You can always try different templates to see which feels most comfortable for you.'
    },
    {
      id: 'faq-4',
      question: 'Is my information private when using this tool?',
      answer: 'Yes! We do not collect any personal information from users. All template generation happens locally in your browser, and no data is sent to our servers.'
    },
    {
      id: 'faq-5',
      question: 'Can these templates guarantee a positive outcome?',
      answer: 'While the templates are designed to promote constructive communication, every relationship is unique. The success of a conversation depends on many factors, including both partners\' willingness to listen and engage in good faith.'
    },
    {
      id: 'faq-6',
      question: 'Will you add more conflict types in the future?',
      answer: 'Yes! We plan to expand our library of conflict types and templates based on user feedback. Check back regularly for updates.'
    }
  ]
  
  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="section-title text-center mb-8">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div 
            key={item.id} 
            className="card overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleFAQ(item.id)}
            >
              <span className="text-lg font-medium text-neutral-900">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${expandedId === item.id ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${expandedId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 pt-0 border-t border-neutral-200">
                <p className="text-neutral-600">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ