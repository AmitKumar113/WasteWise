export default {
    setRecyclerInitiated(state, payload){
        state.initiated = payload;
    },
    setRecyclerPicked(state, payload){
        state.picked = payload;
    },
    setRecyclerRecycled(state, payload){
        state.recycled = payload;
    }
}