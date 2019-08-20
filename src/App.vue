<template>
    <div class="container">
        <app-header></app-header>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
