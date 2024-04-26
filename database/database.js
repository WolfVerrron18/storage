import mongoose from 'mongoose'

export const connectionDatabase = async () => {
  const uri =
    'mongodb+srv://developer:1234567890@wallet.nhhpsum.mongodb.net/?retryWrites=true&w=majority&appName=Wallet'

  return mongoose.connect(uri)
}
