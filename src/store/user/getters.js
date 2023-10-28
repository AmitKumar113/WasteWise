export default {
    getUserId(state){
        return state.id
    },
    getUserEmail(state){
        return state.email
    },
    getUser(state){
        return {
            email : state.email,
            role: state.role
        }
    },

}