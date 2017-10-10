<template>
    <div id="test">
        
    <h1>List Product</h1>
    <div v-if="products">
          <table class="table table-responsive table-bordered">
            <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>
                 <tr v-for="product in products">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <a href="" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-edit"></i> Edit</a>
                        <a href="" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-trash"></i> Hapus</a>
                    </td>
                </tr>
            </tbody>
          </table>
    </div>
    </div>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    name: 'test',

    data () {
      return {
        electron: process.versions['atom-shell'],
        name: 'test',
        node: process.versions.node,
        path: '/test',
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    },
    apollo: {
        products: {
          query: gql`query products{
            products {
              id
              name
              price
            }
          }`,
          prefetch: true,
        }
      }
  }
</script>