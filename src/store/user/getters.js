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