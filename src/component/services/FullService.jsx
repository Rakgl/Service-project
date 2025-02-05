import RightSide from "./RightSide"
import LeftSide from "./LeftSide"
import "./serviceStyle.scss"

const FullService = () => {
  return (
    <main className="py-5 media">
      <LeftSide/>
      <RightSide/>
    </main>
  )
}

export default FullService