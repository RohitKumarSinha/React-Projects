import React from 'react';

function Behind() {
	return (
		<React.Fragment>
			<div className="container text-center">
				<div className="behind">
					<div className="row">
						<div className=" col-md-5 ">
							<div className="scenes">
								<h6>- BEHIND THE SCENES -</h6>
								<h2>The Team</h2>
								<p>
									For a truly memorable dining experience, cuisine and atmosphere are paired as
									thoughtfully as food and wine. we deliver best quality food and best quality wine.
									our food is 100% organic and fresh. we deliver food 24 * 7.
								</p>
							</div>
						</div>
						<div className="col-sm-6 col-md-3 ">
							<img src="images/home-team-1.jpg" alt="team" />
						</div>
						<div className="col-sm-6 col-md-2 offset-md-1">
							<img src="images/home-team-2.jpg" alt="team" />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Behind;
