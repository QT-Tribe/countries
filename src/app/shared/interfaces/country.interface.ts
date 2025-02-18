export interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
}
