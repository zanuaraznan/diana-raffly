import gsap from 'gsap';
import { useGSAP, useGSAPConfig } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { RefObject, useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CustomConfig {
    ref?: RefObject<HTMLDivElement | null>;
    dependencies?: unknown[] | useGSAPConfig;
    conditionalFn?: () => boolean;
    isRevertOnComplete?: boolean;
}

function useSplitText({
    isRevertOnComplete = true,
    ref,
    dependencies,
    conditionalFn,
}: CustomConfig = {}) {
    const innerRef = useRef<HTMLDivElement>(null);
    const containerRef = ref || innerRef;

    useGSAP(
        () => {
            if (!containerRef.current || conditionalFn?.()) return;
            SplitText.create('.split', {
                type: 'lines,words',
                mask: 'lines',
                onSplit: (split) => {
                    gsap.from(split.words, {
                        yPercent: 100,
                        autoAlpha: 0,
                        stagger: 0.05,
                        ease: 'expo.out',
                        duration: 1,
                        scrollTrigger: {
                            trigger: split.words,
                            start: 'top 100%',
                        },
                        onComplete: () => {
                            if (!isRevertOnComplete) return;
                            split.revert();
                        },
                    });
                },
            });
        },
        { scope: containerRef, ...dependencies }
    );
    return { containerRef };
}

export { useSplitText };
