/** Default copy and image paths for the Thinking page (CMS seed + fallbacks). */
export const thinkingPageContent = {
  hero: {
    title: 'Thinking into the uncertainty',
    subtitle:
      'Research and inquiry into how we understand, anticipate, and respond to profound change.'
  },
  inquiry: {
    title: 'Where my Inquiry Begins',
    p1: 'Rather than offering fixed solutions or proprietary methods, my work is shaped by sustained inquiry into a small number of interrelated questions. I am interested in how we learn to see what is emerging, how we respond under pressure, how transformation actually unfolds in practice, and how deeper questions of meaning and responsibility shape the futures we create.',
    p2: 'These questions show up repeatedly across my research, writing, and applied work. They are not services, and they are not linear stages. They are lenses through which I explore how individuals, organisations, and systems respond to profound change.',
    bannerLabel: 'Systems Change',
    bannerImage: '/images/syschange.png'
  },
  empirical: {
    title: 'Empirical Grounding',
    p1: 'Much of my thinking has been shaped through long-term work inside complex social, ecological, and institutional systems.',
    p2: 'Over more than two decades, I’ve worked across sustainability, international development, and the impact sector, collaborating with multilateral institutions, governments, NGOs, and mission-driven organisations across regions including Latin America, Europe, and Southeast Asia.',
    p3: 'These contexts exposed me to systems under pressure — grappling with climate risk, biodiversity loss, economic transition, and institutional constraint — and to the limits of linear planning, technical fixes, and fragmented responses. Across this work, I became increasingly interested not only in what organisations were trying to change, but how change actually unfolded: how strategy, narrative, culture, and leadership interacted; how uncertainty was handled; and how meaning, power, and values shaped decisions — making over time. This lived engagement with systems change is what gave rise to the questions, frameworks, and research threads that follow. Below are some selected technical and strategic publications which showcase some of work on some of my empirical grounding in systems change where nature has been my source of inspiration and enabling a better stewardship, my vocation.'
  },
  writings: {
    sectionTitle: 'Selected Writings & Publications'
  },
  futureInquiry: {
    label: 'Future Inquiry',
    bannerImage: '/images/finq.png'
  },
  transcendental: {
    title: 'Transcendental Futures',
    p1: 'Alongside AATT, my work includes sustained inquiry at the intersection of futures studies, philosophy, and systems thinking.',
    p2: 'This research explores long-term responsibility, ethics, and uncertainty — including how societies imagine the future, how values and power shape foresight, and how leads make decisions when outcomes cannot be fully known.',
    p3: 'A central contribution to this inquiry is my co-authored paper Transcendental Futures, published in Futures (Elsevier, 2025), which examines how consciousness, ethics, and metaphysical assumptions influence futures thinking, leadership, and long-term stewardship.',
    linkText: '— View publication (Futures, Elsevier)',
    p4: 'This work informs both my academic writing and applied practice, grounding anticipation and judgement in deeper reflection on meaning responsibility, and consequence.',
    leafImage: '/images/leaf.png'
  },
  transformation: {
    label: 'Transformation'
  },
  aatt: {
    title: 'Anticipate. Adapt. Transform. Transcend.',
    titleLine2: 'A Framework for Transformation',
    intro:
      'AATT is a structured yet fluid framework that has emerged from my work across sustainability, futures research, and organisational change. It reflects how transformation tends to unfold in real conditions — not as a neat sequence, but as a set of interrelated capacities that deepen over time. Rather than prescribing action, AATT helps organise inquiry across four recurring dimensions. The framework continues to evolve as a thinking framework. It informs my research, writing, and collaborative work, but is not offered as a fixed methodology or packaged approach.',
    items: [
      {
        title: 'Anticipate',
        subtitle: 'Sensing the Horizon',
        description:
          'Transformation begins with awareness. This dimension explores how organisations and leaders learn to see beyond the immediate - noticing emerging signals, trends, and disruptions across social, ecological, technological, and economic systems.',
        iconLeft: false,
        iconImage: '/images/anticipate.png'
      },
      {
        title: 'Adapt',
        subtitle: 'Building Strategic Resilience',
        description:
          'Resilience is more than survival; it is the capacity to evolve without losing coherence. This dimension examines how organisations adapt under pressure - across strategy, structure, stories and culture - and what enables them to respond with discernment rather than reactivity.',
        iconLeft: true,
        iconImage: '/images/adapt.png'
      },
      {
        title: 'Transform',
        subtitle: 'Aligning Purpose, Culture & Action',
        description:
          'Transformation is both systemic and human. This dimension explores how deeper shifts take place - in narratives, ways of working, leadership culture, and collective identity. It asks how purpose moves from aspiration into practice, and how fragmentation gives way to alignment.',
        iconLeft: false,
        iconImage: '/images/transform.png'
      },
      {
        title: 'Transcend',
        subtitle: 'Meaning, Renewal and Stewardship',
        description:
          'Beyond transformation lies renewal. This dimension engages with longer-term questions of meaning, ethics, and stewardship. Here, the inquiry moves beyond adaptation toward renewal - asking what kinds of futures are worth sustaining, and what it means to lead in service of systemic flourishing.',
        iconLeft: true,
        iconImage: '/images/transcend.png'
      }
    ]
  },
  innerDimension: {
    bannerLabel: 'The Inner Dimension',
    bannerImage: '/images/innerd.png',
    heading: 'Cultivating The Capacities That Make Transformation Possible',
    body: 'Transformation is not only systemic — it is also personal. Organizations that thrive in complexity develop inner capacities alongside strategic ones : adaptability, discernment, emotional resilience, and the ability to stay grounded amid uncertainty. This dimension reflects my long-standing interest in how inner development shapes outer change. Alongside The Dots Directory, I explore how individuals strengthen the awareness, empathy, and purpose that make meaningful transformation possible — not as a substitute for systems change, but as its human foundation.',
    dotsUrl: 'https://www.dotsdirectory.com',
    dotsImage: '/images/dots.png'
  },
  booksSection: {
    sectionTitle: 'Current Books that are shaping my Ideas'
  },
  evolution: {
    title: 'Evolution of my Thinking',
    p1: 'The ideas on this page are not presented as conclusions, but as working questions — shaped through research, reflection, and engagement with real-world complexity.',
    p2: 'They continue to evolve as conditions change, new perspectives emerge, and deeper layers of uncertainty come into view. What matters most is not having definitive answers, but developing the capacity to stay in inquiry — to see clearly, judge wisely, and act with responsibility over time. If this orientation resonates, you may wish to explore how these questions show up in practice, or the personal journey and stance that inform how I work.',
    practiceLinkLabel: 'Practice',
    practiceLinkSuffix: ' — where this thinking is tested in real conditions',
    aboutLinkLabel: 'About',
    aboutLinkSuffix: ' — background, philosophy, and learning stance',
    backgroundImage: '/images/evolution.png',
    dashImage: '/images/home/dash.png'
  }
} as const;

export const thinkingHeroImages = {
  leftImage: '/images/services/heroleft.png',
  rightImage: '/images/services/heroright.png'
} as const;
