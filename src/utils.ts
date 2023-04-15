export enum BackdropSize {
  W300 = "w300",
  W780 = "w780",
  W1280 = "w1280",
  Original = "original",
}

export enum LogoSize {
  W45 = "w45",
  W92 = "w92",
  W154 = "w154",
  W185 = "w185",
  W300 = "w300",
  W500 = "w500",
  Original = "original",
}

export enum PosterSize {
  W92 = "w92",
  W154 = "w154",
  W185 = "w185",
  W342 = "w342",
  W500 = "w500",
  W780 = "w780",
  Original = "original",
}

export enum ProfileSize {
  W45 = "w45",
  W185 = "w185",
  H632 = "h632",
  Original = "original",
}

export enum StillSize {
  W92 = "w92",
  W185 = "w185",
  W300 = "w300",
  Original = "original",
}

type Size = BackdropSize | StillSize | ProfileSize | LogoSize | PosterSize;

export const getImagePath = (size: Size, imagePath: string) => {
  return `https://image.tmdb.org/t/p/${size}/${imagePath}`;
};
