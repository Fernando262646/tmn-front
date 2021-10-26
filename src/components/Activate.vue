<template>
  <div class="tmn-panel">
    <br/>
    <span><b>Activate:</b></span>

    <div class="tmn-form-section">
      <table class="tmn-table">
        <tr>
          <td class="td-label"><label for="tmn-label">Username:</label></td>
          <td><input type="text" name="username" id="username" class="tmn-field" /></td>
        </tr>
        <tr>
          <td class="td-label"><label for="activateCode" class="tmn-label">Activation code:</label></td>
          <td><input type="text" name="activateCode" id="activateCode" class="tmn-field" /></td>
        </tr>
      </table>
    </div>

    <p>
      <b>By clicking the "Activate Account!" button below, you agree to <a href="tos.htm" target="_blank">TMN TOS</a> (Updated April 15th, 2005)</b>
    </p>

    <p>
      <button type="submit" class="tmn-button">Activate Account!</button>
    </p>

    <a href="#" class="tmn-link">Password remind</a><span class="tmn-separator">|</span><a href="#" class="tmn-link">Register</a><span class="tmn-separator">|</span><a href="#" class="tmn-link">Activate</a>

  </div>
</template>

<script>
export default {
    name: "Activate",
    components: {

    },
    data() {
      return {
        username: "",
        activationCode: ""
      }
    }
}
</script>

<style scoped>

</style>
