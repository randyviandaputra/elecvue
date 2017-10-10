<template>
    <div class="container">
        <h1>Login</h1>
        <form v-on:submit="loginUser">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
   export default {

    data () {
      return {
        electron: process.versions['atom-shell'],
        name: 'home',
        node: process.versions.node,
        path: '/test',
        platform: require('os').platform(),
        vue: require('vue/package.json').version,
        form: {},
      }
    },
    methods: {
        loginUser: function(e) {
            if (this.form.email == 'admin@admin.com' && this.form.password == 'admin') {
                location.href = '#/test';
            } else {
                alert('failed')
            }

            e.preventDefault();
        },
    }
  }
</script>

<style></style>