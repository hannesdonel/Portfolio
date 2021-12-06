interface Props {
  elementID: string,
}

interface Services {
  fadeOnScroll(): void,
  isInViewport(): boolean,
}

export { Props, Services };
