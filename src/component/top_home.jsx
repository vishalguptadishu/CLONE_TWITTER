import styles from './top_home.module.css'

const Top_home=()=>{
    return (
        <div className={styles.top_home}>
            <div>
              <h2>Home</h2>
            </div>
            
            <div>
            <h1>For you</h1>
            <h1>Following</h1>
            </div>
        </div>
    )
}
export default Top_home;