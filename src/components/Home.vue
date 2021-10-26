<template>
  <div class="container">
    <main role="main" class="pb-3">
      <div class="text-container">
        <h2>Relaunch of TMN</h2>

        <div>Marc will continue to run TMN at www.tmn2010.net. More information regarding the launch will be posted soon.</div>
        <div>Meanwhile, www.themafianetwork.net is reserved for old version of TMN - 2004.</div>
        <br />
        <div>Thanks everyone for your support and sorry again for all the inconvenience!</div>
        <div>Regards,</div>
        <div>DC. </div>

        <br />
        <br />
        <br />

        <div>Visitors Comments/Suggestions</div>
        <br />

        <div v-if="statusMessage.lenght > 0">{{statusMessage}}</div>

        <form @submit.prevent="sendMessage">
          <label class="tmn-label" for="username">Name:</label>
          <div><input class="tmn-field" v-model="this.username" type="text" id="username" maxlength="20" /></div>

          <label class="tmn-label" for="comment">Comment:</label>
          <div><input class="tmn-field" v-model="this.comment" type="text" id="comment" maxlength="200" /></div>

          <button type="submit">Post</button>
        </form>

        <template v-for="item in comments" :key="item.id">
          <div class="comment-item">
            <div><b>{{item.username}} wrote on {{item.date}}</b></div>
            <div>{{item.comment}}</div>
          </div>
        </template>

          <!-- <h1 class="display-5" style="color: white; font-weight: bold;">The Mafia Network Will Return Summer 2021</h1>

          <img src="../assets/image/screen.png" style="width: 80%; margin: 2em;" /> -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      username: "",
      comment: "",
      statusMessage: "",
      comments: []
    }
  },
  methods: {
    sendMessage: function() {
      this.$http.post('/home/createmessage', {
        username: this.username,
        comment: this.comment
      }).then((resp) => {
        console.log(resp.status)
        this.statusMessage = "The message saved successfully"

        this.loadMessages();
      });
    },
    loadMessages: function() {
      this.$http.get('/home/getmessages')
      .then((resp) => {
        let data = resp.data
        console.log(data)
        this.comments = data.comments
      })
    }
  },
  created() {
    this.loadMessages()
  }
}
</script>

<style scoped>
  .comment-item {
    margin: 1em 0;
  }
  .tmn-field {
    width: auto;
  }
  .text-center {
    text-align: center;
  }
  .text-container {
    color: white;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
  }
</style>