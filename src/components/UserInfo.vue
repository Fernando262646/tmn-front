<template>
  <div class="tmn-user-info">
  <img id="imgMsg" src="../assets/image/messages/no_messages.gif" />

  <img id="imgRefresh" src="../assets/image/refresh.gif" />
  
  <div class="details">
    <span class="info-label">City: </span>
    <span class="info-value">{{ city }}</span>

    <span class="info-label">Rank: </span>
    <span class="info-value">{{ rank }}</span>

    <span class="info-label">Network: </span>
    <span class="info-value">{{ network }}</span>

    <span class="info-label">Money: </span>
    <span class="info-value">{{ money }}</span>

    <span class="info-label">Health: </span>
    <span class="info-value">{{ health }}</span>

    <span class="info-label">FMJ: </span>
    <span class="info-value">{{ fmj }}</span>

    <span class="info-label">JHP: </span>
    <span class="info-value">{{ jhp }}</span>

    <span class="info-label">Credits: </span>
    <span class="info-value">{{ credits }}</span>

    <span class="info-time">{{ time }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "UserInfo",
  components: {

  },
  data() {
    return {
      city: "",
      rank: "",
      network: "",
      money: "",
      health: "",
      fmj: "",
      jhp: "",
      credits: "",
      time: ""
    }
  }
}
</script>

<style lang="scss" scoped>
  .tmn-user-info {
    background-color: gray;
    color: white;
    height: 24px;

    display: flex;
    align-items: center;
  }

  .details {
    font-size: 8.5pt;
    margin-left: 1em;

    display: flex;
    align-items: center;
  }

  .tmn-user-info #imgRefresh {
    padding: 4px 2px;
  }

  .tmn-user-info .info-time {
    color: yellow;
    font-weight: bold;
  }

  .tmn-user-info .info-label {
    font-weight: bold;
  }

  .tmn-user-info .info-value {
    margin: 0 0.2em;
  }
</style>