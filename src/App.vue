<template>
  <div id="container">
    <Contacts />
    <Chat />
  </div>
</template>

<script>
import Contacts from "./components/Contacts";
import Chat from "./components/Chat";

export default {
  name: "App",
  components: {
    Contacts,
    Chat,
  },
};
</script>

<style>
#container {
  width: 750px;
  height: 800px;
  background: #eff3f7;
  margin: 0 auto;
  font-size: 0;
  border-radius: 5px;
  overflow: hidden;
}
</style>
