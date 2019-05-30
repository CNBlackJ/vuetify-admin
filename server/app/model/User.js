module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    username: { type: String, default: '' },
    avatar: { type: String, default: '' },
    email: { type: String, default: '' },
    mobile: { type: String, default: '' },
    password: { type: String, default: '' },
    facebook: { type: String, default: '' },
    paypal: { type: String, default: '' },
    auth0Sub: { type: String, default: '' },
    auth0User: { type: String, default: '' },
    type: { type: String, default: 'visitor' },   // admin visitor user
    uniqueId: { type: String, default: '' },
    isDeleted: { type: Boolean, default: false }
  })

  return mongoose.model('User', UserSchema)
}