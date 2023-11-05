import React from 'react';
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const Admin = () => {

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

    const deleteObject = (id) => {
        console.log(id)
    }

    useEffect(() => {
        getKey()
    }, [getKey])

    return (
        <>
            <div>
                <div className="">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto ">
                            <div className="inline-block min-w-full py-2 ">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light">
                                        <tbody>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                <input type="text" id="title"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="title" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramA"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramA" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramB"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramB" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramC"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramC" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramD"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramD" required/>
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                <input type="text" id="author"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="author" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramA"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramA" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramB"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramB" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramC"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramC" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramD"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramD" required/>
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                <input type="text" id="designer"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="designer" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramA"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramA" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramB"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramB" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramC"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramC" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramD"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramD" required/>
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                <input type="text" id="description"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="description" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramA"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramA" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramB"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramB" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramC"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramC" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramD"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramD" required/>
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                <div className="mb-3">
                                                    <input
                                                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                                        type="file"
                                                        id="formFileMultiple"
                                                        multiple/>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramA"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramA" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramB"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramB" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramC"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramC" required/>
                                            </td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <input type="text" id="paramD"
                                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                       placeholder="paramD" required/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button
                                        className="w-32 relative inline-flex items-center justify-center p-0.5 ml-6 my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                          <span
                                              className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                              Enter
                                          </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-80 mt-8 overflow-auto">
                    <table className="w-full">
                        <thead className="sticky top-0 bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">author</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">designer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {
                            userDB.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.author}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.designer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button type="button"
                                                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                                    onClick={() => deleteObject(data._id)}
                                            >
                                                X
                                            </button></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                        <tfoot className="sticky bottom-0 bg-gray-100">
                        <tr>
                            <td colSpan="6"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </>
    );
};

export default Admin;