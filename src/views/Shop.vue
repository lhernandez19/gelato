<template>
    <div>
        <h1>This is the shop page!</h1>
        <my-inventory></my-inventory>
        
    </div>
</template>

<script>
import MyInventory from '@/components/MyInventory'
export default {
    name: 'Shop',
    components:{
        MyInventory
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>