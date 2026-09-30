export type ServiceContent = {
  intro: string;
  hero: number;
  gallery: number[];
  reviews: string[];
  sections: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};
export const serviceContent: Record<string, ServiceContent> = {
  'emergency-roof-repairs': {
    intro:
      'Water coming in, tiles displaced or a sudden roof problem? Call Kelvin, explain what has happened and give your postcode. Discuss the next available visit and what needs inspecting.',
    hero: 36,
    gallery: [20, 9],
    reviews: ['maxine', 'ali', 'charlotte'],
    sections: [
      {
        title: 'Start with a clear description',
        text: 'Say where the water is appearing, when it started and whether the problem changes with the weather. A photo taken from the ground or inside the room can help explain it. There is no need to get onto the roof yourself.',
      },
      {
        title: 'An urgent repair still needs the right diagnosis',
        text: 'A visible drip does not always sit directly below the fault. Tiles, valleys, flashing, flat roof junctions and gutters can all be involved. The repair should follow an inspection of the affected area, rather than an assumption based only on the stain.',
      },
      {
        title: 'Discuss the immediate job and the lasting repair',
        text: 'Depending on access and conditions, the work needed immediately may differ from the permanent repair. Ask what the proposed work covers, what needs a later visit and how each part will be priced.',
      },
      {
        title: 'What to have ready when you call',
        text: 'Your postcode, contact number, type of property and a brief description are a useful starting point. Mention difficult access, conservatories or extensions below the roof. Kelvin can discuss availability and the next step with you directly.',
      },
    ],
    faq: [
      {
        q: 'Can you attend today?',
        a: 'Call to check the current availability. Arrival times depend on the location, existing work, weather and safe access.',
      },
      {
        q: 'Should I climb up to take a photo?',
        a: 'No. Photos taken from a safe position on the ground or inside are enough to start the conversation.',
      },
    ],
  },
  'roof-repairs': {
    intro:
      'A slipped slate, broken tile or recurring leak does not automatically mean a whole new roof. Talk to Kelvin about an inspection and a repair suited to the problem.',
    hero: 20,
    gallery: [36, 17, 9],
    reviews: ['maxine', 'ali', 'charlotte'],
    sections: [
      {
        title: 'Find the cause before choosing the repair',
        text: 'Explain what you have noticed: a damp patch, water after heavy rain, a loose tile or a problem around a chimney or roof window. The visible symptom is the starting point. The condition of the surrounding covering and junctions helps determine the work needed.',
      },
      {
        title: 'Slates, tiles and the details between them',
        text: 'Local repairs can involve replacing damaged coverings, dealing with loose ridge details or addressing a weatherproofing junction. Matching the existing covering, reaching the work safely and checking the condition beneath all affect the scope.',
      },
      {
        title: 'Repair or replace?',
        text: 'The age of the roof alone is not enough to decide. The spread of damage, condition of the underlying layers and previous repairs matter too. Ask Kelvin to explain whether the issue is local or part of a wider problem before deciding on a repair or reroof.',
      },
      {
        title: 'Arrange a visit',
        text: 'Send a description, your postcode and any safe photographs. If you have had work on the same area before, mention that too. It helps build a clearer picture of the fault and the access required.',
      },
    ],
    faq: [
      {
        q: 'Can you take on a small repair?',
        a: 'Yes. AAA’s published service information includes smaller roofing jobs as well as full roof replacements.',
      },
      {
        q: 'What affects the repair price?',
        a: 'Access, the area affected, the materials and any damage beneath the visible covering all influence the quote.',
      },
    ],
  },
  'flat-roofing': {
    intro:
      'Flat roofs for extensions, dormers and other parts of the home. Discuss leaks, worn surfaces or a replacement with Kelvin and choose an approach that suits the roof.',
    hero: 2,
    gallery: [8, 11, 15, 28, 16],
    reviews: ['liz', 'nigel', 'maxine'],
    sections: [
      {
        title: 'Look at the whole flat roof',
        text: 'The covering is only part of a flat roof. The supporting deck, edges, drainage and junctions against the building also matter. A problem at an edge or wall connection can need a different approach from widespread deterioration of the surface.',
      },
      {
        title: 'Repairs and replacement coverings',
        text: 'AAA undertakes flat roofing, including EPDM rubber. Discuss the existing material, the condition of the roof beneath it and the intended use of the space below. Kelvin can explain the proposed system and what preparation is included.',
      },
      {
        title: 'Edges and junctions deserve attention',
        text: 'Where a flat roof meets brickwork, a pitched roof or a roof opening, the details are as important as the main surface. The project photographs show several different roof arrangements, including extensions and dormers.',
      },
      {
        title: 'Understand the scope of your quote',
        text: 'Ask whether the price includes stripping the old covering, replacing any unsuitable decking, edge trims and disposal. Any guarantee should be confirmed for the specific materials and work in your quotation.',
      },
    ],
    faq: [
      {
        q: 'Do you install rubber flat roofs?',
        a: 'Yes. AAA installs EPDM rubber flat roofing.',
      },
      {
        q: 'Can an existing flat roof be repaired?',
        a: 'That depends on the source of the problem and the condition of the covering and deck. Arrange an inspection before choosing repair or replacement.',
      },
    ],
  },
  'new-roofs': {
    intro:
      'When a roof needs more than a local repair, plan the replacement properly. AAA carries out reroofing and new roof work in Padiham and the surrounding towns.',
    hero: 1,
    gallery: [6, 3, 12, 24, 26, 29, 35],
    reviews: ['nigel', 'ali', 'maxine'],
    sections: [
      {
        title: 'A roof replacement starts with the details',
        text: 'The existing covering, shape of the roof and access around the house shape the job. Discuss the material you want, the condition of the structure and the work needed at chimneys, valleys and the roofline.',
      },
      {
        title: 'What happens underneath the tiles',
        text: 'The project photographs show membrane and battens before the covering goes on. Your quote should make the proposed layers and scope clear, including how any damaged timber uncovered during the work will be handled.',
      },
      {
        title: 'Choose a finish that suits the property',
        text: 'Slate and tile roofs come with different appearances and installation requirements. Talk through the available options and the suitability of the existing structure. Where permissions or particular specifications apply to your property, establish those before work begins.',
      },
      {
        title: 'Plan the work around your home',
        text: 'Scaffolding, deliveries and waste removal need space. Mention shared access, neighbouring roofs and any extension or conservatory below the work. Ask Kelvin about the likely sequence and how the property will be protected during the job.',
      },
    ],
    faq: [
      {
        q: 'Do you replace a whole roof?',
        a: 'Yes. Full roof replacements and reroofing are part of AAA’s service offering.',
      },
      {
        q: 'Can you work around chimneys and roof junctions?',
        a: 'Chimney repairs and leadwork are also AAA services. Discuss these details as part of the reroofing quotation.',
      },
    ],
  },
  'chimney-repairs': {
    intro:
      'Problems around a chimney can involve masonry, the top of the stack or its connection to the roof. Speak to Kelvin about chimney repairs, pointing and leadwork.',
    hero: 26,
    gallery: [35],
    reviews: ['lucy', 'barbara', 'ali'],
    sections: [
      {
        title: 'Masonry and roof junctions',
        text: 'Cracked mortar and a leaking roof junction are different faults, even if they appear around the same chimney. An inspection helps identify whether the work concerns the brickwork, flaunching, flashing or a combination of details.',
      },
      {
        title: 'Pointing, flaunching and chimney work',
        text: 'AAA’s published services include chimney pointing, flaunching and taking down chimneys. The right scope depends on the condition of the stack and the proposed outcome. Discuss access, the use of the chimney and any connected appliances before work is agreed.',
      },
      {
        title: 'Leadwork around the roof',
        text: 'Leadwork forms part of many weatherproofing junctions, including chimneys and bays. Repair decisions depend on the condition of the existing material and the detail beneath. Kelvin can discuss what needs renewing and how it connects to the surrounding covering.',
      },
      {
        title: 'Access is part of the plan',
        text: 'The position and height of a chimney can make safe access a substantial part of the job. Share a photograph of the property taken from ground level, along with your postcode and a description of the problem.',
      },
    ],
    faq: [
      {
        q: 'Can you repair chimney flashing?',
        a: 'AAA offers leadwork and chimney repair services. The exact repair should follow an inspection of the affected junction.',
      },
      {
        q: 'Do I need the whole chimney rebuilt?',
        a: 'Not every chimney issue needs a rebuild. The condition and source of the problem determine the appropriate scope.',
      },
    ],
  },
  guttering: {
    intro:
      'Overflowing gutters, dripping joints or water tracking down the wall? AAA undertakes gutter repairs, cleaning and replacement across Padiham and nearby towns.',
    hero: 12,
    gallery: [8, 9, 28],
    reviews: ['jamie', 'carl', 'emma'],
    sections: [
      {
        title: 'Work out where the water is going',
        text: 'Tell Kelvin whether the issue happens at a joint, corner, outlet or along a whole length. A blockage, damaged fitting and incorrectly aligned run can produce similar symptoms. Photographs from the ground help show the affected side of the building.',
      },
      {
        title: 'Repairs and cleaning',
        text: 'The first step is to establish the cause of the problem and whether the existing gutter can be put right. Discuss the work needed at joints, brackets and outlets, along with any cleaning that forms part of the job.',
      },
      {
        title: 'Replacement guttering',
        text: 'If the guttering is beyond repair or being renewed alongside roofline work, ask about the proposed profile, colour and downpipe arrangement. The new installation should suit the building and connect to the existing drainage appropriately.',
      },
      {
        title: 'A useful time to check the roofline',
        text: 'Fascias and soffits sit close to the gutters and can be affected by long-running water problems. If other damage is visible, discuss it as a separate part of the quotation rather than assuming it is included.',
      },
    ],
    faq: [
      {
        q: 'Can you fix a leaking gutter joint?',
        a: 'Gutter repairs are part of AAA’s services. Call with the location and a description to arrange the next step.',
      },
      {
        q: 'Do you clear gutters too?',
        a: 'Yes. Gutter cleaning is listed among AAA’s services.',
      },
    ],
  },
  'fascias-soffits': {
    intro:
      'Fascias, soffits and guttering complete the edge of your roof. Discuss repairs or replacement with Kelvin, including work carried out alongside a roofing project.',
    hero: 15,
    gallery: [9, 8],
    reviews: ['carl', 'emma', 'rebecca'],
    sections: [
      {
        title: 'More than a tidy roof edge',
        text: 'Fascias and soffits finish the roofline and sit alongside the gutters. Peeling finishes, damaged boards or water staining are worth investigating before simply covering them up. The condition behind the visible surface helps determine the right work.',
      },
      {
        title: 'Discuss the proposed materials',
        text: 'AAA installs uPVC fascias and soffits. Talk through the colour, profile, ventilation requirements and the guttering attached to the roof edge. The scope should distinguish replacement from work to existing boards.',
      },
      {
        title: 'Coordinate the roofline and rainwater work',
        text: 'A roofline project can be a useful time to consider the condition of gutters and downpipes. Ask which items are included in the quotation and whether any surrounding roof details also need attention.',
      },
      {
        title: 'Show us the affected elevation',
        text: 'A ground-level photograph of the front, side or rear helps explain the job. Mention difficult access, lower roofs and any conservatory beneath the area, so these can be considered when arranging a visit.',
      },
    ],
    faq: [
      {
        q: 'Can the guttering be replaced at the same time?',
        a: 'Yes, guttering is also an AAA service. Discuss both parts together so the quotation sets out the complete scope.',
      },
      {
        q: 'What should I send to help explain the job?',
        a: 'Send a ground-level photo showing the roof edge and explain any leaks, loose boards or visible damage.',
      },
    ],
  },
  plastering: {
    intro:
      'Fresh plaster for walls, ceilings and the awkward details around windows and doors. Speak to Kelvin about repairs, skimming and preparation for your next stage of decorating.',
    hero: 30,
    gallery: [],
    reviews: ['phoenix', 'caroline', 'rebecca'],
    sections: [
      {
        title: 'Start with the surface you have',
        text: 'A sound wall that needs a skim is a different job from loose plaster, exposed masonry or a newly boarded surface. Describe the existing finish and the area you want covered. Photos of the whole wall and the affected details help explain the work.',
      },
      {
        title: 'Walls, ceilings and smaller repairs',
        text: 'AAA undertakes plastering, including boarding and skimming for interior walls and ceilings. The work can be discussed as a single room, selected surfaces or repairs following other building work.',
      },
      {
        title: 'Window reveals and neat junctions',
        text: 'The plastering photograph shows work around a window and an entrance door. Corners, reveals and junctions with existing finishes need care, particularly where new work must meet surfaces that are staying in place.',
      },
      {
        title: 'Plan the room before work starts',
        text: 'Discuss furniture, floor protection, access and any electrical or plumbing work that must happen first. Ask how long the particular finish needs before decorating; this varies with the material, thickness and conditions in the room.',
      },
    ],
    faq: [
      {
        q: 'Can you plaster one wall or a small area?',
        a: 'Describe the size and condition of the area to Kelvin. AAA handles plastering as well as larger property work.',
      },
      {
        q: 'Can plaster cover a damp problem?',
        a: 'A fresh finish does not resolve the underlying source of moisture. Explain any damp history so the cause can be considered before plastering.',
      },
    ],
  },
  rendering: {
    intro:
      'Exterior rendering, including K-rend, for walls that need repairing or a new finish. Speak to Kelvin about the preparation, colour and texture.',
    hero: 32,
    gallery: [5, 10, 13, 19, 21, 23],
    reviews: ['caroline', 'phoenix', 'rebecca'],
    sections: [
      {
        title: 'Prepare the existing wall',
        text: 'The condition of the surface beneath matters to the finished result. Discuss old coatings, cracking, loose areas and any previous repairs before deciding on the proposed render system. Preparation should be set out clearly in the quote.',
      },
      {
        title: 'Choose the finish and system',
        text: 'AAA carries out rendering, including K-rend. Colour, texture and suitability for the existing wall all affect the choice. Ask Kelvin to explain the proposed materials and the finish you can expect on your property.',
      },
      {
        title: 'Corners, openings and roofline details',
        text: 'The project photographs show whole elevations as well as closer views around windows, corners and doors. These details help you understand the finish beyond a single wide photograph of the house.',
      },
      {
        title: 'Plan access and the surrounding work',
        text: 'Scaffolding and access around the building may be needed. Discuss downpipes, cables, window protection and any fixtures affected by the work. Weather conditions can influence the timing of external finishes, so agree the practical sequence before starting.',
      },
    ],
    faq: [
      { q: 'Do you offer K-rend?', a: 'Yes. AAA offers K-rend rendering.' },
      {
        q: 'Can you discuss colour and texture options?',
        a: 'Yes. Talk through the finish you want and the system suitable for the wall before agreeing the work.',
      },
    ],
  },
  jetwashing: {
    intro:
      'Outdoor paving can collect dirt and surface growth over time. Talk to Kelvin about jetwashing and the approach suitable for your patio, path or driveway.',
    hero: 7,
    gallery: [22],
    reviews: ['rebecca'],
    sections: [
      {
        title: 'Match the cleaning to the surface',
        text: 'Tell Kelvin what the area is made from and what needs cleaning. Stone, concrete and block paving can need different handling. The condition of the surface and joints matters when deciding on the method.',
      },
      {
        title: 'Patios, paths and paved areas',
        text: 'Send a wider photograph showing the area, followed by any close-up detail that helps explain the problem. An approximate size is useful when discussing a quote. The images show jetwashing in action and a paved courtyard.',
      },
      {
        title: 'Access, water and drainage',
        text: 'Mention access through the property, any outdoor tap and where water normally drains. Moveable furniture, plant pots and adjoining surfaces should be considered before work starts. Kelvin can confirm what preparation is needed.',
      },
      {
        title: 'Agree what the clean includes',
        text: 'Ask which surfaces and edges are included and whether any further treatment or work to joints is being proposed. A clear scope makes it easier to compare the quote with the result you want.',
      },
    ],
    faq: [
      {
        q: 'Can you quote from photos?',
        a: 'Photos and an approximate area help start the discussion. Kelvin can confirm whether a visit is needed before the price is agreed.',
      },
      {
        q: 'What do you need to know about access?',
        a: 'Mention any narrow passage, steps, outdoor water supply and where the area drains. These details help plan the work.',
      },
    ],
  },
};
