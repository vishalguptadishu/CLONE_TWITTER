import styles from './logout_left.module.css'
import {useState}  from 'react';





const Logout_left=()=>{

    const [btnstate,setbtnstate]=useState(false)

    function hendalepopup(){

      setbtnstate(!btnstate) 

    }

    function clearLS(){
        localStorage.clear();
        alert("gghgk")
        window.location.reload()
    }
    
    return(
        
        <div className={styles.Logout_left} onClick={hendalepopup} >
                <div className={styles.name_log_left}>
                    <img src="https://lh3.googleusercontent.com/ogw/AOLn63HZx1GUehJHyQX441QjoFKxma4d0iM9Ip8NpodvVQ=s32-c-mo" alt="" />
                    <div>
                    <p>Anoop</p>
                    <p>A G</p>
                    </div>  
                </div>
                <div className={`${styles.logout_pop} ${btnstate ? styles.logout_pop2 : ''}`}  >
                    <div><p>add to existing account</p></div>
                    <div onClick={clearLS} ><p>Anoop A G</p></div>   
                </div>
                
        </div>
    )
}
export default Logout_left;