import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';

import './home.css'


const Home = ()=>{
    return(
    <div className='home'>
         
         <div className='first'> 
         <TwitterIcon fontSize='large' color="primary" sx={{mt:"10px"}} /> <br />
         <Button style={{width:"200px", height:"38px" ,borderRadius:"20px" ,color:"black" , border:"0.1px solid rgb(83, 100, 113)", fontWeight:"bold" }} variant="outlined">setting </Button><br />
         <Button style={{width:"200px", height:"38px" ,borderRadius:"20px" ,color:"black" , border:"0.1px solid rgb(83, 100, 113)", fontWeight:"bold" }} variant="outlined">explor </Button>


          
         </div>
         <div className='middle'>

         </div>
         <div className='last' >

         </div>
    </div>
    )
}

export default Home;