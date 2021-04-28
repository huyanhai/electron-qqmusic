export interface Song {
  name: string;
  url: string;
  post: string;
  singer: string;
}
export interface State {
  playing: Song;
  playList: Song[];
}
