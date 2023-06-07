<script lang="ts">
import {useQuasar} from 'quasar';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let $q = useQuasar()

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      if (!this.login.username || !this.login.password) {
        $q.notify({
          type: 'negative',
          message: 'Kullanıcı adı ve şifre giriniz.'
        })
      } else if(this.login.password.length < 6){
        $q.notify({
          type: 'negative',
          message: 'Parola 6 haneden fazla olmalı.'
        })
      } else {
        $q.notify({
          type: 'positive',
          message: 'Giriş Yapıldı.'
        })
      }
    }
  },
  mounted() {
    $q = useQuasar()
  }
}
</script>
<template>
    <img src="~assets/wave.png" class="wave">
    <div class="row" style="height: 90vh">
      <div class="col-0 col-md-6 flex justify-center content-center">
        <img src="~assets/login.svg" class="responsive">
      </div>
      <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs }" class="col-12 col-md-6 flex content-center">
        <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="~assets/avatar.svg" alt="avatar">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="col-text-h6 ellipsis flex justify-center">
                <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitForm">
              <q-input label="Username" v-model="login.username">
              </q-input>
              <q-input class="Password" type="password" v-model="login.password">
              </q-input>
              <div>
                <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
                <div class="text-center q-mt-sm q-gutter-lg">
                  <router-link class="text-white" to="/login">Parolamı unuttum</router-link>
                  <router-link class="text-white" to="/login">Üye Ol</router-link>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
