import {useEffect} from "react";

export default function Home() {
  const router = useRouter()
  useEffect(()=> {
    router.push('/main')
    // eslint-disable-next-line
  }, [])
}