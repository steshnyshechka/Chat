<template>
  <div class="main" v-if="Object.keys(contact.contact).length != 0">
    <form @submit.prevent="addMessage">
      <header>
        <img class="photo" :src="contact.photo.thumbnailUrl" alt="" />
        <div>
          <h2>{{ contact.contact.name }}</h2>
        </div>
      </header>
      <Messages />
      <footer>
        <textarea
          required
          v-model="newMessage.newTitle"
          placeholder="Type your message"
        />
        <button>Send</button>
      </footer>
    </form>
  </div>
</template>

<script>
import Messages from "./Messages";

export default {
  name: "Chat",
  components: { Messages },
  computed: {
    contact() {
      return this.$store.getters.getContact;
    },
  },
  data() {
    return {
      newMessage: {
        newTitle: "",
        newId: "",
        contactId: "",
      },
    };
  },
  methods: {
    addMessage() {
      this.newMessage.newId = Math.random();
      this.newMessage.contactId = this.contact.contact.id;
      this.$store.commit("ADD_MESSAGE", this.newMessage);
      this.newMessage.newTitle = "";
    },
  },
};
</script>

<style scoped>
.main {
  background-color: white;
  width: 490px;
  height: 800px;
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
}
button {
  width: 70px;
  height: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #000000;
  vertical-align: top;
  margin-left: 333px;
  display: inline-block;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #ffffff;
  color: rgb(2, 2, 2);
  font-size: 12px;
}
header {
  border-top: 2px solid rgb(3, 3, 3);
  border-right: 2px solid rgb(3, 3, 3);
  background-color: white;
  height: 110px;
  padding: 30px 20px 30px 40px;
}
header > * {
  display: inline-block;
  vertical-align: top;
}
header div {
    margin-left: 10px;
    margin-right: 145px;
}
footer {
  border-right: 2px solid rgb(3, 3, 3);
  border-top: 2px solid rgb(3, 3, 3);
  border-bottom: 2px solid rgb(3, 3, 3);
  background-color: #5e616a;
  height: 155px;
  padding: 20px 30px 10px 20px;
}
textarea {
  resize: none;
  display: block;
  width: 100%;
  height: 80px;
  border-radius: 3px;
  padding: 20px;
  font-size: 13px;
  margin-bottom: 13px;
}
textarea::placeholder {
  color: rgb(3, 3, 3);
}
h2 {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
