import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { situation, conflictType, partnerPersonality } = await request.json()
    
    if (!situation) {
      return NextResponse.json({ error: 'Situation is required' }, { status: 400 })
    }

    const openrouterApiKey = process.env.OPENROUTER_API_KEY
    
    if (!openrouterApiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    // Prepare the prompt for the AI model
    const prompt = `
Create 3 personalized conversation templates for resolving a relationship conflict. The templates should be structured with:
1. Opening Line - A gentle way to start the conversation
2. Core Message - Clear expression of the concern without blame
3. Empathy Statement - Acknowledging the partner's perspective
4. Solution Guidance - Suggestion for moving forward together

Context:
- Conflict Type: ${conflictType || 'Not specified'}
- Partner Personality: ${partnerPersonality || 'Not specified'}
- Situation: ${situation}

Please format the response as a JSON array of objects with keys: id, opening, core, empathy, solution.
Example:
[
  {
    "id": "template-1",
    "opening": "[opening line]",
    "core": "[core message]",
    "empathy": "[empathy statement]",
    "solution": "[solution guidance]"
  }
]
`

    // Call the OpenRouter API for DeepSeek R1
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openrouterApiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Relationship Conflict Navigator'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`OpenRouter API error: ${errorData.error?.message || response.statusText}`)
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content

    if (!aiResponse) {
      throw new Error('Invalid response from AI model')
    }

    // Extract JSON from AI response
    const jsonMatch = aiResponse.match(/\[\s*\{[\s\S]*\}\s*\]/)
    
    if (!jsonMatch) {
      throw new Error('Could not extract valid JSON from AI response')
    }

    const templates = JSON.parse(jsonMatch[0])
    
    return NextResponse.json({ templates }, { status: 200 })
    
  } catch (error) {
    console.error('Error generating AI template:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}