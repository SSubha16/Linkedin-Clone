import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import UserLayout from "@/layout/UserLayout";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {

  const router = useRouter();

  return (
    <UserLayout>
       
       <div className={styles.container} >
          <div className={styles.mainContainer}>
             <div className={styles.mainContainer_left}>

              <p>Connect with Friends without Exaggeration</p>
              <p>A True social media platform , with stories no blufs !</p>

                <div onClick={ () => {
                  router.push("/login")
                }} className={styles.ButtonJoin}>
                   <p>Join Now</p>
                </div>

             </div>
             <div className={styles.mainContainer_right}>
                <img src="images/landing_page2.jpg" alt="" style={{height:"60%" , width:"100%"}}/>
             </div>
          </div>
       </div>

    </UserLayout>
  );
}
