import Image from 'next/image'

function Loading() {
    return <div>
        &nbsp;
        &nbsp;
        <center><Image src="/rolling.gif" layout="fixed" object="contain" width="200" height="200" /></center>
        <center><h2>Loading...</h2></center>

        </div>
        
  }
  
  export default Loading