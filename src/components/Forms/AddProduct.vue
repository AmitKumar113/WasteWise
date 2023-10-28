<template>
    <section>
        <base-card>
        <h3>Add Product</h3>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="title" class="label">Title</label>
                <input type="text" name="title" id="title" v-model="title"/>
            </div>
            <div class="form-control" >
                <label for="description" class="label">Description</label>
                <textarea type="text" name="description" rows="4" id="description"  v-model="description"></textarea>
            </div>
            <div class="form-control">
                <label for="price" class="label">Price</label>
                <input type="number" name="price" id="price" v-model="price"/>
            </div>
            <div class="form-control">
                <h3>Type of Product</h3>
                <input type="radio" name="product-type" value="OLD_DEVICE" id="old-devices" v-model="type"/>
                <label for="old-devices">Old Device</label>
                <input type="radio" name="product-type" value="ART_WORK" id="art-work"  v-model="type"/>
                <label for="art-work">Art Work</label>
            </div>
            <button type="submit">Add Product</button>
        </form>
        </base-card>
    </section>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            price: null,
            type: null,
            description: ''
        }
    },
    methods: {
        submitForm(){
            const product = {
                title: this.title,
                price: this.price,
                type: this.type,
                description: this.description
            }

            // console.log(product)
            this.$store.dispatch('addProduct', product)
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

.label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  /* display: block; */
  /* width: 100%; */
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>