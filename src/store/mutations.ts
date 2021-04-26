import { Song, State } from "../types/playing";
export default {
  SET_PLAYING: (state: State, data: Song): void => {
    state.playing = data;
  },
};
