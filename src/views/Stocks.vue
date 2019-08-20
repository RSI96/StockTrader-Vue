<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock_stocks from "../components/Stock_stocks";

    export default {
        name: "Stocks",
        components: {
            appStock: Stock_stocks
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>
