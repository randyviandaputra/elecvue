import Vue from 'vue'
// import VueResource from 'vue-resource'
import axios from 'axios'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'
import gql from 'graphql-tag'

import App from './App'
import Test from './components/Test'
import router from './router'
import store from './store'

// Vue.use(VueResource)

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
    transportBatching: true,
  }),
  dataIdFromObject: r => r.id,
});

// Install the vue plugin
// With the apollo client instance
Vue.use(VueApollo, {
  apolloClient,
});

// Install the vue plugin
Vue.use(VueApollo)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

console.log(apolloClient);

/* eslint-disable no-new */
new Vue({
  components: { App, Test },
  apolloProvider,
  apolloClient,
  router,
  store,
  render: h => h(App),
  template: '<App/>'
}).$mount('#app')
