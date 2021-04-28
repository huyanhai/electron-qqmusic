import { Song, State } from "../types/playing";
export default {
  SET_PLAYING: (state: State, data: Song): void => {
    state.playing = data;
  },
  SET_PLAY_LIST: (state: State, data: Song): void => {
    if (!state.playList.includes(data)) state.playList.push(data);
  },
};
