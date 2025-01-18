const ServiceOffer = () => {
  return (
    <div className="widthPC-90 ml-auto py-5">
        <div className="d-flex mb-4">
            <div>
                <h3>Service</h3>
                <h1>Services We Offer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe animi similique necessitatibus magnam illo repudiandae facere inventore. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.</p>
            </div>
            <button>See All Services</button>
        </div>
        <div className="d-flex flex-wrap">
            <div className="widthPx-330 heightPx-200 bg-primary"></div>
            <div className="widthPx-330 heightPx-200 bg-warning"></div>
            <div className="widthPx-330 heightPx-200 bg-primary"></div>
            <div className="widthPx-330 heightPx-200 bg-warning"></div>
            <div className="widthPx-330 heightPx-200 bg-primary"></div>
            <div className="widthPx-330 heightPx-200 bg-warning"></div>
        </div>
    </div>
  )
}

export default ServiceOffer