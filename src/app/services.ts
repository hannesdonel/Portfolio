import { Props, Services } from './data-types';

const services = (props: Props): Services => {
  const { elementID } = props;

  const fadeOnScroll = (): void => {
    window.addEventListener('scroll', (): void => {
      const element = document.getElementById(elementID)!;
      const elementInfo = element!.getBoundingClientRect();
      const rectangleHeight = elementInfo.height;
      const rectangleTop = -window.scrollY; // or elementInfo.top;
      const opacityPercent = ((rectangleTop - rectangleHeight) / rectangleHeight) + 2;

      element.style.opacity = opacityPercent.toString();
    });
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
    isInViewport,
  };
};

export default services;
