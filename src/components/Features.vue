<template>
    <div>
        <b-container fluid id="features">
            <b-row>
                <b-col cols="3">
                    <h4>Free Shipping</h4>
                    <p>Above $25</p>
                </b-col>
                <b-col cols="3">
                    <h4>Certified Organic</h4>
                    <p>Guarantee</p>
                </b-col>
                <b-col cols="3">
                    <h4>Buy More, Save More</h4>
                    <p>Low Prices</p>
                </b-col>
                <b-col cols="3">
                    <h4>Catering</h4>
                    <p>Best in Town</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Features',

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
    #features{
        padding: 40px 0%;
        margin: 1% 0%;
        border: 1px solid grey;
        background: rgb(235, 235, 235);
        text-align: center;
    }

</style>