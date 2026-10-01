/* eslint-disable nextjs/no-img-element -- Original review screenshots and supplied platform mark are served unchanged. */
import Link from 'next/link';
import { google, mybuilder } from '@/lib/site';

type ReviewSource = 'Google' | 'MyBuilder' | 'Bark';

export function ReviewSourceLogo({ source }: { source: ReviewSource }) {
  if (source === 'Google') {
    return (
      <span className="review-source-logo google-logo" aria-label="Google">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844c-.209 1.125-.843 2.079-1.797 2.716v2.258h2.909c1.702-1.567 2.684-3.875 2.684-6.614Z"
          />
          <path
            fill="#34A853"
            d="M9 18c2.43 0 4.468-.806 5.956-2.181l-2.909-2.258c-.806.54-1.835.859-3.047.859-2.344 0-4.328-1.585-5.037-3.714H.956v2.332A8.999 8.999 0 0 0 9 18Z"
          />
          <path
            fill="#FBBC05"
            d="M3.963 10.706A5.41 5.41 0 0 1 3.682 9c0-.592.101-1.168.281-1.706V4.962H.956A8.998 8.998 0 0 0 0 9c0 1.452.347 2.827.956 4.038l3.007-2.332Z"
          />
          <path
            fill="#EA4335"
            d="M9 3.58c1.321 0 2.507.454 3.44 1.345l2.582-2.582C13.463.892 11.425 0 9 0A8.999 8.999 0 0 0 .956 4.962l3.007 2.332C4.672 5.165 6.656 3.58 9 3.58Z"
          />
        </svg>
      </span>
    );
  }

  if (source === 'MyBuilder') {
    return (
      <span
        className="review-source-logo mybuilder-logo"
        aria-label="MyBuilder"
      >
        <img
          src="/reviews/mybuilder-logo-transparent.png"
          className="mybuilder-logo-light"
          alt=""
          aria-hidden="true"
        />
        <img
          src="/reviews/mybuilder-logo-transparent-dark.png"
          className="mybuilder-logo-dark"
          alt=""
          aria-hidden="true"
        />
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
