module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const ManagerSchema = new Schema({
    username: { type: String, default: '' },
    password: { type: String, default: '' },
    role: { type: Number, default: 1 },
    isDeleted: { type: Boolean, default: false }
  }, {
    timestamps: true
  })

  return mongoose.model('Manager', ManagerSchema)
}