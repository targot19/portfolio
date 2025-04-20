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
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle';

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { t } = useTranslation();
  const recommendationsList = t("recommendationsList", { returnObjects: true }).slice(0); //returns array of projects (only first n)

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
        <SectionTitle>{t("navigation.recommendations")}</SectionTitle>
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
            {recommendationsList.map((recommendationsList, index) => (
                <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                    <p>{recommendationsList.quote}</p>
                    </div>
                    <div className="embla__slide__employer">
                    <p>- {recommendationsList.employer}</p>
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