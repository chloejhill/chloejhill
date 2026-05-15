/** Default home page content for CMS seed (matches payload home group). */

export const homeContent = {
  hero: {
    title: 'Systems Change Researcher,\nWriter, Advisor. Published Futurist.',
    subtitle:
      'Thinking about uncertainty, transformation, and how we meet what’s coming.'
  },
  pickle: {
    title: 'We’re in a bit of pickle',
    body: 'It can feel as if civilisation’s collapse is speeding toward us — faster than our systems, leaders, or imaginations can keep up. Climate disruption, technological acceleration, social fragmentation, and economic fragility are not separate crises, but interconnected forces shaping a single, turbulent reality. The ground beneath us — our assumptions, institutions, and even our sense of progress — is shifting. What once felt solid now feels uncertain. So how do we prepare for what’s coming? Perhaps by learning to see differently — to recognise that the turbulence around us is not just an ending, but a turning. When we look beneath the noise, coherence begins to emerge from complexity, and possibility reveals itself in the cracks. Uncertainty doesn’t have to mean chaos; it can be a catalyst for transformation. My work begins here — helping people and organisations find steadier footing in shifting terrain, strengthen their adaptive capacity, and move toward futures that are not only resilient, but regenerative.'
  },
  approach: {
    title: 'How I’m approaching this moment of change',
    body: 'Hi, I’m Chloe — a sustainability transformations strategist working at the intersection of systems change, futures thinking, and conscious leadership.\n\nOver the past two decades, I’ve helped leaders and mission-driven organisations — from global institutions to emerging innovators — make sense of complexity and turn insight into action. My work blends strategic communications, deep sustainability expertise, foresight, and inner transformation practices to help teams anticipate what’s next, adapt with clarity, and transform how they lead and create impact. I’ve supported organisations shaping the global sustainability movement to craft impact narratives, design resilient strategies, and embed regenerative principles — building adaptive cultures and futures grounded in purpose and possibility.'
  },
  compass: {},
  attention: {
    title: 'Where I am placing my attention',
    intro:
      'My work is guided by sustained attention to a small number of interrelated areas. These are not services or stages, but enduring lines of inquiry that shape how I research, write, and engage with complexity in practice.',
    systems: {
      title: 'Systems Change & Transformation',
      body: 'How complex, economic, and ecological systems can move from extractive patterns into conditions that support life.'
    },
    futures: {
      title: 'Futures Inquiry',
      body: 'Researching diverse future possibilities and helping leaders orient with foresight, imagination, and decisive action.'
    },
    inner: {
      title: 'The Inner Dimension',
      body: 'An inquiry into the inner capacities required to meet complexity with courage, coherence, and purpose.'
    }
  },
  why: {
    title: 'Why this thinking matters',
    p1: 'How we meet uncertainty shapes more than outcomes — it shapes cultures, values, and the futures we make possible. In moments of disruption, it is easy to default to speed, certainty, or control. Yet the challenges we face today ask for something different: deeper understanding, ethical discernment, and the capacity to hold complexity without fragmenting.',
    p2: 'This work is ultimately about learning how to stay present to what is unfolding — and to respond in ways that are not only effective, but meaningful, responsible, and regenerative over the long term.',
    p3: 'This work remains an ongoing inquiry into how we meet uncertainty — and what becomes possible when we do so with care, clarity, and responsibility.'
  },
  explore: {
    title: 'If this way of seeing resonates, you can explore further:',
    linkThinking: 'Thinking',
    linkThinkingSuffix: 'research and inquiry',
    linkPractice: 'Practice',
    linkPracticeSuffix: 'where this thinking meets reality',
    linkAbout: 'About',
    linkAboutSuffix: 'journey, philosophy, and stance'
  }
};

export const homeImageSeeds: Array<{
  path: string;
  fieldPath: string;
  alt: string;
}> = [
  {
    path: 'public/images/profile.png',
    fieldPath: 'hero.profileImage',
    alt: 'Chloe Hill'
  },
  {
    path: 'public/images/home/compass.png',
    fieldPath: 'compass.image',
    alt: 'Compass illustration'
  },
  {
    path: 'public/images/home/approach.png',
    fieldPath: 'approach.image',
    alt: 'Approach section'
  },
  {
    path: 'public/images/home/thinking.png',
    fieldPath: 'explore.image',
    alt: 'Explore section'
  },
  {
    path: 'public/images/home/dash.png',
    fieldPath: 'explore.dash',
    alt: ''
  }
];
