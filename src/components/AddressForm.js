import React from "react";

const AddressForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputCountry">Country Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCountry"
                        placeholder="MX"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Sign in
            </button>
        </form>
    );
};

export default AddressForm;
