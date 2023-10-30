import store from '../../store/index'

export default {
    async addWaste(context, payload){
        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/ewaste/${store.getters.getUserPincode}.json`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })

        if(!response.ok){
            const error = new Error('Error Occured!')
            throw error
        }

        context.dispatch('fetchUserWasteList', {user: store.getters.getUserId})
    },


    async fetchUserWasteList(context, payload){
        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/ewaste/${store.getters.getUserPincode}.json`,{
            method: 'GET'
        })

        const items = await response.json();
        
        const initiated =[];
        const picked =[];
        const recycled =[];

        // console.log(items)
        // console.log(payload.user)

        if(payload.user){
            for(const key in items){
                if(items[key].user === payload.user ){
                    if(items[key].status === 'INITIATED') initiated.push(items[key]);
                    else if(items[key].status === 'PICKED') picked.push(items[key]);
                    else if(items[key].status === 'RECYCLED') recycled.push(items[key]);
                }
            }
        }

        context.commit('setInitiated', initiated)
        context.commit('setPicked', picked)
        context.commit('setRecycled', recycled)
    }
}