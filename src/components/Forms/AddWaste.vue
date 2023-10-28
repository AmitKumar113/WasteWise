<template>
  add waste form
  <base-card>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="upload-image">Upload image here: </label>
        <input type="file" id="upload-image" @change="getFile" />
      </div>
      <div>
        <label for="description">Description : </label>
        <textarea type="text" id="description" v-model="description"></textarea>
      </div>
      <button type="submit">Add</button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      image_file: null,
      image_url: null,
      description: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log('submitted')
    },
    getFile(event) {
      //         const reader = new FileReader();
      //         reader.onload = () => {
      //         console.log(reader.result);
      //     };
      //     reader.readAsDataURL(event.target.files[0]);
      //     // console.log(event)
      this.image_file = event.target.files[0];
    },
  },
};
</script>
