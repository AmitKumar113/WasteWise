export default {
    setInitiated(state, payload){
        state.initiated = payload;
    },
    setPicked(state, payload){
        state.picked = payload;
    },
    setRecycled(state, payload){
        state.recycled = payload;
    }
}