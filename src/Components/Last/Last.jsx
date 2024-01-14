import { useState } from "react"

const Last = () => {

  const [close, setClose] = useState(false);

  return (
    <div className={close ? 'bg-transparent w-full h-[100vh]' : 'bg-transparent w-full h-[60vh]'}>
    </div>
  )
}

export default Last