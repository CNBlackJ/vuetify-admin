module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    firstName: String,
    lastName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    country: String,
    state: String,
    zipCode: String,
    mobile: String,
    mobilePrefix: String,
    isDefault: {
      type: Boolean,
      default: false
    },
    isDeleted: { type: Boolean, default: false }
  })

  return mongoose.model('Address', UserSchema)
}