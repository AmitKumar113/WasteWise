import { computed, ref } from 'vue'

export default function useSearch(items = []){
    const searchText = ref('')

    console.log(items)
    console.log('useSearch' + searchText.value)

    function setSearchText(input){
        searchText.value = input;
    }

    const filteredItems = computed(function(){
        const products = items.filter(item => item.title.includes(searchText.value))   
        return products
    }) 
    
    console.log(filteredItems.value)
    return {
        searchText,
        filteredItems,
        setSearchText
    }
}