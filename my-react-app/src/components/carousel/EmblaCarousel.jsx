/** https://codesandbox.io/p/sandbox/7nky5w?file=%2Fsrc%2Fjs%2Findex.jsx%3A6%2C1-8%2C26 */

import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import SectionContainer from '../SectionContainer';

const EmblaCarousel = (props) => {
  const { slides, employer, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <SectionContainer id="recommendations">
        <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
            {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                    <p>{slide}</p>
                    </div>
                    <div className="embla__slide__employer">
                    <p>- {employer[index]}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className="embla__controls">
            <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
                <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                )}
                />
            ))}
            </div>
        </div>
        </section>
    </SectionContainer>
  )
}

export default EmblaCarousel;