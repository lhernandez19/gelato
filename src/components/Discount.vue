<template>
    <div>
        <b-container fluid id="discount">
            <b-row class="justify-content-md-center" >
                <b-col cols="4">
                    <h3>Get 25% Off On Your First Purchase</h3>
                </b-col>
                <b-col cols="2">
                    <b-button pill variant="primary">Register</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Discount',

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
    #discount{
        padding: 40px 0%;
        margin: 1% 0%;
        border: 1px solid grey;
        background: rgb(235, 235, 235);
    }

</style>