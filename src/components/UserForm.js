import React from "react";

const UserForm = () => {
    function handleClick(e) {
        e.preventDefault();

        var form = document.getElementById("user-form");
        [...form.elements].map((val) => console.log(val.type));
        // const data = getFormDataAsJSON(form);
    }

    return (
        <form id="user-form" className="user-form">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputName4">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName4"
                        name="name"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputLastName4">LastName</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName4"
                        name="lastName"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        name="email"
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputNumber">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhoneNumber"
                        name="phone"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
            >
                Sign in
            </button>
        </form>
    );
};

export default UserForm;
