import mongoose from 'mongoose'
export default async function connectToDB(){
   try {
    const resp = await mongoose.connect('mongodb+srv://10ohekabanzai:f22pakfaamcA@cluster0.r08sa.mongodb.net/')
    console.log("DB connected")
   } catch (error) {
    console.log(error)
   }
}