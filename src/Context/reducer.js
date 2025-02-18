export const initialState = {
    user: null,
    playLists: [],
    playing: null,
    id: null,
    items: [],
    albums: null,
    tracks: [],
    collection: null,
    // token: 'BQCYwJEC_IyUghOnY-8z9_pzi-hq_giHyVWfqFOKUr2INWZF_8oq6nHr2Fs3fnW1erWwTYLU3cUBidiLk5TZcbFt2WhQ2YuAgAsQQm54nKqJ5-KhWHFUxV1-_9khanMhOlUy_P1vaR1Xpm-2RoDjkUDknAFMyGbcG88GFLWnpqMFmq55pIe0R68R2E8N3PL97eD2yenojRuRJ5FCq-znb_ndUIFETM2WvbRA5l8gn2fqA4JgWCAIELWdes0r-XLP91g21Iett3dTe0oKh5r4GjyHaAfS7Y7-HtQBuRLBZyZ8HkM88XiUKLVDbwh0ZzQ5XIHZr1lg',
};

const reducer = (state, action) => {
    // console.log("Reducer Action: ", action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playLists: action.playLists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case 'SET_PLAYLIST_ID':
            return {
                ...state,
                id: action.id,
            };
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.items,
            };
        case 'SET_TRACKS':
            return {
                ...state,
                tracks: action.tracks,
            };
        case 'SET_COLLECTION':
            return {
                ...state,
                collection: action.collection,
            };
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };
        case 'SET_ALBUMS':
            return {
                ...state,
                albums: action.albums,
            };
        default:
            return state;
    }
};
export default reducer;
