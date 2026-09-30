'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { bark, reviews } from '@/lib/site';

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
        <span className="google-word" aria-hidden="true">
          Google
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

function GoldStars() {
  return (
    <span className="carousel-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

export function ReviewCarousel({ ids }: { ids: string[] }) {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const items = ids
    .map((id) => reviews.find((review) => review.id === id))
    .filter((review) => review !== undefined);

  return (
    <div className="review-carousel">
      <div className="review-carousel-viewport" ref={viewportRef}>
        <div className="review-carousel-track">
          {items.map((review) => {
            const source = (review.sourceName || 'Bark') as ReviewSource;
            return (
              <div className="review-slide" key={review.id}>
                <article className="review">
                  <div className="review-card-head">
                    <ReviewSourceLogo source={source} />
                    {source !== 'Bark' && <GoldStars />}
                  </div>
                  <span className="review-topic">{review.topic}</span>
                  <p>“{review.quote}”</p>
                  <div className="review-card-foot">
                    <strong>{review.name}</strong>
                    <Link
                      href={review.source || bark}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read on {source} ↗
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
      <div className="review-carousel-controls">
        <span>
          {selectedIndex + 1} / {items.length}
        </span>
        <div>
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous review"
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next review"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
