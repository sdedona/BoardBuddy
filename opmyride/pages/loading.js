import Image from 'next/image'
import redirect from 'nextjs-redirect'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Loading = () => {
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/final');
        }, 3000)
    }, [])
    
    return (<div>
        
    

        <center><Image src="/rolling.gif" layout="fixed" object="contain" width="200" height="200" /></center>
        <center><h2>Loading...</h2></center>

        </div>

    )
  }
  
  export default Loading

  //credit to The Net Ninja for documentation on auto-redirects viewable at https://www.youtube.com/watch?v=O3yKwz4wRHc&ab_channel=TheNetNinja