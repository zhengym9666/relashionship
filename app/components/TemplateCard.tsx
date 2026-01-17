'use client'

import React, { useState } from 'react'
import { DialogTemplate } from '@/data/conflictTemplates'

interface TemplateCardProps {
  template: DialogTemplate
  index: number
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, index }) => {
  const [isCopied, setIsCopied] = useState(false)

  // Copy template to clipboard
  const copyTemplate = () => {
    const templateText = `${template.opening}\n\n${template.core}\n\n${template.empathy}\n\n${template.solution}`
    navigator.clipboard.writeText(templateText)
    setIsCopied(true)
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-neutral-900">
          Template {index + 1}
        </h3>
        <button
          onClick={copyTemplate}
          className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
          aria-label="Copy template"
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
          <h4 className="text-sm font-medium text-primary mb-1">Opening Line</h4>
          <p className="text-neutral-800">{template.opening}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-primary mb-1">Core Message</h4>
          <p className="text-neutral-800">{template.core}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-primary mb-1">Empathy</h4>
          <p className="text-neutral-800">{template.empathy}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-primary mb-1">Solution</h4>
          <p className="text-neutral-800">{template.solution}</p>
        </div>
      </div>
    </div>
  )
}

export default TemplateCard