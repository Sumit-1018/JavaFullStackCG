import React, { useEffect } from 'react'

const Child = () => {
    useEffect(() => {
        console.log('Effect started...');;

        let interval=setInterval(()=>{
            console.log('Interval running...');
        },1000); // runs every 1 second
        
        return () => {
            console.log('cleanup called...');
            clearInterval(interval);
        };
    }, []); // empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      Child
    </div>
  )
}

export default Child
