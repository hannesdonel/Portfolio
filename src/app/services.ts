import { Props, Services } from './data-types';

const services = (props: Props): Services => {
  const { elementID } = props;

  const fadeOnScroll = (): void => {
    window.addEventListener('scroll', (): void => {
      const element = document.getElementById(elementID)!;
      const elementInfo = element!.getBoundingClientRect();
      const rectangleHeight = elementInfo.height;
      const rectangleTop = window.scrollY;
      const opacityPercent = ((rectangleTop * -1 - rectangleHeight) / rectangleHeight) + 2;

      element.style.opacity = opacityPercent.toString();
    });
  };

  const getScrollPercentage = (): number => {
    const element = document.getElementById(elementID)!;
    const elementInfo = element!.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const rectangleHeight = elementInfo.height - windowHeight;
    const rectangleTop = elementInfo.top;

    return rectangleTop > 0
      ? 0
      : Math.abs(rectangleTop) / (rectangleHeight / 100);
  };

  const isInViewport = (): boolean => {
    const element = document.getElementById(elementID)!;
    const rect = element.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight / 3)
      && rect.bottom > (window.innerHeight / 3)
    );
  };

  return {
    fadeOnScroll,
    getScrollPercentage,
    isInViewport,
  };
};

export default services;
