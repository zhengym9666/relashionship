'use client'

import React from 'react'
import { ConflictType } from '@/data/conflictTemplates'
import TemplateCard from './TemplateCard'

interface TemplateGeneratorProps {
  selectedConflict: ConflictType | null
}

const TemplateGenerator: React.FC<TemplateGeneratorProps> = ({ selectedConflict }) => {
  if (!selectedConflict) {
    return null
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="section-title">
          Dialog Templates for {selectedConflict.name}
        </h2>
        <p className="section-subtitle">
          {selectedConflict.description}
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-neutral-700">
            <strong>Tip:</strong> Use these templates as a guide. Adjust the language to match your personal style and relationship dynamic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedConflict.templates.map((template, index) => (
          <TemplateCard
            key={template.id}
            template={template}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default TemplateGenerator