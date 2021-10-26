<template>
  <div>
    <Banner/>
    <UserInfo/>

    <div class="tmn-container">
      <Menu />
      <div class="tmn-content">

        <div class="news-component">
          <p class="news-header"><router-link to="/tos">Continuing the game means that you accept the TMN Terms Of Service</router-link></p>

          <table class="news-post" cellspacing="1" cellpadding="3">
            <tbody>
              <template v-for="item in news" :key="item.id">
                <tr class="news-post-header">
                  <td>
                    <span>New Updates  -  [{{item.date}}]</span>
                  </td>
                </tr>
                <tr class="news-post-details">
                  <td valign="top" bgcolor="#737373">
                    <div v-html="item.content"></div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>

          <div class="tmn-form-section">
            <table class="tmn-table">
              <tr>
                <td><label for="newsDate">Date:</label></td>
                <td><input v-model="createNewsForm.date" type="date" name="newsDate" id="newsDate" class="tmn-field"></td>
              </tr>
              <tr>
                <td><label for="newsContent">Content:</label></td>
                <td><textarea v-model="createNewsForm.content" type="" name="newsContent" id="newsContent" class="tmn-field"></textarea></td>
              </tr>
            </table>
            
            <button v-on:click="createNews()">Create</button>

          </div>

        <div>
          <button v-on:click="test()">test</button>
        </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: "News",
  components: {
    Banner: defineAsyncComponent(() => import('./Banner.vue')),
    UserInfo: defineAsyncComponent(() => import('./UserInfo.vue')),
    Menu: defineAsyncComponent(() => import('./Menu.vue'))
  },
  data() {
    return {
      news: [],
      createNewsForm: {
        date: "",
        content: ""
      }
    }
  },
  methods: {
    createNews: function () {
      this.$http.post('/news/create', {
        date: this.createNewsForm.date,
        content: this.createNewsForm.content
      }).then((response) => {
        console.log(response)
      })
    },
    test: function() {
      this.$http.get('/news/test')
      .then((response) => {
        console.log(response.data);
      })
    },
    getNews: function() {
      this.$http.get('/news/getNews')
      .then((response) => {
        console.log('Received news')
        console.log(response.data)
        this.news = response.data.news
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status == 401) {
            this.$router.push('login')
          }
        }
      });
    }
  },
  created() {
    this.getNews()
  }
}
</script>

<style scoped>
.news-component {
  font-family: "Verdana", sans-serif;
  font-size: 8pt;
}
.news-header {
  text-align: center;
  margin: 16px 0;
}
.news-header a {
  color: white;
  font-weight: bold;
}
.news-post {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  width: 90%;
  height: 78pt;
  border: solid silver 1px;
}

tr.news-post-header {
  height: 20px;
  background: url('../assets/image/cell_bg.jpg');
}
</style>