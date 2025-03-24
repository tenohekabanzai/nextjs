'use server'

import connectToDB from "@/db"
import Yser from "@/models/user"
import { revalidatePath } from "next/cache"

export async function fetchProductList (){
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        return data.products
    } catch (error) {
        console.log(error)
    }
}

// / add new user action
// / update user action
// / delete user action
// / get user action

export async function addNewUserAction(formData,path){
    await connectToDB()
    try {
        const resp = await Yser.create(formData)
        if(resp){
            revalidatePath(path);
            return {
                success:true,
                message:"User Created!"
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'Some error occured'
        }
    }
}

export async function fetchUsersAction(){
    await connectToDB();
    try {
        const list = await Yser.find({})
        if(list)
        return { success:true, data: JSON.parse(JSON.stringify(list))}
        return { success: false,message: 'Some error occured'}
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'Some error occured'
        }
    }
}

export async function deleteUserAction(id,path){
    try {
        await connectToDB()
        const resp = await Yser.findByIdAndDelete(id)
        if(resp)
        {
            revalidatePath(path)
            return { success:true,message:'User deleted'}
        }
    } 
    catch (error) {
        console.log(error)
        return { success:false,message:'Some error occured'}
    }
}

export async function editUserAction(id,formData,path){
    try {
        await connectToDB()
        const resp = await Yser.findByIdAndUpdate({_id:id},formData)
        if(resp)
        {
            revalidatePath(path)
            return { success:true,message:'User updated'}
        }
    } catch (error) {
        console.log(error)
        return { success:false,message:'Some error occured'}
    }
}