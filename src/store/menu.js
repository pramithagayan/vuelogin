export default {
    state: {
        show_menu: false,
    },
    getters: {
        menuStatus: state => {
            return state.show_menu
        }
    },
    mutations: {
        SET_MENU: (state,payload) => {
            state.show_menu = payload
        },
    },
    actions: {

    }
}