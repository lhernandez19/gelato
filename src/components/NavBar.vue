<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Gelato</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav id="nav">
          <b-nav-item class=""><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item class=""><router-link to="/shop">Shop</router-link></b-nav-item>
          <b-nav-item class=""><router-link to="/login">Login</router-link></b-nav-item>
          <b-nav-item class=""><router-link to="/register">Register</router-link></b-nav-item>
          <b-nav-item class=""><router-link to="/checkout">Checkout</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  
</div>

</template>

<script>

export default {
    name: 'Navbar',

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
    #nav {
    padding: 30px;
    }

    #nav a {
    font-weight: bold;
    color: white;
    }

    #nav a.router-link-exact-active {
    color: #FFD933;
    }

</style>