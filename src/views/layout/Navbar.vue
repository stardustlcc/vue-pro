<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <a class="navbar-brand" @click="$router.push({name: 'Home'})">Cici</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav-item-dropdown right v-if="userInfo" >
          <template v-slot:button-content>
            <em>{{userInfo.name}}</em>
          </template>
          <b-dropdown-item @click="$router.push({ name: 'profile' })">个人主页</b-dropdown-item>
          <b-dropdown-item @click="logout">登出</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav class="ml-auto">
          <div v-if="!userInfo">
            <b-nav-item v-if="$route.name!= 'login'" @click="$router.replace({name:'login'})">登录</b-nav-item>
            <b-nav-item v-if="$route.name!= 'register'" @click="$router.replace({name:'register'})">注册</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: mapState({
      userInfo: (state) => state.userModule.userInfo,
    }),
    methods: mapActions('userModule', ['logout']),
  };
</script>
