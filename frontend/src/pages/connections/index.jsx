import { AcceptConnection, getMyConnectionRequests } from '@/config/redux/action/authAction';
import DashboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./index.module.css";
import { BASE_URL } from '@/config';
import { useRouter } from 'next/router';

export default function ConnectionsPage() {

  const dispatch = useDispatch();
  const router = useRouter();

  const authState = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMyConnectionRequests({ token: localStorage.getItem("token")}));
  }, [])

  useEffect(() => {
      if(authState.connectionRequest.length != 0){
        console.log(authState.connectionRequest)
      }
  }, [authState.connectionRequest])

  return (
    <UserLayout>
      <DashboardLayout>
        <div style={{ display: "flex" , flexDirection: "column" , gap: "1.7rem"}}>
            <h4>Connection Requests</h4>

            {authState.connectionRequest.length === 0 && <h1>No Connection Request Pending</h1>}

             {authState.connectionRequest.length != 0 && authState.connectionRequest.filter((connection) => connection.status_accepted === null).map((user , index) => {
                 return (
                   <div onClick={() => {
                     router.push(`/view_profile/${user.userId.username}`)
                   }} className={styles.userCard} key={index}>
                      <div style={{ display: "flex" , alignItems: "center" , gap: "1.2rem" , justifyContent: "space-between" }}>
                          <div className={styles.profilePicture}>
                               <img src={`${BASE_URL}/${user.userId.profilePicture}`} alt='' />
                          </div>

                          <div className={styles.userInfo}>
                               <h3>{user.userId.name}</h3>
                               <p style={{ color: "grey" }}>@{user.userId.username}</p>
                          </div>

                          <button onClick={(e) => {
                             e.stopPropagation();

                             dispatch(AcceptConnection({
                                connectionId: user._id,
                                token: localStorage.getItem("token"),
                                action: "accept"
                             }))
                          }} className={styles.connectedButton}>Accept</button>

                      </div>
                   </div>
                 )
             })}


              <h4>My Network</h4>

             {authState.connectionRequest.filter((connection) => connection.status_accepted !== null).map((user , index) => { 
               return (
                   <div onClick={() => {
                    router.push(`/view_profile/${user.userId.username}`)
                  }} className={styles.userCard} key={index}>
                     <div style={{ display: "flex" , alignItems: "center" , gap: "1.2rem" , justifyContent: "space-between" }}>
                         <div className={styles.profilePicture}>
                              <img src={`${BASE_URL}/${user.userId.profilePicture}`} alt='' />
                         </div>

                         <div className={styles.userInfo}>
                              <h3>{user.userId.name}</h3>
                              <p style={{ color: "grey" }}>@{user.userId.username}</p>
                         </div>

                     </div>
                  </div>
                )
             })}

        </div>
       </DashboardLayout>
    </UserLayout>
  )
}
