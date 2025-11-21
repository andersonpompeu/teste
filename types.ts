export enum Framework {
  REACT = 'REACT',
  ANGULAR = 'ANGULAR',
  VUE = 'VUE',
  NEXT = 'NEXT',
  NUXT = 'NUXT'
}

export interface FrameworkOption {
  id: Framework;
  name: string;
  color: string;
  icon: string;
}

export interface GeminiError {
  message: string;
}
