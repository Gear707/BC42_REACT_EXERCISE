import React, { useEffect, useState } from 'react';

function PhoneForm({ phone, onSubmit, onReset }) {
    // state of managing input values in the form
    const [values, setValues] = useState({
        name: "",
        type: "0",
        desc: "",
        img: "",
        price: ""
    });

    useEffect(() => {
        setValues(phone);
    }, [phone]);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(values);

        handleResetForm();
    };

    const handleResetForm = () => {
        setValues({
            name: "",
            type: "0",
            desc: "",
            img: "",
            price: ""
        });
        onReset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={values.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Type</label>
                <select className="form-select" name="type" value={values.type} onChange={handleChange} >
                    <option disabled value="0">Select brand</option>
                    <option>APPLE</option>
                    <option>SAMSUNG</option>
                    <option>GOOGLE</option>
                    <option>Others</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" name="desc" value={values.desc} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="text" name="img" value={values.img} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="text" name="price" value={values.price} onChange={handleChange} className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={handleResetForm}>Clear All</button>
        </form>
    )
}

export default PhoneForm;