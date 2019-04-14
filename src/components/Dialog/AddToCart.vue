<template>
  <v-layout row justify-center>
    <v-dialog
      @input="onHideDialog"
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Adding to cart succeed!</v-card-title>

        <v-card-text class="headline">
          <span style="color: #dd127b">3</span> items in cart.
        </v-card-text>

        <v-card-actions>
          <v-layout align-center justify-center column fill-height>
            <v-btn
              color="#dd127b"
              dark
              @click="onProcessCheckout"
            >
              Proccess to Checkout
            </v-btn>

            <v-btn
              color="#dd127b"
              flat
              @click="onHideDialog"
            >
              Return to Shopping
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props: {
      showDialog: Boolean
    },
    watch: {
      showDialog (showDialog) {
        if (showDialog) this.onShowDialog()
      }
    },
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      onHideDialog () {
        this.dialog = false
        this.$emit('hideDialog', false)
      },
      onShowDialog () {
        this.dialog = true
      },
      onProcessCheckout () {
        this.onHideDialog()
        this.$router.push('/carts')
      }
    }
  }
</script>