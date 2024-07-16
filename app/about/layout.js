export default function AboutLayout({ children }) {
  return (
    <div>
      <div>{children}</div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl">*******</h2>

        <ul>
          <li>Fun fact:</li>
          <li><ul> The patent for the fire hydrant was lost in a fire </ul> </li>
        </ul>
      </div>
    </div>
  )
}