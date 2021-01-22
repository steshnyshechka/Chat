<template>
  <li class="you">
    <div class="entete">
      <h2>{{ contact.contact.name }}</h2>
    </div>
    <div class="triangle"></div>
    <div class="message">
      {{ messages.body }}
    </div>
  </li>
</template>

<script>
export default {
  name: "GettingMessages",
  props: { messages: Object, contact: Object },
};
</script>

<style scoped>
.message {
  background-color: #3b3e49;
}
.triangle {
  border-color: transparent transparent #3b3e49 transparent;
  margin-left: 15px;
}
</style>
