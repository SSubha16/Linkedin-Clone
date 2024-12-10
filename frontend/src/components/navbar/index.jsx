import React from 'react';
import styles from "./styles.module.css";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '@/config/redux/reducer/authReducer';

function NavbarComponent() {

    const router = useRouter();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth)

  return (
    <div className={styles.container}>
         <nav className={styles.navBar}>

            <h2 style={{cursor: "pointer"}} onClick={ ()=> {
                router.push("/")
            }}>Pro Connect</h2>

            <div className={styles.navBarOptionContainer}>

            
            { authState.profileFetched && <div>

                <div style={{ display : "flex" , gap : "1.2rem" }}>
                   {/* <p>Hey, {authState.user.userId.name}</p>  */}
                   <p onClick={() => {
                     router.push("/profile")
                   }} style={{ fontWeight : "bold" , cursor : "pointer" }}>Profile</p>

                   <p onClick={()=>{
                     localStorage.removeItem("token")
                     router.push("/login")
                     dispatch(reset);
                   }} style={{ fontWeight : "bold" , cursor : "pointer" }}>Log out</p>
                </div>

             </div> }

            { !authState.profileFetched &&  <div onClick={ () => {
                   router.push("/login")
                  }} className={styles.ButtonJoin}>
                    <p>Be a part</p>
               </div> }

            </div>
       </nav>
    </div>
  )
}

export default NavbarComponent