export default {
    setUser(state, payload){
        state.id = payload.id ,
        state.email = payload.email,
        state.role = payload.role
    }

}