<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'; //innt sposob na dostanie sie do stora
    import Stock_portfolio from "../components/Stock_portfolio";

    export default {
        name: "Portfolio",
        computed: {
            ...mapGetters({
                stocks:
                    'stockPortfolio'
            })
        },
        components: {
            appStock: Stock_portfolio
        }
    }
</script>

<style scoped>

</style>


