/* eslint-disable nextjs/no-img-element -- Original review screenshots and supplied platform mark are served unchanged. */
import Link from 'next/link';
import { google, mybuilder } from '@/lib/site';

type ReviewSource = 'Google' | 'MyBuilder' | 'Bark';

export function ReviewSourceLogo({ source }: { source: ReviewSource }) {
  if (source === 'Google') {
    return (
      <span className="review-source-logo google-logo" aria-label="Google">
        <span aria-hidden="true">
          <b>G</b>
          <b>o</b>
          <b>o</b>
          <b>g</b>
          <b>l</b>
          <b>e</b>
        </span>
      </span>
    );
  }

  if (source === 'MyBuilder') {
    return (
      <span
        className="review-source-logo mybuilder-logo"
        aria-label="MyBuilder"
      >
        <img src="/reviews/mybuilder-logo.png" alt="" aria-hidden="true" />
        <span aria-hidden="true">MyBuilder</span>
      </span>
    );
  }

  return (
    <span className="review-source-logo bark-logo" aria-label="Bark">
      <span aria-hidden="true">bark</span>
    </span>
  );
}

const reviewScreenshots = [
  {
    src: '/reviews/google-nigel-hegarty.png',
    alt: 'Five-star Google review from Nigel Hegarty for a full reroof',
    href: google,
  },
  {
    src: '/reviews/mybuilder-carl-burnley.png',
    alt: 'Five-star MyBuilder review from Carl in Burnley for leaking gutters',
    href: mybuilder,
  },
  {
    src: '/reviews/google-jamie-loxton.png',
    alt: 'Five-star Google review from Jamie Loxton for gutter repairs',
    href: google,
  },
  {
    src: '/reviews/mybuilder-lucy-higham.png',
    alt: 'Five-star MyBuilder review from Lucy Higham for a leaking chimney',
    href: mybuilder,
  },
  {
    src: '/reviews/google-hamid-munir.png',
    alt: 'Five-star Google review from Hamid Munir for an emergency roof leak',
    href: google,
  },
  {
    src: '/reviews/mybuilder-charlotte-burnley.png',
    alt: 'Five-star MyBuilder review from Charlotte in Burnley for a loose roof tile',
    href: mybuilder,
  },
  {
    src: '/reviews/google-dominic-gregory.png',
    alt: 'Five-star Google review from Dominic Gregory for professional building work',
    href: google,
  },
  {
    src: '/reviews/mybuilder-michael-sam.png',
    alt: 'MyBuilder reviews from Michael in Bradford and Sam in Clitheroe',
    href: mybuilder,
  },
  {
    src: '/reviews/google-joe-patchell.png',
    alt: 'Five-star Google review from Joe Patchell for leaking gutter repairs',
    href: google,
  },
];

export function ReviewCarousel({ ids: _ids }: { ids: string[] }) {
  const slides = [...reviewScreenshots, ...reviewScreenshots];

  return (
    <div
      className="review-marquee"
      aria-label="Verified customer review screenshots"
    >
      <div className="review-marquee-track">
        {slides.map((review, index) => (
          <Link
            className="review-screenshot"
            href={review.href}
            target="_blank"
            rel="noreferrer"
            key={`${review.src}-${index}`}
            aria-hidden={index >= reviewScreenshots.length ? true : undefined}
            tabIndex={index >= reviewScreenshots.length ? -1 : undefined}
          >
            <img
              src={review.src}
              alt={index < reviewScreenshots.length ? review.alt : ''}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
