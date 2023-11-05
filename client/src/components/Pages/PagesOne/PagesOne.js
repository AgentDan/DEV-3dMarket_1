import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const PagesOne = () => {

    const [userDB, setUserDB] = useState([])

    const getKey = useCallback(async () => {
        try {
            await axios.get('/api/', {
                headers: {
                    'Content-Type': 'application/json'
                },
                // params: {userId}
            })
                .then((response) => setUserDB(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getKey()
    }, [getKey])

    return (
        <div>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2">

                    {
                        userDB.map((data, index) => {
                            return (
                                <div key={index}>
                                    <Link to={`/single/${data._id}`}>
                                        <div
                                            className="m-2 bg-white rounded-lg shadow-xl hover:drop-shadow-xl cursor-pointer lg:flex lg:max-w-lg">
                                            <img
                                                src={"/uploads/" + data.img}
                                                className="w-40 h-40 rounded-l-2xl "
                                            />
                                            <div className="p-6 bg-gray-50">
                                                <h2 className="mb-2 text-2xl font-bold text-gray-900">{data.title}</h2>
                                                <p className="text-gray-600 text-xs">ID project: {data._id}</p>
                                                <p className="text-gray-600 text-xs">ID user: {data.owner}</p>
                                                <p className="text-xl">Author: {data.author}</p>
                                                <p className="text-xl">Designer: {data.designer}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default PagesOne;