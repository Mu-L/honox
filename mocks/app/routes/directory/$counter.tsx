import type { PropsWithChildren } from 'hono/jsx'
import { useState } from 'hono/jsx'

export default function Counter({
  children,
  initial = 0,
  id = '',
}: PropsWithChildren<{
  initial?: number
  id?: string
}>) {
  const [count, setCount] = useState(initial)
  const increment = () => setCount(count + 1)
  return (
    <div id={id}>
      <p>DollarCount: {count}</p>
      <button onClick={increment}>Dollar Increment</button>
      {children}
    </div>
  )
}
