import React from 'react';

export const UserInfoForm = () => {

	const field_firstName = React.createRef();
	const field_lastName = React.createRef();
	const field_color_red = React.createRef();
	const field_color_blue = React.createRef();
	const field_color_yellow = React.createRef();
	const field_language_english = React.createRef();
	const field_language_german = React.createRef();
	const field_language_french = React.createRef();

	const handleSubmit = e => {
		console.log('field_firstName', field_firstName.current.value);
		console.log('field_lastName', field_lastName.current.value);
		console.log('field_color_red', field_color_red.current.checked);
		console.log('field_color_blue', field_color_blue.current.checked);
		console.log('field_color_yellow', field_color_yellow.current.checked);
		console.log('field_language_english', field_language_english.current.checked);
		console.log('field_language_german', field_language_german.current.checked);
		console.log('field_language_french', field_language_french.current.checked);
		e.preventDefault();
	}

	return (
		<div className="card">
			<div className="card-header">User Information</div>
			<div className="card-body">
				<div className="container px-5 my-5">
					<form id="infoForm" onSubmit={handleSubmit}>
						<div className="form-floating mb-3">
							<input className="form-control" id="firstName" type="text" placeholder="First Name" ref={field_firstName} />
							<label htmlFor="firstName">First Name</label>
						</div>
						<div className="form-floating mb-3">
							<input className="form-control" id="lastName" type="text" placeholder="Last Name" ref={field_lastName} />
							<label htmlFor="lastName">Last Name</label>
						</div>
						<div className="mb-3">
							<label className="form-label d-block">Color</label>
							<div className="form-check form-check-inline">
								<input className="form-check-input" id="red" type="radio" name="color" ref={field_color_red} />
								<label className="form-check-label" htmlFor="red">Red</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" id="blue" type="radio" name="color" ref={field_color_blue} />
								<label className="form-check-label" htmlFor="blue">Blue</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" id="yellow" type="radio" name="color" ref={field_color_yellow} />
								<label className="form-check-label" htmlFor="yellow">Yellow</label>
							</div>
						</div>
						<div className="mb-3">
							<label className="form-label d-block">Language</label>
							<div className="form-check form-check-inline">
								<input className="form-check-input" id="english" type="checkbox" name="language" ref={field_language_english} />
								<label className="form-check-label" htmlFor="english">English</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" id="german" type="checkbox" name="language" ref={field_language_german} />
								<label className="form-check-label" htmlFor="german">German</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" id="french" type="checkbox" name="language" ref={field_language_french} />
								<label className="form-check-label" htmlFor="french">French</label>
							</div>
						</div>
						<div className="d-grid">
							<button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}