'use client'

import React, { useState } from 'react'
import { ConflictType } from '@/data/conflictTemplates'

interface ConflictSelectorProps {
  conflictTypes: ConflictType[]
  onSelectConflict: (conflictType: ConflictType) => void
}

const ConflictSelector: React.FC<ConflictSelectorProps> = ({ 
  conflictTypes, 
  onSelectConflict 
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Filter conflict types based on search term
  const filteredConflicts = conflictTypes.filter(conflict => 
    conflict.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conflict.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a conflict type..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredConflicts.map(conflict => (
          <div
            key={conflict.id}
            className="card cursor-pointer hover:border-primary/50 transition-all duration-300"
            onClick={() => onSelectConflict(conflict)}
          >
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {conflict.name}
            </h3>
            <p className="text-neutral-600 text-sm">
              {conflict.description}
            </p>
          </div>
        ))}
      </div>
      
      {filteredConflicts.length === 0 && (
        <div className="card text-center py-8">
          <p className="text-neutral-600">
            No conflict types found matching your search.
          </p>
        </div>
      )}
    </div>
  )
}

export default ConflictSelector