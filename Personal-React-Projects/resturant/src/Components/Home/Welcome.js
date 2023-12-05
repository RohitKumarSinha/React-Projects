import React from 'react';
import { NavLink } from 'react-router-dom';
function Welcome() {
	return (
		<React.Fragment>
			<div className="container">
				<div className="welcome ">
					<div className="row">
						<div className="col-md-3 col-sm-12 col-xs-12">
							<img src="images/welcome-1.jpg" alt="welcome" />
						</div>
						<div className="col-md-6 col-sm-12 text-center">
							<h6>- Welcome -</h6>
							<h2>Dining at Khana Khazana</h2>
							<p>
								For a truly memorable dining experience, cuisine and atmosphere are paired as
								thoughtfully as food and wine. our resturant is the best resturant in new Delhi. we give
								you best food and tasty food at effordable price
							</p>
							<NavLink to="reservation">
								<button className="booking">Book A Table</button>
							</NavLink>
						</div>
						<div className="col-md-3 col-sm-12 col-xs-12">
							<img src="images/welcome-2.jpg" alt="welcome" />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Welcome;
