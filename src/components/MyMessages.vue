<template>
  <li class="me">
    <div class="entete">
      <h2>you</h2>
    </div>
    <div class="triangle"></div>
    <div class="message">
      {{ myMessage.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: "MyMessages",
  props: { myMessage: Object },
};
</script>

<style scoped>
.me {
  text-align: right;
}
.message {
  background-color: #888888;
}
.triangle {
  border-color: transparent transparent #888888 transparent;
  margin-left: 375px;
}
</style>