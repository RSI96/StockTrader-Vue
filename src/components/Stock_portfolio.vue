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
                            :max="this.stock.quantity"
                            v-model.number="quantity"
                            @focus="$event.target.select()"
                    >
                    <div class="input-group-append">
                        <button
                                class="btn btn-dark"
                                @click="setMaxQuantity"
                                :disabled="selectedMaxQuantity"
                        >ALL
                        </button>
                    </div>
                    <div class="input-group-append">
                        <button
                                class="btn btn-dark"
                                @click="sellStock"
                                :disabled="canSell"
                        >{{ hasEnoughQuantity ? 'not enough' : 'SELL' }}
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
        props: {
            stock: Object
        },
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            hasEnoughQuantity() {
                return this.quantity > this.stock.quantity;
            },
            selectedMaxQuantity() {
                return this.quantity === this.stock.quantity;
            },
            isQuantityFloat() {
                return Math.floor(this.quantity) !== this.quantity;
            },
            canSell() {
                return this.hasEnoughQuantity || this.quantity <= 0 || this.isQuantityFloat
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
                };
                this.placeDellOrder(order);
                this.quantity = 0;
            },
            setMaxQuantity() {
                this.quantity = this.stock.quantity;
            }
        }
    }
</script>

<style scoped>
    .panel {
        background-color: #dddddd;
        border-radius: 5px;
    }

    .panel-title {
        text-indent: 5px;
    }
</style>
