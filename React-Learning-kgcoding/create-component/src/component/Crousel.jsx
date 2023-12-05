import React from "react";

function Crousel() {
        const imageStyle = {
          width: '100%', // Adjust the width as needed
          height: '500px', // Adjust the height as needed
          objectFit: 'cover', // Maintain aspect ratio and cover entire area
        };
      
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://png.pngtree.com/background/20230412/original/pngtree-high-definition-water-splash-water-ripple-background-picture-image_2401534.jpg"
                  className="d-block w-100"
                  alt="First slide"
                  style={imageStyle}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/premium-photo/water-swimming-pool-background-with-high-resolution-wave-abstract-rippled-water-texture_265223-20388.jpg"
                  className="d-block w-100"
                  alt="Second slide"
                  style={imageStyle}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.chargerwater.com/wp-content/uploads/2018/05/clean-water-1080x675.jpg"
                  className="d-block w-100"
                  alt="Third slide"
                  style={imageStyle}
                />
              </div>
            </div>
          </div>
        );
      };
  
  export default Crousel;