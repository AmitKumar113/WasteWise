import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"


export default {
    state(){
        return {
            id: null,
            // firstname: '',
            // lastname: '',
            email: '',
            role: null,
        }
    },
    getters,
    mutations,
    actions
}