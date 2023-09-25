import React from 'react';
import intuitive from'../Svgs/intuitive.svg';
import responsive from '../Svgs/responsive.svg';
import Dynamic from '../Svgs/dynamic.svg';
import Fast from '../Svgs/clock.svg';

const Header=()=>{
    return(
        <div className='container'>
       
        <div className='PenBackround'>
        <div className="header" >
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Project</p>
            <p>Contact</p>
        </div>
        <div className="TitleP">
        <p >I am Shant Kel-Khacherian <br></br></p>
        <p>Web developer</p>
        </div>
            
        </div>
<section>
    <div>
        <div className='Bluediv'>
            <img src={Fast} className='image'></img>
            </div>
            <p>Fast</p>
            <p>Fast load times and lag<br></br> 
    free interaction my <br></br>
        highes priority</p>
        </div>
        <div>
            <div className='Bluediv'>
                <img src={responsive} className='image'></img>
                </div>
                <p>Responsive</p>
                <p>My layouts will work<br></br>
 on any device big or<br></br> small</p>
 </div>
    <div>
        <div className='Bluediv'>
            <img src={intuitive} className='image'></img>
            </div><p>intituative</p><p>My layouts will work<br></br>
 on any device big or <br></br>small</p>
 </div>
    <div>
        <div className='Bluediv'>
            <img src={Dynamic} className='image'></img>
            </div><p>Dynamic</p><p>Website don’t <br></br>have to be<br></br> specific.I love<br></br>
         making pages<br></br> come to life</p>
         </div>
</section>
        </div>
    );
}
export default Header;