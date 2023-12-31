export default {
    getUserId(state){
        return state.id
    },
    getUserEmail(state){
        return state.email
    },
    getUserPincode(state){
        return state.address.pincode
    },
    getUserRole(state){
        return state.role
    },
    getUser(state){
        return {
            id: state.id,
            email : state.email,
            role: state.role,
            name : state.name,
            address: state.address
        }
    },

}