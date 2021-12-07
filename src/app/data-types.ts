interface Props {
  elementID: string,
}

interface Services {
  fadeOnScroll(): void,
  getScrollPercentage(): number,
  isInViewport(): boolean,
}

interface Project {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  technologies: Array<string>,
  functionality: Array<string>,
  sampleImage: string,
  githubUrl: string,
  appUrl: string

}

export { Props, Services, Project };
