
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

        context.commit('loadProducts', products)
    },
    //  async addWaste(file){
    //      console.log('add-waste');
        //  const res = await fetch(`https://api.cloudinary.com/v1_1/dxwsqa8dh/upload`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         file: file,
        //         // cloud_name: 'dxwsqa8dh',
        //         upload_preset: 'ii15xbmg',
        //         public_id: 'wastewise'
        //                 })
        //  })

    //      const data = await res.json()
    //      console.log(data)

    //  }
}