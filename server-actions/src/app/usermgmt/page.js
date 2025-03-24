import React from 'react'
import AddNewUser from '../components/add-new-user'
import { fetchUsersAction } from '../actions'
import SingleUserCard from '../components/single-user-card';

const UserManagement = async() => {
    const list = await fetchUsersAction();
    console.log(list)
    return (
      <div className='p-4'>
          <div className="flex justify-between">
              <h1 className="text-4xl font-bold">User Management</h1>
              <AddNewUser/>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {
              list && list.data && list.data.length>0 ?  list.data.map(i=> <SingleUserCard user={i} key={i._id}/>) : <h3 className="text-2xl font-bold">No Users Found!!</h3>
            }
          </div>
      </div>
    )
}

export default UserManagement
