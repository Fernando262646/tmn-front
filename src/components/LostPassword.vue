<template>
  <div class="tmn-panel">
    <br/>
    <span><b>Lost password:</b></span>

    <div class="tmn-form-section">
      <table class="tmn-table">
        <tr>
          <td class="td-label"><label for="tmn-label">Username:</label></td>
          <td><input type="text" name="username" id="username" class="tmn-field" /></td>
        </tr>
        <tr>
          <td class="td-label"><label for="email" class="tmn-label">Email address:</label></td>
          <td><input type="email" name="email" id="email" class="tmn-field" /></td>
        </tr>
      </table>
    </div>

    <p>
      <button type="submit" class="tmn-button">Submit</button>
    </p>

    <a href="#" class="tmn-link">Password remind</a><span class="tmn-separator">|</span><a href="#" class="tmn-link">Register</a><span class="tmn-separator">|</span><a href="#" class="tmn-link">Activate</a>

  </div>
</template>

<script>
export default {
    name: "LostPassword",
    components: {

    },
    data() {
      return {
        username: "",
        email: ""
      }
    }
}
</script>

<style scoped>

</style>
