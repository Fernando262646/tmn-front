<template>
  <div>
    <Banner/>
    <UserInfo/>

    <div class="tmn-container">
      <Menu />
      <div class="tmn-content">

        <div :v-if="messageText.lenght > 0" class="info-message">
          <b>{{messageText}}</b>
        </div>

        <div class="tmn-panel">
          <br/>

          <div v-if="currentForm == 1">
            <span><b>Input your identification:</b></span>

            <form @submit.prevent="login">
              <div class="tmn-form-section">
                <table class="tmn-table">
                  <tr>
                    <td class="td-label"><label for="username" class="tmn-label">Username:</label></td>
                    <td><input v-model="loginForm.login" type="text" name="username" id="username" class="tmn-field" /></td>
                  </tr>
                  <tr>
                    <td class="td-label"><label for="password" class="tmn-label">Password:</label></td>
                    <td><input v-model="loginForm.password" type="password" name="password" id="password" class="tmn-field" /></td>
                  </tr>
                </table>
              </div>

              <p>
                <b>By clicking the "Login Now!" button below, you agree to <a href="tos.htm" target="_blank">TMN TOS</a> (Updated April 15th, 2005)</b>
              </p>

              <p>
                <button type="submit" class="tmn-button">Login Now!</button>
              </p>
            </form>
          </div>

          <div v-if="currentForm == 2">
            <span><b>Lost password:</b></span>

            <form @submit.prevent="lostPassword">
              <div class="tmn-form-section">
                <table class="tmn-table">
                  <tr>
                    <td class="td-label"><label for="tmn-label">Username:</label></td>
                    <td><input v-model="lostPasswordForm.username" type="text" name="username" id="username" class="tmn-field" /></td>
                  </tr>
                  <tr>
                    <td class="td-label"><label for="email" class="tmn-label">Email address:</label></td>
                    <td><input v-model="lostPasswordForm.email" type="email" name="email" id="email" class="tmn-field" /></td>
                  </tr>
                </table>
              </div>

              <p>
                <button type="submit" class="tmn-button">Submit</button>
              </p>
            </form>
          </div>

          <div v-if="currentForm == 3">
            <span><b>Register:</b></span>

            <form @submit.prevent="register">
              <div class="tmn-form-section">
                <table class="tmn-table">
                  <tbody>
                    <tr>
                      <td class="td-label"><label for="username" class="tmn-label">Username:</label></td>
                      <td><input v-model="registerForm.username" type="text" name="username" id="username" class="tmn-field" /></td>
                    </tr>
                    <tr>
                      <td class="td-label"><label for="password" class="tmn-label">Password:</label></td>
                      <td><input v-model="registerForm.password" type="password" name="password" id="password" class="tmn-field" /></td>
                    </tr>
                    <tr>
                      <td class="td-label"><label for="passwordAgain" class="tmn-label">Password again:</label></td>
                      <td><input v-model="registerForm.passwordAgain" type="password" name="passwordAgain" id="passwordAgain" class="tmn-field" /></td>
                    </tr>
                    <tr>
                      <td class="td-label"><label for="email" class="tmn-label">Email address:</label></td>
                      <td><input v-model="registerForm.email" type="email" name="email" id="email" class="tmn-field" /></td>
                    </tr>
                    <tr>
                      <td class="td-label"><label for="emailAgain" class="tmn-label">Email again:</label></td>
                      <td><input v-model="registerForm.emailAgain" type="email" name="emailAgain" id="emailAgain" class="tmn-field" /></td>
                    </tr>
                    <tr>
                      <td class="td-label"><label for="hometown" class="tmn-label">Hometown:</label></td>
                      <td>
                        <select v-model="registerForm.city" name="hometown" id="hometown" class="tmn-field">
                          <option v-for="item in registerForm.hometown" :key="item.id" v-bind:value="item.id">{{ item.name }}</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <input v-model="registerForm.confirm" type="checkbox" id="ConfirmAgreement" /> <label for="ConfirmAgreement"><b style="color: darkred;">I have read and agreed with the <a href="/tos" target="_blank">TMN TOS</a></b></label>
              </p>

              <p>
                <button type="submit" class="tmn-button">Register</button>
              </p>
            </form>
          </div>

          <div v-if="currentForm == 4">
            <span><b>Activate:</b></span>

            <form @submit.prevent="activate">
              <div class="tmn-form-section">
                <table class="tmn-table">
                  <tr>
                    <td class="td-label"><label for="tmn-label">Username:</label></td>
                    <td><input v-model="activateForm.username" type="text" name="username" id="username" class="tmn-field" /></td>
                  </tr>
                  <tr>
                    <td class="td-label"><label for="activateCode" class="tmn-label">Activation code:</label></td>
                    <td><input v-model="activateForm.actnum" type="text" name="activateCode" id="activateCode" class="tmn-field" /></td>
                  </tr>
                </table>
              </div>

              <p>
                <b>By clicking the "Activate Account!" button below, you agree to <a href="tos.htm" target="_blank">TMN TOS</a> (Updated April 15th, 2005)</b>
              </p>

              <p>
                <button type="submit" class="tmn-button">Activate</button>
              </p>
            </form>
          </div>

          <a v-if="currentForm != 1" v-on:click="changeForm(1)" href="#" class="tmn-link">Login</a>
          <a v-if="currentForm != 2" v-on:click="changeForm(2)" href="#" class="tmn-link">Password remind</a>
          <a v-if="currentForm != 3" v-on:click="changeForm(3)" href="#" class="tmn-link">Register</a>
          <a v-if="currentForm != 4" v-on:click="changeForm(4)" href="#" class="tmn-link">Activate</a>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { appData } from '../variables'

export default {
    name: "Login",
    components: {
      Banner: defineAsyncComponent(() => import('./Banner.vue')),
      UserInfo: defineAsyncComponent(() => import('./UserInfo.vue')),
      Menu: defineAsyncComponent(() => import('./Menu.vue'))
    },
    data() {
      return {
        messageText: "",
        currentForm: 1,
        loginForm: {
          login: "",
          password: ""
        },
        lostPasswordForm: {
          username: "",
          email: ""
        },
        registerForm: {
          username: "",
          password: "",
          passwordAgain: "",
          email: "",
          emailAgain: "",
          city: 1,
          confirm: false,
          hometown: []
        },
        activateForm: {
          username: '',
          actnum: ''
        }
      }
    },
    methods: {
      changeForm: function (form) {
        this.currentForm = form
      },
      login() {
        this.$http.post('/account/login', {
          login: this.loginForm.login,
          password: this.loginForm.password
        }).then((response) => {
          console.log(response.data)

          appData.user.id = response.data.userId
          appData.user.name = response.data.username
          appData.user.role = response.data.role

          this.$router.push('news')
        })
      },
      register() {

        if (this.registerForm.confirm == false) {
          this.messageText = "You have to read and accept the TMN Terms Of Service in order to register and play TMN"
          return
        }

        if (this.registerForm.username.trim().length == 0 || this.registerForm.password.trim().length == 0 || this.registerForm.email.trim().length == 0) {
          this.messageText = "Please fill in all required information!";
          return
        }

        if (this.registerForm.password != this.registerForm.passwordAgain) {
          this.messageText = "Passwords do not match!"
          return
        }

        if (this.registerForm.email != this.registerForm.emailAgain) {
          this.messageText = "Emails do not match!"
          return
        }

        this.$http.post('/account/register', {
          username: this.registerForm.username,
          password: this.registerForm.password,
          email: this.registerForm.email,
          city: this.registerForm.city,
          confirm: this.registerForm.confirm
        }).then((response) => {
          let resp = response.data
          console.log(resp)

          this.messageText = resp.message;
        })
      },
      lostPassword() {

      },
      activete() {
        this.$http.post('/account/activate', {
          username: this.activateForm.username,
          actnum: this.activateForm.actnum
        }).then((response) => {
          let resp = response.data
          console.log(resp)


        })

      }
    },
    created() {
      console.log(appData)

      let username = this.$route.query.username
      let actnum = this.$route.query.actnum

      if (username !== undefined && actnum !== undefined) {
        this.activateForm.username = username
        this.activateForm.actnum = actnum
        this.currentForm = 4
      }

      this.$http.get('/account/GetCities').then((response) => {
        this.registerForm.hometown = response.data
      })
    }
}
</script>

<style scoped>
.tmn-link {
  border-right: 1px solid black;
  padding: 0 1em;
}
.tmn-link:last-child {
  border: none;
}
</style>
