import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "./userSlice";

const UserView = () => {

  const {loading, error, users} = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(()=> {
     dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>list of users : </h2>

      <div>
         {loading && <h1>Loading....</h1>}
         {error &&  <h1>ERROR fetching data</h1>  }
         {users?.map(user => {
            return user.name
         }  )} 
      </div>
    </div>
  );
};

export default UserView;
