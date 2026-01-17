'use client'

import React from 'react'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  defaultActiveTab?: string
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = React.useState<string>(
    defaultActiveTab || tabs[0]?.id || ''
  )

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex bg-neutral-50 p-1 rounded-xl mb-10 shadow-inner">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`flex-1 px-6 py-3 font-medium text-sm transition-all duration-300 rounded-lg relative overflow-hidden ${activeTab === tab.id
              ? 'bg-white text-primary font-semibold shadow-md'
              : 'text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {/* Decorative dot for active tab */}
            {activeTab === tab.id && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></div>
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-all duration-500 ${activeTab === tab.id
              ? 'opacity-100 block transform translate-y-0'
              : 'opacity-0 hidden transform translate-y-2'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs