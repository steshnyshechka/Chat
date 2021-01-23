<template>
  <aside>
    <header>
      <h2 class="title">Chat</h2>
    </header>
    <ul>
      <Contact
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
      />
    </ul>
  </aside>
</template>

<script>
import Contact from "./Contact";
export default {
  name: "Contacts",
  components: { Contact },
  data() {
    return {
      contacts: {},
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.contacts = json))
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
aside {
  border: 2px solid rgb(3, 3, 3);
  width: 260px;
  height: 800px;
  background-color: #3b3e49;
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
}
header {
  border-bottom: 2px solid rgb(3, 3, 3);
  padding: 30px 20px;
}
.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 50px 0 20px;
  background-color: #5e616a;
  border: none;
  border-radius: 3px;
  color: #fff;
}
ul {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: scroll;
  height: 690px;
}
</style>
