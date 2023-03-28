import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from 'react';
import PhoneForm from "./PhoneForm";
import PhoneList from "./PhoneList";
import Search from "./Search";

function PhoneManagement() {
    // state of managing the list of phones
    const [phones, setPhones] = useState([]);

    // state of managing which phone is selected
    const [selectedPhone, setSelectedPhone] = useState({});

    // state of managing searched values
    const [searchByName, setSearchByName] = useState("");

    // use sweetalert2 library to create varied alerts
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500
    });
    const alertSuccess = (text) => {
        Toast.fire({
            icon: 'success',
            title: text
        });
    };
    const alertFail = (text) => {
        Toast.fire({
            icon: 'error',
            title: text
        });
    };

    // call API to get phones data
    const fetchPhones = async () => {
        try {
            const { data: phoneData } = await axios.get(
                "https://63e86417cbdc565873852d8b.mockapi.io/api/products",
                {
                    params: {
                        name: searchByName || undefined
                    }
                }
            );
            setPhones(phoneData);
        } catch (error) {
            console.log(error);
            alertFail('Failed to load data');
        }
    };

    // add a new data or update available data
    const handleSubmit = async (phone) => {
        const { id, ...payload } = phone;

        try {
            if (id) { // update
                await axios.put(
                    `https://63e86417cbdc565873852d8b.mockapi.io/api/products/${id}`,
                    payload
                );

                await fetchPhones();

                alertSuccess('Your data has been updated');
            }
            else { // add new data
                await axios.post(
                    "https://63e86417cbdc565873852d8b.mockapi.io/api/products",
                    payload
                );

                await fetchPhones();

                alertSuccess('New data has been added');
            }
        } catch (error) {
            console.log(error);
            alertFail('Failed to add or update data');
        }
    };

    // choose whatever phone data is
    const handleSelectPhone = (phone) => {
        setSelectedPhone(phone);
    };

    // delete a phone by id
    const handleDeletePhone = async (phoneID) => {
        try {
            await axios.delete(
                `https://63e86417cbdc565873852d8b.mockapi.io/api/products/${phoneID}`
            );

            await fetchPhones();

            alertSuccess('Your data has been deleted');
        } catch (error) {
            console.log(error);
            alertFail('Failed to delete data');
        }
    };

    // search whatever input data is
    const handleSearch = (searchString) => {
        setSearchByName(searchString);
    };

    // render the data on screen
    useEffect(() => {
        fetchPhones();
    }, [searchByName])

    return (
        <div className="container-fluid">
            <h1 className="text-center text-success my-3">Phone Management</h1>

            <div className="card">
                <div className="card-header bg-dark text-white">Phone Form</div>
                <div className="card-body">
                    <PhoneForm phone={selectedPhone}
                        onSubmit={handleSubmit}
                        onReset={() => setSelectedPhone({})} />
                </div>
            </div>

            <div className="my-4">
                <Search onSearch={handleSearch} />
            </div>

            <div>
                <PhoneList phones={phones}
                    onSelectPhone={handleSelectPhone}
                    onDeletePhone={handleDeletePhone} />
            </div>
        </div>
    )
}

export default PhoneManagement;