import RightSide from "./RightSide"
import LeftSide from "./LeftSide"
import "./serviceStyle.css"

const FullService = () => {
  return (
    <main className="px-10 py-5 media">
      <LeftSide/>
      <RightSide/>
    </main>
  )
}

export default FullService