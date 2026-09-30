import assets from './assets.json';
export const phone = '07568 425666';
export const tel = 'tel:+447568425666';
export const whatsapp = 'https://wa.me/447568425666';
export const email = 'info@aaadevelopment.co.uk';
export const bark = 'https://www.bark.com/en/gb/b/aaa-development/jQAA9/';
export const google = 'https://www.google.com/maps?cid=7248746812849126175';
export const towns = [
  'Padiham',
  'Burnley',
  'Accrington',
  'Blackburn',
  'Nelson',
  'Colne',
];
export function photo(id: number) {
  const item = assets.find((a) => a.id === id);
  if (!item) throw new Error('Unknown image ' + id);
  return item;
}
export const services = [
  {
    slug: 'emergency-roof-repairs',
    name: 'Emergency roof repairs',
    problem: 'Water coming through the ceiling?',
    image: 36,
    group: 'Roofing',
  },
  {
    slug: 'roof-repairs',
    name: 'Roof repairs',
    problem: 'Slipped tiles or a leak that keeps returning?',
    image: 20,
    group: 'Roofing',
  },
  {
    slug: 'flat-roofing',
    name: 'Flat roofing',
    problem: 'A flat roof that needs attention?',
    image: 2,
    group: 'Roofing',
  },
  {
    slug: 'new-roofs',
    name: 'New roofs & reroofing',
    problem: 'Time for a new roof?',
    image: 1,
    group: 'Roofing',
  },
  {
    slug: 'chimney-repairs',
    name: 'Chimney repairs & leadwork',
    problem: 'Trouble around your chimney?',
    image: 26,
    group: 'Roofing',
  },
  {
    slug: 'guttering',
    name: 'Guttering',
    problem: 'Water running down the outside wall?',
    image: 12,
    group: 'Roofline',
  },
  {
    slug: 'fascias-soffits',
    name: 'Fascias & soffits',
    problem: 'Roofline looking tired or damaged?',
    image: 15,
    group: 'Roofline',
  },
  {
    slug: 'plastering',
    name: 'Plastering',
    problem: 'Walls ready for a fresh start?',
    image: 30,
    group: 'Property',
  },
  {
    slug: 'rendering',
    name: 'Rendering',
    problem: 'An exterior that needs a new finish?',
    image: 10,
    group: 'Property',
  },
  {
    slug: 'jetwashing',
    name: 'Jetwashing',
    problem: 'Paving in need of a proper clean?',
    image: 7,
    group: 'Property',
  },
];
export const mybuilder =
  'https://www.mybuilder.com/profile/aaa-development/reviews';
export type Review = {
  id: string;
  name: string;
  date: string;
  topic: string;
  summary: string;
  quote?: string;
  source?: string;
  sourceName?: string;
};
export const reviews: Review[] = [
  {
    id: 'ali',
    name: 'Ali, Burnley',
    date: '19 December 2025',
    topic: 'Pitched roof leak repair',
    summary:
      'Ali describes an efficient roof repair agreed and completed within a few days.',
    quote: 'The whole process was very efficient and professional.',
    source: mybuilder,
    sourceName: 'MyBuilder',
  },
  {
    id: 'carl',
    name: 'Carl, Burnley',
    date: '30 May 2025',
    topic: 'Leaking gutters',
    summary:
      'Carl reports that Kelvin responded quickly and repaired leaking gutters on the same day.',
    quote: 'Very professional. Would definitely use again. Nice guy too.',
    source: mybuilder,
    sourceName: 'MyBuilder',
  },
  {
    id: 'lucy',
    name: 'Lucy Higham, Chorley',
    date: '6 January 2025',
    topic: 'Leaking chimney',
    summary:
      'Lucy praises the clear quote, punctual team and photographs sent after the chimney work.',
    quote: 'Communication was great from the start',
    source: mybuilder,
    sourceName: 'MyBuilder',
  },
  {
    id: 'emma',
    name: 'Emma, Accrington',
    date: '28 August 2024',
    topic: 'Roofing & guttering',
    summary:
      'Emma describes repeat work on rental properties, with reliable communication and photographs before and after repairs.',
    source: mybuilder,
    sourceName: 'MyBuilder',
  },
  {
    id: 'charlotte',
    name: 'Charlotte, Burnley',
    date: '1 September 2024',
    topic: 'Loose roof tile',
    summary:
      'Charlotte says AAA fixed loose tiles and also cleared and repaired the guttering.',
    source: mybuilder,
    sourceName: 'MyBuilder',
  },
  {
    id: 'jim',
    name: 'Jim, Accrington',
    date: '19 May 2025',
    topic: 'Roof vent enquiry',
    summary:
      'Jim praises the communication, prompt visit and straightforward approach to the job.',
    source: mybuilder,
    sourceName: 'MyBuilder',
  },
  {
    id: 'maxine',
    name: 'Maxine Garrett',
    date: '19 January 2026',
    topic: 'Roof repairs',
    summary:
      'Maxine describes a prompt leak repair, with photographs explaining the problem and a tidy finish.',
  },
  {
    id: 'nigel',
    name: 'Nigel Hegarty',
    date: '12 July 2026',
    topic: 'Reroofing',
    summary:
      'Nigel chose AAA after comparing roofers and praises the speed, workmanship and competitive quote.',
  },
  {
    id: 'jamie',
    name: 'Jamie Loxton',
    date: '20 May 2026',
    topic: 'Guttering',
    summary:
      'Jamie reports a quick response to leaking gutters, clear advice and a clean site afterwards.',
    source: google,
    sourceName: 'Google',
  },
  {
    id: 'phoenix',
    name: 'Phoenix Walton',
    date: '16 May 2026',
    topic: 'Roofing & plastering',
    summary:
      'Phoenix describes repeat roofing and plastering work, with clear explanations and consistently good results.',
    source: google,
    sourceName: 'Google',
  },
  {
    id: 'caroline',
    name: 'Caroline Connoll',
    date: '14 July 2025',
    topic: 'Roofing, plastering & rendering',
    summary:
      'Caroline recommends Kelvin following years of roofing, plastering and rendering work for her family.',
  },
  {
    id: 'liz',
    name: 'Liz Wilson',
    date: '12 November 2025',
    topic: 'Flat roofing',
    summary:
      'Liz says an EPDM repair stopped her garden cabin roof leaking through subsequent stormy weather.',
  },
  {
    id: 'barbara',
    name: 'Barbara Ball',
    date: '11 May 2026',
    topic: 'Leadwork',
    summary:
      'Barbara praises the response and lead flashing work around her bay window.',
  },
  {
    id: 'rebecca',
    name: 'Rebecca Johnson',
    date: '21 May 2026',
    topic: 'Customer service',
    summary: 'Rebecca recommends AAA for customer service and workmanship.',
  },
];
