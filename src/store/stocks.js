import stocks_data from "../data/stocks_data";

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCKS'(state) {

    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks_data)
    },
    randStocks: ({commit}) => {
        commit('RND_STOCKS')
    }
};

const getters = {
    stocks: state => {
        return state.stocks
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
