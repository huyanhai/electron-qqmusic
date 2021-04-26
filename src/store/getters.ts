import { State, Song } from "../types/playing";
export default {
  playing: (state: State): Song => state.playing,
};
