// Interface definitions
export interface DialogTemplate {
  id: string;
  opening: string;        // Opening line
  core: string;           // Core expression
  empathy: string;        // Empathy statement
  solution: string;       // Solution guidance
}

export interface ConflictType {
  id: string;
  name: string;           // Conflict type name
  description: string;    // Conflict type description
  templates: DialogTemplate[];  // Corresponding dialog templates
}

// Sample data for conflict types and templates
export const conflictTypes: ConflictType[] = [
  {
    id: "infidelity",
    name: "Infidelity/Cheating",
    description: "Discovering or suspecting your partner has been unfaithful",
    templates: [
      {
        id: "infidelity-1",
        opening: "Honey, I need to talk to you about something that's been really weighing on me. Can we set aside some time?",
        core: "Recently, I've noticed some things that have made me feel really不安 about our relationship, and I want to understand what's going on.",
        empathy: "I know this might come as a surprise or make you feel uncomfortable, but it's important for me to be honest about my feelings.",
        solution: "Could we sit down together and have an open conversation about what's been happening, and how we can work through this?"
      },
      {
        id: "infidelity-2",
        opening: "I've been struggling with something that's been hard to put into words, but I think we need to talk about it.",
        core: "I have some concerns about our relationship that I haven't been able to share with you yet.",
        empathy: "I care about us and our future together, which is why I want to be brave and bring this up.",
        solution: "Would you be willing to listen to what I have to say without interrupting, and then we can both share our perspectives?"
      },
      {
        id: "infidelity-3",
        opening: "There's something important I need to discuss with you. I hope we can approach this with kindness and understanding.",
        core: "I've been feeling disconnected from you lately, and I've noticed some changes in our relationship that have been confusing.",
        empathy: "I don't want to jump to conclusions, but I need to be honest about what I've been experiencing.",
        solution: "Can we create a safe space where we can both be vulnerable and talk about what's been going on between us?"
      }
    ]
  },
  {
    id: "hygiene",
    name: "Hygiene Issues",
    description: "Concerns about your partner's personal hygiene habits",
    templates: [
      {
        id: "hygiene-1",
        opening: "I wanted to talk to you about something that might seem small, but it's been on my mind lately.",
        core: "I've noticed some differences in our hygiene routines that I think we could discuss.",
        empathy: "I know this can be a sensitive topic, and I don't want you to feel criticized.",
        solution: "Maybe we can find some ways to align our habits that work for both of us?"
      },
      {
        id: "hygiene-2",
        opening: "I care about our comfort and connection, so I hope you don't mind me bringing this up.",
        core: "There's something related to our daily routines that I'd like to share with you.",
        empathy: "I value your feelings and want to approach this with respect.",
        solution: "Could we talk about our hygiene preferences and find a middle ground that makes us both happy?"
      },
      {
        id: "hygiene-3",
        opening: "I've been thinking about how we can make our living space and daily interactions even more comfortable for both of us.",
        core: "One area that comes to mind is our personal hygiene habits.",
        empathy: "I want to be gentle in how I share this, as I know it's a personal matter.",
        solution: "Would you be open to exploring some small adjustments that might help us feel more connected?"
      }
    ]
  },
  {
    id: "trust-betrayal",
    name: "Trust Betrayal",
    description: "Feeling betrayed by your partner's actions or broken promises",
    templates: [
      {
        id: "trust-1",
        opening: "I've been struggling with something that's affected my ability to trust lately, and I think we need to talk about it.",
        core: "When [specific incident] happened, it really hurt me and made me question some things.",
        empathy: "I know you might not have realized how much it would impact me, but it's been difficult to move past.",
        solution: "Can we work together to rebuild that trust and make sure we're both on the same page moving forward?"
      },
      {
        id: "trust-2",
        opening: "There's something I need to share with you about how I've been feeling lately.",
        core: "I've been having a hard time trusting you fully since [specific situation] occurred.",
        empathy: "I care about us and want to understand your perspective too.",
        solution: "Could we talk about what happened and figure out how we can both feel more secure in our relationship?"
      },
      {
        id: "trust-3",
        opening: "I value our relationship deeply, which is why I want to be honest about this.",
        core: "I've been feeling betrayed and unsure of where we stand since [specific event].",
        empathy: "I know trust takes time to rebuild, but I'm willing to work on it if you are too.",
        solution: "Let's have an open conversation about what we both need to feel safe and trusting again."
      }
    ]
  },
  {
    id: "finances",
    name: "Financial Problems",
    description: "Disagreements about money management, spending habits, or financial goals",
    templates: [
      {
        id: "finances-1",
        opening: "I've been thinking about our finances lately, and I wanted to talk to you about how we're managing our money together.",
        core: "There are some aspects of our financial situation that I'm concerned about, like [specific issue].",
        empathy: "I know money can be a stressful topic, but I think we can work through this as a team.",
        solution: "Could we schedule a time to go over our budget and financial goals, and make a plan that works for both of us?"
      },
      {
        id: "finances-2",
        opening: "I wanted to bring up something that's been on my mind regarding our money matters.",
        core: "I've noticed that we have different approaches to [specific financial behavior], and it's been causing some tension for me.",
        empathy: "I don't want this to create distance between us, which is why I think it's important to talk about it.",
        solution: "Let's discuss our financial values and find a compromise that respects both of our perspectives."
      },
      {
        id: "finances-3",
        opening: "I care about our future together, and I think we should align on our financial plans.",
        core: "There are some spending habits or financial decisions that I'd like to address with you.",
        empathy: "I know we both want what's best for us, so let's approach this with openness.",
        solution: "Can we create a financial plan together that reflects both of our needs and goals?"
      }
    ]
  },
  {
    id: "family-conflicts",
    name: "Family Conflicts",
    description: "Issues with in-laws, family expectations, or differences in family values",
    templates: [
      {
        id: "family-1",
        opening: "I wanted to talk to you about our families and how they impact our relationship.",
        core: "There have been some situations with [specific family member] that have been difficult for me to navigate.",
        empathy: "I know how important your family is to you, and I want to respect that while also honoring my own feelings.",
        solution: "Can we discuss how we can support each other when dealing with family-related challenges?"
      },
      {
        id: "family-2",
        opening: "I've been thinking about some family dynamics that have been affecting our relationship, and I'd like to share my thoughts.",
        core: "When it comes to [specific family issue], I've been feeling caught between my needs and the expectations of others.",
        empathy: "I don't want this to cause tension between us, which is why I think it's important to communicate openly.",
        solution: "Let's work together to set boundaries that respect both our families and our relationship."
      },
      {
        id: "family-3",
        opening: "I value both you and your family, but there's something I need to talk to you about.",
        core: "Some interactions with [specific family member] have been challenging for me lately.",
        empathy: "I want to find a way to address this without hurting anyone's feelings.",
        solution: "Could we brainstorm some strategies for handling family situations that might be difficult for either of us?"
      }
    ]
  }
];