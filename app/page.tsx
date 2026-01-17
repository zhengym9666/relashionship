'use client'

import React, { useState } from 'react'
import Header from './components/Header'
import ConflictSelector from './components/ConflictSelector'
import TemplateGenerator from './components/TemplateGenerator'
import FAQ from './components/FAQ'
import Tabs from './components/Tabs'
import { conflictTypes, ConflictType, DialogTemplate } from '@/data/conflictTemplates'

export default function Home() {
  const [selectedConflict, setSelectedConflict] = useState<ConflictType | null>(null)
  const [aiSituation, setAiSituation] = useState<string>('')
  const [aiConflictType, setAiConflictType] = useState<string>(conflictTypes[0]?.id || '')
  const [aiPartnerPersonality, setAiPartnerPersonality] = useState<string>('gentle')
  const [aiTemplates, setAiTemplates] = useState<DialogTemplate[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedTemplates, setCopiedTemplates] = useState<Record<string, boolean>>({})

  // Standard Templates Tab Content
  const standardTabContent = (
    <div>
      {/* Conflict Selection Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
            Select Your Conflict Type
          </h3>
          <p className="text-neutral-600">
            Choose the issue you&apos;d like to discuss with your partner
          </p>
        </div>
        
        <ConflictSelector 
          conflictTypes={conflictTypes} 
          onSelectConflict={setSelectedConflict} 
        />
      </section>

      {/* Template Generation Section */}
      {selectedConflict && (
        <section className="mb-20">
          <TemplateGenerator selectedConflict={selectedConflict} />
        </section>
      )}
    </div>
  )

  // AI-Powered Templates Tab Content
  const aiTabContent = (
    <div>
      {/* AI Template Generator */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-secondary/10 rounded-full mb-4">
            <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
            Get Personalized AI Templates
          </h3>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Describe your situation in detail, and our AI will generate customized conversation templates just for you.
          </p>
        </div>

        {/* Situation Input */}
        <div className="card mb-12 border-l-4 border-secondary relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-bl-full"></div>
          
          <div className="mb-4 relative z-10">
            <h4 className="text-lg font-medium text-neutral-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Describe Your Situation
            </h4>
            <p className="text-sm text-neutral-600 mb-4">
              The more details you provide, the better our AI can tailor the templates to your specific situation.
            </p>
          </div>
          
          <textarea
            className="w-full h-48 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 shadow-sm relative z-10"
            placeholder="Example: I noticed my partner has been spending a lot of time texting someone new, and it's making me feel insecure about our relationship..."
            value={aiSituation}
            onChange={(e) => setAiSituation(e.target.value)}
          />
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Conflict Type
                </span>
              </label>
              <select 
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                value={aiConflictType}
                onChange={(e) => setAiConflictType(e.target.value)}
              >
                {conflictTypes.map((conflict) => (
                  <option key={conflict.id} value={conflict.id}>
                    {conflict.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Partner&apos;s Personality
                </span>
              </label>
              <select 
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                value={aiPartnerPersonality}
                onChange={(e) => setAiPartnerPersonality(e.target.value)}
              >
                <option value="gentle">Gentle & Understanding</option>
                <option value="defensive">Defensive</option>
                <option value="emotional">Emotional</option>
                <option value="logical">Logical & Practical</option>
              </select>
            </div>
          </div>
          
          <button 
            className="btn-primary mt-6 w-full relative z-10 group flex items-center justify-center gap-2"
            onClick={async () => {
              if (!aiSituation.trim()) {
                alert('Please describe your situation');
                return;
              }
              
              setIsLoading(true);
              setError(null);
              setAiTemplates([]);
              
              try {
                const response = await fetch('/api/ai/generate-template', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    situation: aiSituation,
                    conflictType: conflictTypes.find(c => c.id === aiConflictType)?.name,
                    partnerPersonality: aiPartnerPersonality
                  })
                });
                
                if (!response.ok) {
                  const errorData = await response.json();
                  throw new Error(errorData.error || 'Failed to generate templates');
                }
                
                const data = await response.json();
                setAiTemplates(data.templates);
              } catch (err) {
                console.error('Error:', err);
                setError(err instanceof Error ? err.message : 'An unexpected error occurred');
              } finally {
                setIsLoading(false);
              }
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isLoading ? 'Generating...' : 'Generate AI Templates'}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="card bg-red-50 border-l-4 border-red-400 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-sm font-semibold text-red-800 mb-1">Error</h4>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="card text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-6"></div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">Generating Personalized Templates...</h3>
            <p className="text-neutral-600 max-w-md mx-auto">
              Our AI is crafting customized conversation templates based on your situation.
            </p>
          </div>
        )}

        {/* AI Generated Templates */}
        {!isLoading && aiTemplates.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Your AI-Generated Templates
              </h3>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Choose the template that best fits your situation, or combine elements from multiple templates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTemplates.map((template, index) => {
                const templateKey = template.id || index;
                const isCopied = copiedTemplates[templateKey] || false;
                
                const handleCopy = () => {
                  const templateText = `${template.opening}\n\n${template.core}\n\n${template.empathy}\n\n${template.solution}`;
                  navigator.clipboard.writeText(templateText);
                  
                  setCopiedTemplates(prev => ({
                    ...prev,
                    [templateKey]: true
                  }));
                  
                  setTimeout(() => {
                    setCopiedTemplates(prev => ({
                      ...prev,
                      [templateKey]: false
                    }));
                  }, 2000);
                };
                
                return (
                  <div key={templateKey} className="card">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold text-neutral-900">
                        Template {index + 1}
                      </h4>
                      <button 
                        className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
                        onClick={handleCopy}
                        disabled={isCopied}
                      >
                        {isCopied ? (
                          <> 
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg> 
                            Copied!
                          </>
                        ) : (
                          <> 
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-primary mb-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Opening Line
                        </h5>
                        <p className="text-neutral-800">{template.opening}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-primary mb-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          Core Message
                        </h5>
                        <p className="text-neutral-800">{template.core}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-primary mb-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Empathy
                        </h5>
                        <p className="text-neutral-800">{template.empathy}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-primary mb-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Solution
                        </h5>
                        <p className="text-neutral-800">{template.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  )

  // Define tabs
  const tabs = [
    {
      id: 'standard',
      label: 'Standard Templates',
      content: standardTabContent
    },
    {
      id: 'ai',
      label: 'AI-Powered Templates',
      content: aiTabContent
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="section-subtitle max-w-2xl mx-auto text-lg">
            Choose from our standard templates or get personalized AI-generated templates tailored to your specific situation.
          </p>
        </section>

        {/* Tabs */}
        <section className="max-w-5xl mx-auto">
          <Tabs tabs={tabs} defaultActiveTab="standard" />
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-neutral-50 rounded-xl mt-16">
          <FAQ />
        </section>
      </main>
    </div>
  )
}