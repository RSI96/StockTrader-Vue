<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Stock trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/portfolio" class="nav-link"><a>Portfolio</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/stocks" class="nav-link"><a>Stocks</a></router-link>
                </li>

                <li
                        class="nav-item dropdown"
                        :class="{ open: isDropdownOpen }"
                        @click="isDropdownOpen != isDropdownOpen">
                    <a
                            class="nav-link dropdown-toggle"
                            href="#" id="navbarDropdown"
                            role="button" data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">Save and load</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Save</a>
                        <a class="dropdown-item" href="#">Load</a>
                    </div>
                </li>

            </ul>
            <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

            <form class="form-inline my-2 my-lg-0">
                <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="button"
                        @click="endDay"
                >End day
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Header",
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions([
                'randStocks'
            ]),
            endDay() {
                this.randStocks();
            }
        }
    }
</script>

<style scoped>
    .navbar-right {
        margin-right: 10px;
    }
</style>
