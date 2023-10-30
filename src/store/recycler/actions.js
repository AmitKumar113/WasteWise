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
        console.log('items')
        console.log(items)
        for(const key in items){
                if(items[key].status === 'INITIATED') initiated.push(items[key]);
                else if(items[key].status === 'PICKED') picked.push(items[key]);
                else if(items[key].status === 'RECYCLED') recycled.push(items[key]);
        }
        console.log('initiated caled')
        console.log(initiated)

            context.commit('setRecyclerInitiated', initiated)
            context.commit('setRecyclerPicked', picked)
            context.commit('setRecyclerRecycled', recycled)
    
            // console.log('initiated')
            // console.log(initiated)

    }
}