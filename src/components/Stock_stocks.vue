<template>
    <div class="col-sm-6 col-md-4 col-lg-4">
        <div class="panel">
            <div class="panel-heading">
                <h4 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h4>
            </div>
            <div class="panel body">


                <div class="input-group mb-3">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                    >
                    <div class="input-group-append">
                        <button
                                class="btn btn-success"
                                @click="buyStock"
                                :disabled="checkFunds || quantity <= 0 || Number.isSafeInteger(quantity)"
                        >{{ checkFunds ? 'Get more money' : 'BUY'}}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stock_stocks",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
              return this.$store.getters.funds;
            },
            checkFunds() {
                return this.quantity * this.stock.price > this.funds
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockID: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>
