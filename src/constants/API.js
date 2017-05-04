const HOST = process.env.NODE_ENV === 'production' ? 'https://netease-cloud-music-api.herokuapp.com' : 'http://localhost:3210';
export const API_TOP_PLAY_LIST = `${HOST}/top_playlist`;