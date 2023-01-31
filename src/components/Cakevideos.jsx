import React, { useState } from 'react'
import video from "../assets/ck1.mp4"
import video1 from "../assets/ck2.mp4"
import "./style.css"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { CommentOutlined, CommentTwoTone, More, MoreOutlined, MoreRounded, MoreVertRounded, Share, ShareRounded, VolumeDown, VolumeDownOutlined, VolumeUp } from '@material-ui/icons';
import BootstrapCarouselComponent from './BootstrapCarouselComponent';

const Cakevideos = () => {

    const [liked, setLiked] = useState(0);


    const likes = () => {
        setLiked( liked + 1);
      };

  return (
    <div className='vplyercont'>
       
    
      
     <div className='vplyer'>
      <div className='vinfo'>
        <div>Cakes & Memories</div>
        <div className='follow'>Follow</div>
        <div className='interactiveicons' style={{display:"flex",alignItems:"center",color:"white",borderRadius:"10px",padding:"1%"}}><MoreVertRounded /></div>
      </div>
      <div className='vinfo1'>
        <p>Get your fresh birthday cake today !!!</p>
      </div>
     <video muted autoPlay={true} width="100%"  controls loop="">
        <source  src={video}  type="video/mp4" />
       
      </video>
    <div className='likedbut'> <div className='interactiveicons' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",color:"white",borderRadius:"10px",padding:"25%"}} > <button style={{backgroundColor:"transparent",border:"none"}} onClick={likes}><FormControlLabel style={{color:"white"}}
        control={<Checkbox icon={<FavoriteBorder style={{color:"white"}} />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
       
      /></button>
       <p style={{color:"white",}}>{liked}</p>
      </div>
        
         <div className='interactiveicons' style={{display:"flex",alignItems:"center",color:"white",borderRadius:"10px",padding:"25%"}}><CommentTwoTone style={{color:"white",borderRadius:"50%"}} /></div>
         <div className='interactiveicons' style={{display:"flex",alignItems:"center",color:"white",borderRadius:"10px",padding:"25%"}}><ShareRounded style={{color:"white",}} /></div>
         
         </div>
      
    <div className='slidingcar'><BootstrapCarouselComponent /></div>
     </div>
     

     <div className='vplyer'>
      <div className='vinfo'>
        <div>Delicious Cakes</div>
        <div className='follow'>Follow</div>
        <div className='more'><MoreVertRounded /></div>
      </div>
      <div className='vinfo1'>
        <p>We bake the best cakes in the town !!!</p>
      </div>
     <video muted autoPlay={true} width="100%"  controls loop="">
        <source  src={video1}  type="video/mp4" />
       
      </video>
    <div className='likedbut'> <div className='interactiveicons' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",color:"white",borderRadius:"10px",padding:"25%"}} > <button style={{backgroundColor:"transparent",border:"none"}} onClick={likes}><FormControlLabel style={{color:"white"}}
        control={<Checkbox icon={<FavoriteBorder style={{color:"white"}} />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
       
      /></button>
       <p style={{color:"white"}}>{liked}</p>
      </div>
        
         <div className='interactiveicons' style={{display:"flex",alignItems:"center",color:"white",borderRadius:"10px",padding:"25%"}}><CommentTwoTone style={{color:"white",borderRadius:"50%"}} /></div>
         <div className='interactiveicons' style={{display:"flex",alignItems:"center",color:"white",borderRadius:"10px",padding:"25%"}}><ShareRounded style={{color:"white",}} /></div>
         
         </div>
      
         <div className='slidingcar'><BootstrapCarouselComponent /></div>
     </div>

    </div>
  )
}

export default Cakevideos
