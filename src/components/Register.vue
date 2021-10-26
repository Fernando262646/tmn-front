<template>
  <div class="tmn-panel">
    <br/>
    <span><b>Register:</b></span>

    <div class="tmn-form-section">
      <table class="tmn-table">
        <tbody>
          <tr>
            <td class="td-label"><label for="username" class="tmn-label">Username:</label></td>
            <td><input type="text" name="username" id="username" class="tmn-field" /></td>
          </tr>
          <tr>
            <td class="td-label"><label for="password" class="tmn-label">Password:</label></td>
            <td><input type="password" name="password" id="password" class="tmn-field" /></td>
          </tr>
          <tr>
            <td class="td-label"><label for="passwordAgain" class="tmn-label">Password again:</label></td>
            <td><input type="password" name="passwordAgain" id="passwordAgain" class="tmn-field" /></td>
          </tr>
          <tr>
            <td class="td-label"><label for="email" class="tmn-label">Email address:</label></td>
            <td><input type="email" name="email" id="email" class="tmn-field" /></td>
          </tr>
          <tr>
            <td class="td-label"><label for="emailAgain" class="tmn-label">Email again:</label></td>
            <td><input type="email" name="emailAgain" id="emailAgain" class="tmn-field" /></td>
          </tr>
          <tr>
            <td class="td-label"><label for="hometown" class="tmn-label">Hometown:</label></td>
            <td>
              <select name="hometown" id="hometown" class="tmn-field">
                <option v-for="item in hometown" :key="item.id" v-bind:value="item.id">{{ item.name }}</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <input type="checkbox" id="ConfirmAgreement" /> <label for="ConfirmAgreement"><b style="color: darkred;">I have read and agreed with the <a href="/tos" target="_blank">TMN TOS</a></b></label>
    </p>

    <p>
      <button type="submit" class="tmn-button">Register</button>
    </p>

    <a href="#" class="tmn-link">Password remind</a><span class="tmn-separator">|</span><a href="#" class="tmn-link">Register</a><span class="tmn-separator">|</span><a href="#" class="tmn-link">Activate</a>

  </div>
</template>

<script>
export default {
    name: "Register",
    components: {

    },
    data() {
      return {
        username: "",
        password: "",
        passwordAgain: "",
        email: "",
        emailAgain: "",
        confirm: false,
        
        hometown: [
          { id: 1, name: 'Amsterdam - Netherlands' },
          { id: 2, name: 'Hong Kong - China' },
          { id: 3, name: 'London - England' },
          { id: 4, name: 'Mexico City - Mexico' },
          { id: 5, name: 'New York - United States' },
          { id: 6, name: 'Paris - France' },
          { id: 7, name: 'Sydney - Australia' },
          { id: 8, name: 'Cape Town - South Africa' },
          { id: 9, name: 'Toronto - Canada' },
          { id: 10, name: 'Zurich - Switzerland' },
          { id: 11, name: 'New Delhi - India' },
          { id: 12, name: 'Tokyo - Japan' }
        ]
      }
    }
}
</script>

<style scoped>

</style>
