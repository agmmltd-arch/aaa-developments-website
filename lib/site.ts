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
    image: 37,
    group: 'Roofing',
  },
  {
    slug: 'guttering',
    name: 'Guttering',
    problem: 'Water running down the outside wall?',
    image: 38,
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
  quote: string;
  source?: string;
  sourceName?: string;
};
export const reviews: Review[] = [
  {
    id: 'ali',
    name: 'Ali, Burnley',
    date: '19 December 2025',
    topic: 'Pitched roof leak repair',
    source: mybuilder,
    sourceName: 'MyBuilder',
    quote: 'very efficient and professional.',
  },
  {
    id: 'carl',
    name: 'Carl, Burnley',
    date: '30 May 2025',
    topic: 'Leaking gutters',
    source: mybuilder,
    sourceName: 'MyBuilder',
    quote: 'Would definitely use again.',
  },
  {
    id: 'lucy',
    name: 'Lucy Higham, Chorley',
    date: '6 January 2025',
    topic: 'Leaking chimney',
    source: mybuilder,
    sourceName: 'MyBuilder',
    quote: 'Communication was great from the start',
  },
  {
    id: 'emma',
    name: 'Emma, Accrington',
    date: '28 August 2024',
    topic: 'Roofing & guttering',
    source: mybuilder,
    sourceName: 'MyBuilder',
    quote: 'extremely reliable',
  },
  {
    id: 'charlotte',
    name: 'Charlotte, Burnley',
    date: '1 September 2024',
    topic: 'Loose roof tile',
    source: mybuilder,
    sourceName: 'MyBuilder',
    quote: 'Fab job, thanks again!',
  },
  {
    id: 'jim',
    name: 'Jim, Accrington',
    date: '19 May 2025',
    topic: 'Roof vent enquiry',
    source: mybuilder,
    sourceName: 'MyBuilder',
    quote: 'Kept in contact',
  },
  {
    id: 'maxine',
    name: 'Maxine Garrett',
    date: '19 January 2026',
    topic: 'Roof repairs',
    source: bark,
    sourceName: 'Bark',
    quote: 'Clean, tidy, reliable and honest.',
  },
  {
    id: 'nigel',
    name: 'Nigel Hegarty',
    date: '12 July 2026',
    topic: 'Reroofing',
    source: bark,
    sourceName: 'Bark',
    quote: 'work was excellent and fast',
  },
  {
    id: 'jamie',
    name: 'Jamie Loxton',
    date: '20 May 2026',
    topic: 'Guttering',
    source: google,
    sourceName: 'Google',
    quote: 'without trying to upsell me on unnecessary work.',
  },
  {
    id: 'phoenix',
    name: 'Phoenix Walton',
    date: '16 May 2026',
    topic: 'Roofing & plastering',
    source: google,
    sourceName: 'Google',
    quote: 'he was polite, well-mannered, and professional.',
  },
  {
    id: 'caroline',
    name: 'Caroline Connoll',
    date: '14 July 2025',
    topic: 'Roofing, plastering & rendering',
    source: bark,
    sourceName: 'Bark',
    quote: 'very professional',
  },
  {
    id: 'liz',
    name: 'Liz Wilson',
    date: '12 November 2025',
    topic: 'Flat roofing',
    source: bark,
    sourceName: 'Bark',
    quote: 'Lads did a great job.',
  },
  {
    id: 'barbara',
    name: 'Barbara Ball',
    date: '11 May 2026',
    topic: 'Leadwork',
    source: bark,
    sourceName: 'Bark',
    quote: 'fantastic job',
  },
  {
    id: 'rebecca',
    name: 'Rebecca Johnson',
    date: '21 May 2026',
    topic: 'Customer service',
    source: bark,
    sourceName: 'Bark',
    quote: 'great customer service and quality workmanship',
  },
];
