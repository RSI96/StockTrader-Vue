<template>
    <div class="col-sm-6 col-md-4 col-lg-4">
        <div class="panel">
            <div class="panel-heading">
                <h4 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
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
                                class="btn btn-dark"
                                @click="selectAll"
                                :disabled="checkIfAll"
                        >ALL
                        </button>
                    </div>
                    <div class="input-group-append">
                        <button
                                class="btn btn-dark"
                                @click="sellStock"
                                :disabled="checkQuantity || quantity <= 0"
                        >{{ checkQuantity ? 'not enough' : 'SELL' }}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Stock_stocks",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            checkQuantity() {
                return this.quantity > this.stock.quantity;
            },
            checkIfAll() {
                return this.quantity === this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeDellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockID: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.placeDellOrder(order);
                this.quantity = 0;
            },
            selectAll() {
                this.quantity = this.stock.quantity;
            }
        }
    }
</script>

<style scoped>
    .panel {
        background-color: #dddddd;
    }
</style>
