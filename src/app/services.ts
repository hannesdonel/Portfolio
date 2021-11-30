import { Props, Services } from './data-types';

const services = (props: Props): Services => {
  const { elementID } = props;

  const fadeOnScroll = (): void => {
    window.addEventListener('scroll', (): void => {
      const element = document.getElementById(elementID)!;
      const elementInfo = element!.getBoundingClientRect();
      const rectangleHeight = elementInfo.height;
      const rectangleTop = elementInfo.top;
      const opacityPercent = ((rectangleTop - rectangleHeight) / rectangleHeight) + 2;

      element.style.opacity = opacityPercent.toString();
    });
  };

  return {
    fadeOnScroll,
  };
};

export default services;
