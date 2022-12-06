export interface Game {
  id?: number;
  title?: string;
  thumbnail?: string;
  short_description?: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  release_date?: string;
  freetogame_profile_url?: string;
  description?: string;
  publisher?: string;
  developer?:string;
  screenshots?: [{ id: number; image: string }];
  minimum_system_requirements?: any;

}
