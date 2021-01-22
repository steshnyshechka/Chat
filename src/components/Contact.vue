<template>
  <li @click.prevent="openChat()">
    <img class="photo" :src="photo.thumbnailUrl" alt="" />
    <div>
      <h2>{{ contact.name }}</h2>
    </div>
  </li>
</template>

<script>
export default {
  name: "Contact",
  props: { contact: Object },
  data() {
    return {
      photo: {},
      messages: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        json.map((ph) => {
          if (ph.id === this.contact.id) {
            this.photo = ph;
          }
        });
      });
  },
  methods: {
    openChat() {
      this.$store.commit("ADD_CONTACT", this.contact);
      this.$store.commit("ADD_PHOTO", this.photo);
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((json) => {
          json.map((m) => {
            if (m.postId == this.contact.id) {
              this.messages.push(m);
            }
          });
        })
        .then(this.$store.commit("ADD_MESSAGES", this.messages));
    },
  },
};
</script>

<style scoped>
.photo {
  margin-left: 20px;
  margin-right: 8px;
}
div {
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
}
h2 {
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 5px;
}
</style>