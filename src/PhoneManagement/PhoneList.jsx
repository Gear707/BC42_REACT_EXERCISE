import React from 'react';

function PhoneList({ phones, onSelectPhone, onDeletePhone }) {
    return (
        <table className="table">
            <thead className="table-info">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Image/Photo</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {phones.map((phone) => {
                    return (
                        <tr key={phone.id}>
                            <td>{phone.name}</td>
                            <td>{phone.type}</td>
                            <td>{phone.desc}</td>
                            <td>
                                <img src={phone.img} width={100} alt={phone.name} />
                            </td>
                            <td>${phone.price}</td>
                            <td>
                                <button className="btn btn-warning"
                                    onClick={() => onSelectPhone(phone)}>Edit</button>
                                <button className="btn btn-danger ms-2"
                                    onClick={() => onDeletePhone(phone.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default PhoneList;