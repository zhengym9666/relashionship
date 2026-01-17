'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 border-b border-neutral-200 py-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-x-16 -translate-y-16 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl translate-x-16 translate-y-16 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Relationship Conflict Navigator
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl">
            Turn difficult conversations into meaningful connections
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header