<template>
    <div class="col-sm-6 col-md-4 col-lg-4">

        <!--        <div class="jumbotron">-->
        <!--            <h1 class="display-4">Hello, world!</h1>-->
        <!--            <div class="pull-left">-->
        <!--                <input-->
        <!--                        type="number"-->
        <!--                        class="form-control"-->
        <!--                        placeholder="Quantity">-->
        <!--            </div>-->
        <!--            <div class="pull-right">-->
        <!--                <button class="btn btn-success">BUY</button>-->
        <!--            </div>-->
        <!--\        </div>-->

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
                            v-model="quantity">
                    <div class="input-group-append">
                        <button class="btn btn-success">BUY</button>
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
        }
    }
</script>

<style>

</style>
