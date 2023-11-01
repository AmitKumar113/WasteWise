export default {
    async fetchPinWiseWasteList(context, payload){
        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/ewaste/${payload.pincode}.json`,{
            method: 'GET'
        })

        const items = await response.json();
        
        const initiated =[];
        const picked =[];
        const recycled =[];

        console.log('pincode: ' + payload.pincode)
        // console.log('items')
        // console.log(items)
        for(const key in items){
                if(items[key].status === 'INITIATED') initiated.push({...items[key], id: key});
                else if(items[key].status === 'PICKED') picked.push({...items[key], id: key});
                else if(items[key].status === 'RECYCLED') recycled.push({...items[key], id: key});
        }

            context.commit('setRecyclerInitiated', initiated)
            context.commit('setRecyclerPicked', picked)
            context.commit('setRecyclerRecycled', recycled)
    
            // console.log('initiated')
            // console.log(initiated)

    },

    async wasteMoveup(context, payload){
        //payload : { id, pinocode, status}
        if(payload.status === 'RECYCLED') return;
        const nextStatus = payload.status==='INITIATED'?'PICKED':'RECYCLED'

        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/ewaste/${payload.pincode}/${payload.id}/status.json`,{
            method: 'PUT',
            body : JSON.stringify(nextStatus)
        })

        if(!response.ok){
            console.log('error')
            console.log(response)
            //..
        }

        context.dispatch('fetchPinWiseWasteList', { pincode: payload.pincode})

    }
}