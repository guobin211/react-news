import React, { useEffect, useState } from "react"

const MyHooks = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]) // 仅在 count 更改时更新

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
export default MyHooks
