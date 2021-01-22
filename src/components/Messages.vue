<template>
  <ul id="chat">
    <GettingMessages
      v-for="messages in contact.messages"
      :key="messages.id"
      :messages="messages"
      :contact="contact"
    />
    <MyMessages
      :myMessage="myMessage"
      v-for="myMessage in myMessages.messages"
      :key="myMessage.id"
    />
  </ul>
</template>
<script>
import GettingMessages from "./GettingMessages";
import MyMessages from "./MyMessages";
export default {
  name: "Messages",
  components: { GettingMessages, MyMessages },
  computed: {
    contact() {
      return this.$store.getters.getContact;
    },
    myMessages() {
      let gettingMessages = this.$store.getters.getMessages;
      let messages = [];
      gettingMessages.forEach((m) => {
        if (m.contactId == this.contact.contact.id) {
          messages = m;
        }
      });
      return messages;
    },
  },
};
</script>
<style scoped>
#chat {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: scroll;
  height: 535px;
  border-right: 2px solid rgb(3, 3, 3);
  border-top: 2px solid rgb(3, 3, 3);
}
</style>