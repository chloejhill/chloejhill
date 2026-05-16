/** Default copy and image paths for the Practice page (CMS seed + fallbacks). */
export const practicePageContent = {
  hero: {
    title: 'Where thinking meets Reality',
    subtitle: 'Where my thinking has been tested, applied, and refined in practice',
    image: '/images/hero.png'
  },
  complexity: {
    title: 'Working inside Complexity',
    p1: 'My work is not about delivery against fixed methods or predefined solutions. It is about working inside complexity supporting understanding, alignment, and responsible action in contexts shaped by uncertainty, constraint, and long-term risk.',
    p2: 'I engage through applied research, collaboration, advisory work, and strategic synthesis, often alongside organisations navigating systemic change.',
    image: '/images/practice/complexity.png'
  },
  workShowsUp: {
    title: 'How My Work Shows Up',
    intro:
      'Rather than offering a single methodology, my practice takes different forms depending on context, timing, and need.',
    bulletsLabel: 'Typical contributions include:',
    bullets: [
      'Analysis and synthesis of complex social, ecological, and organisational dynamics',
      'Futures-oriented research to explore emerging risks, signals, and long-term implications',
      'Narrative and strategic communications to support coherence, legitimacy, and shared understanding',
      'Resilience and adaptation framing for organisations operating under pressure',
      'Judgement and advisory support in moments of transition, ambiguity, or decision-making'
    ],
    closing:
      'This work is shaped by inquiry rather than prescription, and by discernment rather than speed.',
    image: '/images/practice/showsup.png'
  },
  context: {
    title: 'Context of practice',
    intro: 'My applied work has taken place across a range of systems and domains, including:',
    bullets: [
      'Multilateral and UN systems',
      'International development and the impact sector',
      'Biodiversity, climate, and nature-positive finance',
      'Circular economy and producer responsibility',
      'Nature-based solutions and ecosystem governance',
      'Futures and trends research',
      'Strategic communications and policy-facing narratives'
    ],
    closing:
      'These contexts are where many of the questions explored on the Thinking page first emerged.',
    image: '/images/practice/context.png'
  },
  patterns: {
    title: 'Patterns I see Emerge from my Practice',
    backgroundImage: '/images/background.png',
    items: [
      {
        title: 'Clarity in Complexity',
        description:
          'Supporting shared understanding of what is unfolding so leaders can orient priorities and make grounded decisions under uncertainty.'
      },
      {
        title: 'Resilience in Motion',
        description:
          'Strengthening adaptive capacity across strategy, culture, and ways of working so organisations can respond without losing coherence or purpose.'
      },
      {
        title: 'From Stuck to Movement',
        description:
          'Helping organisations move out of fragmentation and reactivity through clearer narratives, aligned priorities, and renewed focus.'
      },
      {
        title: 'Beyond Short-Term Fixes',
        description:
          'Contributing to transformation that is strategic, cultural, and human, rather than temporary or superficial.'
      }
    ]
  },
  organisations: {
    title: 'Organisations I have Supported',
    logos: [
      'CBD.png',
      'Club or Rome.png',
      'EC.jpg',
      'FFB.png',
      'GAIN.jpg',
      'IUCN.png',
      'Metabolic.png',
      'NDC.jpg',
      'PBL.png',
      'SEEA.png',
      'UNEP.jpg',
      'WB.jpg',
      'WWF.jpg',
      'n4h.png',
      'nesta.png'
    ]
  },
  illustrations: {
    title: 'Illustrations of Practice',
    decorativeImage: '/images/illustrations.png',
    items: [
      {
        title: 'Nature-positive programme positioning (2025)',
        description:
          'Supported the development of strategic framing and narrative coherence for a forthcoming programme operating at the intersection of finance, biodiversity, and global policy.'
      },
      {
        title: 'UN natural capital accounting communications (2020–2021)',
        description:
          'Contributed to analysis, synthesis, and editorial development across reports, briefs, and communication assets supporting the integration of ecosystem values into decision-making.'
      },
      {
        title: 'Futures and trends research for sustainability transitions (2021)',
        description:
          'Conducted medium- to long-term trends research to inform strategic repositioning and future-facing inquiry within an innovation and policy context.'
      },
      {
        title: 'Systems change narrative for multilateral collaboration (2019–2020)',
        description:
          'Supported the development of shared language and strategic framing across a multi-stakeholder initiative, helping align diverse actors around systems-level change rather than fragmented interventions.'
      },
      {
        title:
          'Strategic synthesis for climate and biodiversity finance initiatives (2022–2023)',
        description:
          'Contributed analytical synthesis and narrative alignment to initiatives working across climate, biodiversity, and finance, supporting clearer decision-making and coherence under conditions of complexity and uncertainty.'
      }
    ]
  },
  connecting: {
    title: 'Connecting back to Thinking',
    p1: 'Practice is not separate from inquiry. It is where questions are sharpened, assumptions tested, and frameworks revised.',
    p2: 'Much of the thinking described elsewhere on this site - including AATT, futures inquiry, and attention to the inner dimension - has been shaped through engagement with real systems under pressure.',
    p3: 'Practice, for me, is not about implementation for its own sake. It is about staying close to reality - learning from systems as they move, strain, adapt, and sometimes fail.',
    thinkingLinkLabel: 'Thinking',
    thinkingLinkSuffix: ' — inquiry, frameworks, and research',
    aboutLinkLabel: 'About',
    aboutLinkSuffix: ' — background, philosophy, and learning stance',
    backgroundImage: '/images/practice/connecting.png',
    dashImage: '/images/home/dash.png',
    leafImage: '/images/leaf2.png'
  },
  cta: {
    title: 'If this resonates',
    body: 'If you’re navigating complexity or transition and need a space for clear thinking, honest advice, or simply a sounding board, as well as support in putting your thinking into practice, I’d love to hear from you. I offer Strategic Coherence Conversations for leaders working in impact-driven contexts.',
    linkText: '→ Request a conversation',
    linkHref: '/contact',
    profileImage: '/images/services/starttrans.png'
  }
} as const;
