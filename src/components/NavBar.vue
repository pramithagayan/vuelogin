<template>
    <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
    >
        <v-app-bar-nav-icon @click.stop="menuToggle = !menuToggle"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-img
            max-width="150"
            src="https://www.mrpoolal.com/assets/theme/img/mrpool/logo.png"
            alt="Mr. Pool"
        ></v-img>
        <v-spacer></v-spacer>
        <v-btn icon to="/login">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({

    }),
    computed: {
        menuToggle: {
            get() {
                return this.$store.state.menu.show_menu
            },
            set(newValue) {
                this.$store.commit('SET_MENU', newValue)
            }
        },
    },
}
</script>