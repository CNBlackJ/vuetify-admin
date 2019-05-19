<template>
  <v-layout row justify-center>
    <v-dialog
      @input="onHideDialog"
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">Adding to cart succeed</v-card-title>

        <v-divider></v-divider>

        <v-card-text class="subheading text-xs-center">
          <p>
            <span style="color: #dd127b">3</span> items in cart.
          </p>
          <p>
            Subtotal: <span style="color: #dd127b">USD $ 389.00</span>
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="text-md-center text-xs-center">
          <v-btn
            color="primary"
            flat
            @click="onHideDialog"
          >
            <span>Return to Shopping</span>
          </v-btn>

          <v-btn
            color="primary"
            dark
            @click="onProcessCheckout"
          >
            Proccess to Checkout
          </v-btn>
        </v-card-text>
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