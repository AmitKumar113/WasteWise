import store from "../../store/index";

export default {
    async addProduct(_, payload){

        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/products.json`, {
            method: 'POST',
            body: JSON.stringify({
                ...payload, 
                user_id: 123,
                image_url: 'none'
            })
        })

        if(!response.ok){
            //..
        }

        const data = await response.json();

        console.log(data)
        // context.commit('loadProducts')
    },
    async loadProducts(context){

        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/products.json`, {
            method: 'GET',
        })

        if(!response.ok){
            const error = new Error('SOmething went wrong! Check your internet Connection');
            throw error;
        }

        const data = await response.json();
        const products = [];
        for(const key in data){
            const item = {
                id: key,
                title: data[key].title,
                price: data[key].price,
                type: data[key].type,
                image_url: data[key].image_url,
                description: data[key].description,
                user_id: data[key].user_id,
            }

            products.push(item)
        }

        await context.commit('setProducts', products)
    },

    async filterProducts(context, payload){
        let filteredItems = [];

        const allItems = store.getters.getAllProducts;
        filteredItems = allItems.filter(item => item.title.includes(payload))
        
        console.log(allItems)
        console.log('filteredItems')
        console.log(filteredItems)
        context.commit('setProducts', filteredItems)
    }
}