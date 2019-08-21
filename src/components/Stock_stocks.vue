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
                            :max="maxQuantity"
                            v-model.number="quantity"
                    >
                    <div class="input-group-append">
                        <button
                                class="btn btn-success"
                                @click="selectMax"
                                :disabled="isMaxQuantity"
                        >MAX
                        </button>
                    </div>
                    <div class="input-group-append">
                        <button
                                class="btn btn-success"
                                @click="buyStock"
                                :disabled="checkFunds || quantity <= 0"
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
            maxQuantity() {
                return Math.floor(this.funds / this.stock.price);
            },
            isMaxQuantity() {
                return this.quantity >= this.maxQuantity;
            },
            checkFunds() {
                return this.quantity * this.stock.price > this.funds
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockID: this.stock.id,
                    quantity: this.quantity,
                    stockPrice: this.stock.price

                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            },
            selectMax() {
                this.quantity = Math.floor(this.funds/this.stock.price);
            }
        }
    }
</script>

<style scoped>
    .panel {
        background-color: #dddddd;
    }
</style>
