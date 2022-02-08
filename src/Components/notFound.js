import React from "react";

function NotFound() {
	return (
		<>
			{/* Grids for mobile, tablet, laptop/desktop, and large screens */}
			{/* <div className="display-grid mobile">
				<p></p><p></p>
			</div> */}
			{/* <div className="display-grid tablet">
				<p></p><p></p><p></p><p></p>
			</div> */}
			{/* <div className="display-grid desktop">
				<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
			</div> */}
			{/* <div className="display-grid large-desktop">
				<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
			</div> */}
			
			<div className="load-container">
				<div className="load-screen1"></div>
			</div>
			<main className="Contact">
				<div className="Headd">
					<section className="project-introduction">
						<div className="container">
							<h1 className="mollie project-title">Page not found</h1>
							<h2 className="hahmlet">Sorry, couldn’t find the page you are looking for</h2>
							<a href="/" className="button-liquid">
								<span>Back to home</span>
								<div class="liquid"></div>
							</a>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}

export default NotFound;
