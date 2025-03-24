"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteUserAction } from "@/app/actions";
import { useContext } from "react";
import { UserContext } from "@/context";

const SingleUserCard = ({user}) => {

  const {openPopup,setopenPopup,addNewUserFormData,setAddNewUserFormData,currentEditedId, setCurrentEditedId} = useContext(UserContext);
  
  const handleUserDelete=async(id)=>{
    const x = await deleteUserAction(id,'/usermgmt');
  }

  const handleUserEdit=async(user)=>{
    setopenPopup(true);
    setAddNewUserFormData({
      firstname:user.firstname,
      lastname:user.lastname,
      email:user.email,
      address:user.address
    })
    setCurrentEditedId(user._id)
  }
  
  return (
    <Card >
    <CardHeader>
      <CardTitle>
        {user?.firstname} {user?.lastname}
      </CardTitle>
      <CardDescription >{user?.email}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{user?.address}</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button onClick={()=>handleUserEdit(user)}>Edit</Button>
      <Button onClick={()=>handleUserDelete(user._id)} >Delete</Button>
    </CardFooter>
  </Card>
  )

}

export default SingleUserCard
