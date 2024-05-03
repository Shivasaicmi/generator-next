'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


import React, { useEffect } from 'react'

function PrivateRoute({children}) {
    const authData = useSession();
    const {status,session,data} = authData;

    if(status==='loading'){
      return <h1> Loading.......  </h1>
    }
    if(status!=='authenticated'){
      redirect('/api/auth/signin');
    }
    console.log(status);

  return (
    <>
      {
        (status&&status!=='authenticated') ? <> Redirecting to login </> : <> {children}  </>
      }
    </>
  )
}

export default PrivateRoute;