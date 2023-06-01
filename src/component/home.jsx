import Sidebar from "./sidebar"
import Search from './search'
import What_happeni from './What_happening'
import Who_to_follow from './Who_to_follow'
import Footer from  './footer'
import Top_home from './top_home'
import Add_twitte from './add_twitte'
import All_twitte from './all_twitte'
import styles from './home.module.css'

  
const Home = ()=>{
    return(
    <div className={styles.home}>
         <div className={styles.first} > 
           <Sidebar />
           {/* <Logout_left/> */}
         </div>
         <div className={styles.middle} >

        <Top_home />
        <Add_twitte />
        <All_twitte/>
        
         </div>
         <div className={styles.last} >
         <Search />
         <What_happeni />
         <Who_to_follow />
         <Footer />
         </div>
    </div>
    )
}

export default Home;