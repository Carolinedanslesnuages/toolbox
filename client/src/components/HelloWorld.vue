<template>
  <div class="navbar">
    <h1>{{ msg }}</h1>

    <a
      href="#"
      class="fa fa-fw fa-user"
      @click.prevent="goLinkTutorial"
    >

      Telecharger un pdf</a>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },

  methods: {
    async goLinkTutorial () {
      axios({
        url: 'api/v1/download',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const fileURL = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = fileURL
        link.setAttribute('download', 'tutorial.pdf')
        document.body.appendChild(link)
        link.click()
      })
    },
  },
}
</script>

<style lang="postcss" scoped>

.navbar {
  width: 100%;
  background-color: peachpuff;
  overflow: auto;
  position: fixed;
}

.navbar a {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: #000;
}

.active {
  background-color: burlywood;
}

@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
