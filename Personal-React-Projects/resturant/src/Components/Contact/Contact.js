import React from 'react';

function Contact() {
	return (
		<React.Fragment>
			<div className="container">
				<div className="connect">
					<div className="row">
						<div className="col-md-6">
							<div className="conect">
								<h3>
									Our restaurant space is located right in the<br /> heart of the city. you can find
									us easily<br /> near main road.
								</h3>
								<h5>- location -</h5>
								<p>
									58 chadni chowk<br />New Delhi, India 84004
								</p>
								<h5>- CONTACT -</h5>
								<p>
									+91 444 444 444<br />contact@example.com
								</p>
								<h5>- OPEN HOURS -</h5>
								<p>
									Monday-Sunday:<br />Lunch: 12PM – 2PM<br />Dinner: 6PM – 10PM
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<form>
								<div className="form-group">
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										placeholder="Your Message"
										id="exampleFormControlTextarea1"
										rows="3"
									/>
								</div>
								<button className="booking">Book A Table</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Contact;
