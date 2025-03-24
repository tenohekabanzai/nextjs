"use client";
import { addNewUserAction, editUserAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserContext } from "@/context";
import { addNewUserFormInitialState, addUserFormControls } from "@/utils";
import { useContext, useState } from "react";

const formControls = [];

const AddNewUser = () => {

  // const [openPopup, setopenPopup] = useState(false);
  // const [addNewUserFormData, setAddNewUserFormData] = useState(
  //   addNewUserFormInitialState
  // );

  const {openPopup,setopenPopup,addNewUserFormData,setAddNewUserFormData,currentEditedId,setCurrentEditedId} = useContext(UserContext);
  console.log(currentEditedId);

  // console.log(addNewUserFormData)
  const handleSaveButton=()=>{
    return Object.keys(addNewUserFormData).every(i=> addNewUserFormData[i].trim() !== '')
  }

  const handleAddNewUserAction= async()=>{
    let res=null;
    if(currentEditedId==null)
    res = await addNewUserAction(addNewUserFormData, '/usermgmt')
    else
    res = await editUserAction(currentEditedId,addNewUserFormData,'/usermgmt')
    // console.log(res)
    setCurrentEditedId(null);
    setAddNewUserFormData(addNewUserFormInitialState);
    setopenPopup(false);
  }

  return (
    <div>
      <Button
        className={"bg-gray-500 text-white hover:bg-green-500 text-xl font-bold"} onClick={() => setopenPopup(true)}>
        Add New User
      </Button>
      <Dialog
        open={openPopup}
        onOpenChange={()=>{
          setopenPopup(false)
          setAddNewUserFormData(addNewUserFormInitialState)
          setCurrentEditedId(null)
        }}
      >
        <DialogContent className="sm:max-w-[425px] text-black">
          <DialogHeader>
            <DialogTitle>{currentEditedId!=null ? "Edit User" : "Add New User"}</DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            <div className="flex flex-col">
              {addUserFormControls.map((i) => (
                <div key={i.name} className="">
                  <Label
                    htmlFor={i.name}
                    className="text-right font-bold mb-1 mt-2"
                  >
                    {i.label}
                  </Label>
                  <Input
                    id={i.name}
                    name={i.name}
                    placeholder={i.placeholder}
                    value={addNewUserFormData[i.name]}
                    onChange={(event) => setAddNewUserFormData({
                      ...addNewUserFormData,
                      [i.name]: event.target.value
                    })}
                    className="col-span-3 mb-2"
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
            <Button disabled={!handleSaveButton()} className="diabled:opacity-55" type="submit">{currentEditedId!=null ? "Edit User" : "Add New User"}</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
