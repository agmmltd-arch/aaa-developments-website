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
