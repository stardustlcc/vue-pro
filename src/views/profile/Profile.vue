<template>
  <h3>您好 <sapn v-if="userInfo">{{userInfo.name}}</sapn> </h3>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState({
      userInfo: (state) => state.userModule.userInfo,
    }),
  };
  </script>

<style scoped>

</style>
