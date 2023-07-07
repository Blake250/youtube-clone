import React, {useState, useEffect} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

import { useSelector } from 'react-redux';


const SkeletonVideo = () => {
  const isLoading = useSelector((state) => state.user.youtube?.isLoading);

  if (isLoading) {
    return (
      <div style={{ width: '100%', margin: '1rem 0' }}>
        <SkeletonTheme color="#343q40" highlightColor="#3c4147">
          <Skeleton height={180} />
          <div>
            <Skeleton style={{ margin: '0.5rem' }} circle height={40} width={40} />
            <Skeleton height={40} width="75%" />
          </div>
        </SkeletonTheme>
      </div>
    );
  }

  return null; // Return null when not loading, since the actual video content will be rendered
};

export default SkeletonVideo;














/*const SkeletonVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{ width: '100%', margin: '1rem 0' }}>
        <SkeletonTheme color="#343q40" highlightColor="#3c4147">
          <Skeleton height={180} />
          <div>
            <Skeleton style={{ margin: '0.5rem' }} circle height={40} width={40} />
            <Skeleton height={40} width="75%" />
          </div>
        </SkeletonTheme>
      </div>
    );
  }

  // Render the actual video component here
  // ...

  return null;
};

export default SkeletonVideo;*/














/*const SkeletonVideo = () => {
  return (
    <div style={{ width: '100%', margin: '1rem 0', zIndex:"999", position:"relative" ,}}>
      <SkeletonTheme    color="#1a201a40" highlightColor="#26282b"     >
        <Skeleton height={180}  />
        <div     style={{zIndex:"999", position:"relative"}}  >
          <Skeleton style={{ margin: '0.5rem' }} circle height={40} width={40}  />
          <Skeleton height={40} width="75%" />
        </div>
      </SkeletonTheme>
    </div>
  );
};



export default SkeletonVideo*/










/*function SkeletonVideo() {
  return (
    <div style={{ width: '100%', margin: '1rem 0' }}>
      <SkeletonTheme color="#343q40" highlightColor="#3c4147">
        <Skeleton height={180} />
        <div>
          <Skeleton
            style={{ margin: '0.5rem' }}
            circle
            height={40}
            width={40}
          />
          <Skeleton height={40} width="75%" />
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default SkeletonVideo;*/





















/*function SkeletonVideo() {
  return (
    <div style={{width:"100%", margin:"1rem 0"}} >
      <SkeletonTheme   color="#343q40" highlightColor='#3c4147'  >
         <Skeleton height={180}  />
         <div>

          <Skeleton
             style={{margin:"0.5rem" }}
             circle
             height={40}
             width={40}
              


             
          
          
          />
          <Skeleton   height={40} width="75%" />
         </div>
         


      </SkeletonTheme>



    </div>
  )
}

export default SkeletonVideo*/