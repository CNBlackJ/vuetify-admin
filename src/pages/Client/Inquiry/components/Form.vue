<template>
  <form>
    <v-container pa-0 grid-list-xl>
      <v-layout align-center justify-space-around row fill-height wrap>
        <v-flex xs12 sm12 md6 lg4 xl4>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="20"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md6 lg4 xl4>
          <v-text-field
            v-model="phone"
            :error-messages="phoneErrors"
            label="Phone"
            required
            @input="$v.phone.$touch()"
            @blur="$v.phone.$touch()"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md6 lg4 xl4>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md6 lg4 xl4>
          <v-select
            v-model="country"
            :items="countryName"
            :error-messages="selectErrors"
            label="Country"
            required
            @change="$v.country.$touch()"
            @blur="$v.country.$touch()"
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <p>Business Type:</p>
        </v-flex>

        <v-flex v-for="businessType in businessTypes" :key="businessType.id" xs12 sm4 md4>
          <v-checkbox
            height="5"
            required
            v-model="checkedBusiness"
            :label="businessType.text"
            :value="businessType.text"
            @change="$v.checkedBusiness.$touch()"
            @blur="$v.checkedBusiness.$touch()"
          ></v-checkbox>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-textarea
            outline
            v-model="comment"
            name="comment"
            label="Comment"
            rows="5"
            value=""
            placeholder="Enter anything you would like to know here,such as the product,prices and etc."
            ></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-btn depressed @click="submit" block color="#dd127b" dark>submit</v-btn>
      </v-layout>
    </v-container>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, minLength: minLength(4) },
      phone: { required, minLength: minLength(6) },
      email: { required, email },
      country: { required },
      checkedBusiness: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      name: '',
      email: '',
      phone: '',
      country: 'United State',
      checkedBusiness: [],
      comment: '',
      businessTypes: [
        { id: 1, text: 'Boutique or Shop', tag: 'boutiqueOrShop' },
        { id: 2, text: 'Website/Social Medica', tag: 'website' },
        { id: 3, text: 'Salon/Stylist', tag: 'salon' },
        { id: 4, text: 'New Start Bunsiness', tag: 'newStart' },
        { id: 5, text: 'Others', tag: 'others' }
      ]
    }),
    methods: {
      async submit () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        } else {
          const payload = {
            name: this.name,
            mobile: this.phone,
            email: this.email,
            country: this.country,
            businessTypes: this.checkedBusiness,
            comment: this.comment,
            sendPage: this.sendPage
          }
          await this.$store.dispatch('inquiry/createInquiry', payload)
          this.$router.push('/inquiry/success')
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.country = null
        this.checkbox = false
      }
    }
  }
</script>
