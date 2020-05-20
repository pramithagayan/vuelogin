<template>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12" color="rgba(32, 87, 85, 0.85)">
            <v-toolbar
              color="rgba(43, 132, 132, 0.75)"
              dark
              flat
            >
              <v-spacer></v-spacer>
              <v-toolbar-title class="display-1 text-uppercase font-weight-black">Secure Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  type="text"
                  v-model="form.email"
                  dark
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  v-model="form.password"
                  dark
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn x-large min-width="200" dark color="#287877" class="mb-8" @click.prevent="submit">Access</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    import { mapActions } from 'vuex'
 
    export default {
        props: {
        source: String,
        },
        data: () => ({
            form: {
                email: '',
                password: ''
            }
        }),
        methods: {
            ...mapActions({
              signIn: 'auth/signIn'
            }),
            submit() {
              this.signIn(this.form).then(() => {
                  this.$router.replace({
                    name: 'Dashboard'
                  })
              }).catch(() => {
                console.log('Failed');
              })
            }
        }
    }
</script>

<style lang="scss">
.theme--light {
    &.v-application {
        background: url('~@/assets/matrix.jpg');
        background-size: cover;

        &:before {
            content: "";
            width: 100%;
            height: 100%;
            position: fixed;
            background: rgba(0, 9, 9, 0.75);
            top: 0;
            left: 0;
        }
    }
}
</style>