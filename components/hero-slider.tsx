"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Slide } from "./hero";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./ui/icons";

const SLIDE_DURATION = 6000;
const FADE_DURATION = 0.85;

function SlideMedia({ slide }: { slide: Slide }) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={slide.id}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: FADE_DURATION * 1.1, ease: "easeInOut" }}
      >
        {slide.video ? (
          <video
            src={slide.video.url}
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            playsInline
            loop
            controls={false}
          />
        ) : (
          <Image
            src={slide.image.url}
            alt={slide.alt}
            fill
            priority={false}
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="container"
      >
        <h1 className="mb-2 max-w-5xl font-heading text-3xl font-extrabold leading-[1.05] tracking-normal text-white lg:text-7xl">
          {slide.title}
        </h1>

        <p className="mb-5 max-w-4xl taxt-base sm:text-lg text-white">
          {slide.description}
        </p>

        <Link
          href={slide.ctaLink}
          className={buttonVariants({ variant: "outline" })}
        >
          {slide.ctaTitle}
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

function ProgressBar({
  index,
  isActive,
  isPast,
  isPaused,
  progressKey,
  onComplete,
  onClick,
}: {
  index: number;
  isActive: boolean;
  isPast: boolean;
  isPaused: boolean;
  progressKey: number;
  onComplete: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-label={`Go to slide ${index + 1}`}
      aria-selected={isActive}
      onClick={onClick}
      className="group relative h-px flex-1 max-w-8 md:max-w-10 lg:max-w-30 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      <span className="absolute inset-0 rounded-full bg-white/30 transition-colors duration-200 group-hover:bg-white/50" />

      {isPast && <span className="absolute inset-0 rounded-full bg-white" />}

      {isActive && (
        <span
          key={progressKey}
          className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-white"
          style={{
            animationName: "hero-slider-progress",
            animationDuration: `${SLIDE_DURATION}ms`,
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            animationPlayState: isPaused ? "paused" : "running",
          }}
          onAnimationEnd={onComplete}
        />
      )}
    </button>
  );
}

function HeroSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = slides.length;

  const restartProgress = useCallback(() => {
    setProgressKey((key) => key + 1);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (!slideCount) return;

      setCurrent(index);
      restartProgress();
    },
    [restartProgress, slideCount],
  );

  const goNext = useCallback(() => {
    if (!slideCount) return;

    setCurrent((prev) => (prev + 1) % slideCount);
    restartProgress();
  }, [restartProgress, slideCount]);

  const goPrev = useCallback(() => {
    if (!slideCount) return;

    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
    restartProgress();
  }, [restartProgress, slideCount]);

  const togglePause = useCallback(() => {
    setIsPaused((paused) => !paused);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === " ") {
        event.preventDefault();
        togglePause();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, togglePause]);

  useEffect(() => {
    if (current >= slideCount) {
      setCurrent(0);
      restartProgress();
    }
  }, [current, restartProgress, slideCount]);

  if (!slideCount) return null;

  const safeCurrent = current < slideCount ? current : 0;
  const activeSlide = slides[safeCurrent];
  const PauseIcon = isPaused ? Icons.play : Icons.pause;

  return (
    <div className="absolute inset-0">
      <style>{`
        @keyframes hero-slider-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      <SlideMedia slide={activeSlide} />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.44) 55%, rgba(0,0,0,0.12) 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 py-24">
        <SlideContent slide={activeSlide} />
      </div>

      <div
        className="absolute bottom-4 z-20 w-full"
        role="tablist"
        aria-label="Slide navigation"
      >
        <div className="container flex w-full items-stretch justify-between gap-6">
          <div className="flex flex-1 items-center gap-2">
            {slides.map((slide, index) => (
              <ProgressBar
                key={slide.id}
                index={index}
                isActive={index === safeCurrent}
                isPast={index < safeCurrent}
                isPaused={isPaused}
                progressKey={progressKey}
                onComplete={goNext}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Previous slide"
              onClick={goPrev}
              className="text-white hover:bg-transparent hover:text-white"
            >
              <Icons.chevronLeft />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={isPaused}
              onClick={togglePause}
              className="text-white hover:bg-transparent hover:text-white"
            >
              <PauseIcon className={isPaused ? "fill-white" : undefined} />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Next slide"
              onClick={goNext}
              className="text-white hover:bg-transparent hover:text-white"
            >
              <Icons.chevronRight />
            </Button>
          </div>
        </div>
      </div>

      {isPaused && <span className="sr-only">Slideshow paused</span>}
    </div>
  );
}

export default HeroSlider;
