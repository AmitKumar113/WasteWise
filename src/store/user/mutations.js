export default {
    setUser(state, payload){
        state.id = payload.id ,
        state.email = payload.email,
        state.name = payload.name,
        state.role = payload.role,
        state.address = payload.address
    }

}