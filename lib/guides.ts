export type Guide = { slug: string; title: string; image: number; intro: string; service?: string; category?: string; seoTitle?: string; sections: { title: string; text: string }[] };
export const guides: Guide[] = [
  {
    slug: 'requesting-a-roofing-quote', seoTitle: 'What to send for a roofing quote', service: 'roof-repairs', category: 'Roofing',
    title: 'What to send when asking for a roofing quote',
    image: 17,
    intro:
      'A few useful details help Kelvin understand the job before a visit.',
    sections: [
      {
        title: 'Your address and the problem',
        text: 'Start with the postcode and type of property. Explain what you have noticed, when it began and which part of the building is affected. If it is a leak, mention whether it happens every time it rains or only in particular conditions.',
      },
      {
        title: 'Photographs taken safely',
        text: 'A wide photo of the property helps show the roof and access. A picture of the damp patch or affected detail can help too. Take photos from the ground or inside. Do not climb onto the roof to get a closer view.',
      },
      {
        title: 'Previous work and access',
        text: 'Mention any earlier repair to the same area and whether the problem returned. Tell Kelvin about a shared passage, locked gate, conservatory or extension below the work.',
      },
      {
        title: 'Check what the quote covers',
        text: 'Ask which materials, preparation, access and waste removal are included. If further damage is found during the job, agree how any extra work will be discussed before it is carried out.',
      },
    ],
  },
  {
    slug: 'planning-plastering-work', seoTitle: 'Planning plastering around other work', service: 'plastering', category: 'Plastering',
    title: 'Planning plastering around other work',
    image: 30,
    intro:
      'Agree the surfaces, preparation and room access before the plastering starts.',
    sections: [
      {
        title: 'Be specific about the surfaces',
        text: 'List the walls, ceilings and smaller areas that need work. A room photograph helps explain the overall job; a closer image can show the state of the existing plaster or board.',
      },
      {
        title: 'Sequence the other trades',
        text: 'If sockets, pipework, windows or doors are being changed, discuss the order with the people doing the work. The plastering plan should account for any changes to the surfaces.',
      },
      {
        title: 'Prepare the room',
        text: 'Agree how the room will be cleared and what protection is needed. Mention furniture that cannot be moved and the route through the property.',
      },
      {
        title: 'Before decorating',
        text: 'Ask Kelvin for drying and preparation advice for the material used and the conditions in your room. Arrange decorating around that advice, rather than assuming every surface is ready on the same day.',
      },
    ],
  },
  {
    slug: 'planning-exterior-work', seoTitle: 'Preparing for rendering or jetwashing', service: 'rendering', category: 'Exterior work',
    title: 'Getting ready for rendering or jetwashing',
    image: 19,
    intro:
      'Access, fixtures and the existing surface all belong in the first conversation.',
    sections: [
      {
        title: 'Show the whole area',
        text: 'Send a wide photograph of the elevation or paved area. Add a closer photograph of damage, staining or the existing finish where it helps explain the work.',
      },
      {
        title: 'Mention access early',
        text: 'Narrow passages, steps, neighbouring boundaries and items fixed to the wall affect planning. For jetwashing, also mention the water supply and normal drainage route.',
      },
      {
        title: 'Agree the preparation',
        text: 'Discuss furniture, pots, cables, downpipes and the surfaces that need protection. Confirm who will move or prepare each item.',
      },
      {
        title: 'Put the scope in writing',
        text: 'Identify the exact walls or paved areas to be worked on. For rendering, discuss the proposed system, colour and texture. For cleaning, agree which surfaces and edges are included.',
      },
    ],
  },
{
  "slug": "roof-leak-what-to-do",
  "seoTitle": "Roof leak? What to do before the roofer arrives",
  "title": "A roof leak: what to do before the roofer arrives",
  "image": 36,
  "category": "Roofing",
  "service": "emergency-roof-repairs",
  "intro": "Found water coming through the ceiling? A clear description and safe photographs help you get the right help.",
  "sections": [
    {
      "title": "Keep yourself safe",
      "text": "Stay away from loose ceilings, wet electrics and damaged areas. Never climb onto a roof to investigate a leak. If there is an immediate danger to people, contact the emergency services. Move belongings only where it is safe to do so."
    },
    {
      "title": "Explain what you can see",
      "text": "Note which room is affected, where the water appears and when it started. Tell Kelvin if it happens only in wind-driven rain or after a long spell of wet weather. A photograph from indoors and a wide view from ground level can help."
    },
    {
      "title": "Ask about the visit and repair",
      "text": "Give your postcode and mention access around the house. Check the next available attendance and whether the first visit is to inspect, make a temporary repair or carry out agreed work. A temporary patch and a lasting repair may need separate arrangements."
    }
  ]
},
{
  "slug": "repair-or-replace-a-roof",
  "seoTitle": "Roof repair or replacement?",
  "title": "Does your roof need a repair or a replacement?",
  "image": 20,
  "category": "Roofing",
  "service": "roof-repairs",
  "intro": "One slipped tile and widespread roof damage call for different decisions. Start with the condition of the roof.",
  "sections": [
    {
      "title": "Look beyond its age",
      "text": "An older roof does not automatically need replacing. A local fault may be repairable, while damage spread across the roof may need a broader job. The covering and the condition beneath it both matter."
    },
    {
      "title": "Mention earlier repairs",
      "text": "Tell Kelvin which parts have been repaired and whether the same leak keeps coming back. Previous work is useful context, but the cause still needs checking. Water can travel before it shows up inside the house."
    },
    {
      "title": "Compare the actual scope",
      "text": "Ask what a repair would address and what it would leave untouched. For a replacement, check the covering, membrane, battens, access and waste removal. Agree how unexpected timber damage will be discussed. A clear quote makes the options easier to compare."
    }
  ]
},
{
  "slug": "flat-roof-leaks",
  "seoTitle": "Flat roof leaks: edges, junctions and drainage",
  "title": "Why a flat roof can leak around its edges",
  "image": 28,
  "category": "Roofing",
  "service": "flat-roofing",
  "intro": "The main covering is only part of a flat roof. Edges, wall junctions and drainage deserve a closer look.",
  "sections": [
    {
      "title": "Where different parts meet",
      "text": "A flat roof may meet brickwork, a pitched roof or a roof opening. Those junctions need checking alongside the main covering. The position of an indoor stain alone does not identify the fault."
    },
    {
      "title": "Describe drainage and standing water",
      "text": "Mention water that remains on the surface after rain, overflowing outlets or a leak that appears near one corner. Observe from a safe position; do not walk onto the roof. Photographs taken before and after rainfall can explain the pattern."
    },
    {
      "title": "Understand the repair proposal",
      "text": "Ask whether the covering can be repaired and what condition the deck is in. If replacement is advised, the quote should identify the material, edge trims, wall junctions and any deck work. Check what is included rather than comparing prices for different scopes."
    }
  ]
},
{
  "slug": "skim-or-replaster",
  "seoTitle": "Skimming or replastering your walls",
  "title": "Skimming or replastering: what does your wall need?",
  "image": 30,
  "category": "Plastering",
  "service": "plastering",
  "intro": "A smooth finish starts with a sound surface. The condition of the existing plaster determines the preparation.",
  "sections": [
    {
      "title": "When a skim may suit",
      "text": "A skim creates a fresh finish over a suitable, stable background. It can make sense for walls being redecorated, but loose plaster or an unresolved moisture problem needs attention first. A photograph is a starting point, not a substitute for checking the surface."
    },
    {
      "title": "When more preparation is needed",
      "text": "Damaged, loose or uneven areas may need removing or repairing before a finish goes on. Newly boarded walls and exposed masonry also need different treatment. Describe what is on the wall now, including old wallpaper or previous repairs."
    },
    {
      "title": "Ask for a clear room quote",
      "text": "List the walls, ceiling and reveals you want included. Check preparation, protection and waste removal, and mention any socket or pipework changes. Kelvin can explain whether the job is a skim, local repair or more extensive plastering after assessing the surfaces."
    }
  ]
},
{
  "slug": "preparing-a-room-for-plastering",
  "seoTitle": "Preparing a room for plastering",
  "title": "How to prepare a room for plastering",
  "image": 30,
  "category": "Plastering",
  "service": "plastering",
  "intro": "A little planning makes access easier and avoids fresh plaster being disturbed by unfinished work.",
  "sections": [
    {
      "title": "Agree what will be moved",
      "text": "Ask how clear the room needs to be. Tell Kelvin about large furniture that cannot be moved, fitted wardrobes and floor coverings that need protection. Check the route into the room as well as the working space itself."
    },
    {
      "title": "Finish work that opens the walls",
      "text": "Changing sockets, chasing in cables and moving pipes can disturb the surface. Discuss the order with the electrician, plumber and plasterer before booking dates. Include window and door changes if the surrounding reveals need finishing."
    },
    {
      "title": "Plan for drying and decorating",
      "text": "The room will need time after plastering before decorating. Ask for advice for the product and conditions rather than booking a painter against a fixed assumption. Keep the material and paint instructions together so the decorator knows how the new surface should be prepared."
    }
  ]
},
{
  "slug": "decorating-new-plaster",
  "seoTitle": "When to decorate new plaster",
  "title": "When can you decorate new plaster?",
  "image": 30,
  "category": "Plastering",
  "service": "plastering",
  "intro": "Fresh plaster needs the right drying and preparation before paint. There is no single timetable for every room.",
  "sections": [
    {
      "title": "Wait for the plaster to dry",
      "text": "Drying depends on the product, thickness and room conditions. Ask the plasterer how to manage the room and how to check readiness. A calendar estimate should not override the condition of the surface or the manufacturer’s guidance."
    },
    {
      "title": "Choose paint preparation for the finish",
      "text": "Read the plaster and paint manufacturer’s instructions before applying the first coat. Ask the decorator which preparation is suitable for the chosen products. Do not assume every paint needs the same dilution or that a single ratio suits all finishes."
    },
    {
      "title": "Keep the next work in order",
      "text": "Allow for drying when scheduling decorating, fitted furniture and finishing details. If patches stay damp or staining returns, ask about the cause before covering them. New plaster gives a fresh surface; it does not fix an ongoing leak or damp problem."
    }
  ]
},
{
  "slug": "choosing-a-render-finish",
  "seoTitle": "Choosing an exterior render finish",
  "title": "Choosing a render finish for your home",
  "image": 19,
  "category": "Rendering",
  "service": "rendering",
  "intro": "Colour and texture matter, but the existing wall and proposed render system come first.",
  "sections": [
    {
      "title": "Start with the wall",
      "text": "Explain what the wall is made from and which finish is already on it. Mention cracks, loose areas and moisture problems. Preparation needs agreeing before selecting a new finish; a fresh coating should not hide a fault that needs repairing."
    },
    {
      "title": "Look at samples in daylight",
      "text": "Discuss the available finishes, including K-rend, and ask to see the proposed colour and texture. A sample viewed outside is more useful than a colour on a phone screen. Consider the windows, roofline and neighbouring elevations when choosing."
    },
    {
      "title": "Check the small details",
      "text": "Ask how corners, window reveals and the base of the wall will be finished. Include downpipes, cables and wall-mounted fittings in the conversation. The quote should identify the system, preparation, access and elevations covered, so you know what you are agreeing to."
    }
  ]
},
{
  "slug": "cracks-in-render",
  "seoTitle": "Cracked render: patch or replace?",
  "title": "Cracked render: repair the patch or redo the wall?",
  "image": 23,
  "category": "Rendering",
  "service": "rendering",
  "intro": "The right repair depends on the cause, the condition around the crack and the existing finish.",
  "sections": [
    {
      "title": "Show the crack and the whole wall",
      "text": "Send a close photograph and a wide view of the elevation. Mention when you first noticed the crack and whether it has changed. Tell Kelvin about loose patches, staining or damp indoors. These details help explain the problem before a visit."
    },
    {
      "title": "Check the surface beneath",
      "text": "A visible crack may be only part of the issue. Loose render, the condition of the background and recurring movement need assessing before a repair is proposed. If there are concerns about structural movement, an appropriate specialist may need to investigate."
    },
    {
      "title": "Agree the finish of the repair",
      "text": "A local repair can differ in colour or texture from weathered render. Ask what can reasonably be matched and whether a larger area needs finishing for a consistent appearance. Avoid agreeing a patch solely from a close-up photo without discussing the surrounding wall."
    }
  ]
},
{
  "slug": "planning-a-rendering-job",
  "seoTitle": "Planning an exterior rendering job",
  "title": "What to check before booking exterior rendering",
  "image": 21,
  "category": "Rendering",
  "service": "rendering",
  "intro": "Make access, preparation and the finished details part of the quote from the start.",
  "sections": [
    {
      "title": "Define the exact area",
      "text": "Identify the front, rear and side walls to be worked on, including window reveals and awkward sections. Photographs help establish the scope. Ask whether existing coatings need removing and what repair or preparation is included."
    },
    {
      "title": "Plan around the house",
      "text": "Mention narrow access, neighbouring boundaries, lower roofs and conservatories. Discuss scaffolding and what happens to downpipes, cables, satellite dishes and other fittings. Agree who will remove and refit each item, rather than leaving it to the day work starts."
    },
    {
      "title": "Leave room for the weather",
      "text": "Exterior work depends on conditions and the render system’s requirements. Ask how scheduling and protection will be handled if the weather changes. Confirm the proposed finish, materials, payment arrangements and any guarantee in writing before booking the job."
    }
  ]
},
{
  "slug": "why-gutters-overflow",
  "seoTitle": "Why gutters overflow in the rain",
  "title": "Why do your gutters overflow when it rains?",
  "image": 38,
  "category": "Guttering",
  "service": "guttering",
  "intro": "Water over the edge can mean a blockage, a damaged fitting or a gutter run that needs checking.",
  "sections": [
    {
      "title": "Notice where the overflow happens",
      "text": "Observe from ground level during rain if it is safe. Does water spill at one joint, around an outlet or along a whole section? Tell Kelvin what you see. Do not use a ladder to get a closer look for a quote."
    },
    {
      "title": "Cleaning and repair are different jobs",
      "text": "Leaves and debris can block the route to the downpipe. Worn joints, damaged brackets or poor alignment may need repair instead. Explain any previous cleaning and whether the problem returned so the inspection can focus on the cause."
    },
    {
      "title": "Check what the quote includes",
      "text": "Ask which gutter lengths, outlets and downpipes will be checked or cleared, and whether repairs are included. If replacement is recommended, agree the profile, colour and connection to drainage. Staining or damaged roofline boards can be discussed as separate work."
    }
  ]
}
];
