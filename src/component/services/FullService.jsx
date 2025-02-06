import RightSide from "./RightSide"
import LeftSide from "./LeftSide"
import PropHeader from "../home/PropHeader/PropHeader"
import "./serviceStyle.scss"

const FullService = () => {
  return (
    <div>
      <PropHeader
        title="Service Details"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Service Details" },
        ]}/>
      <div className="py-5 media">
        <LeftSide/>
        <RightSide/>
      </div>
    </div>
  )
}

export default FullService