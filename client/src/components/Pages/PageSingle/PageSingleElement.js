import React, {useState} from 'react';
import GlTFrender from "./GLTFrender";
import {Link} from "react-router-dom";

const SinglePageElement = (props) => {

    const path = props.userDB[0].fileObj

    return (
        <div>
            <div>
                <div>
                    <Link to={`/`}>
                        <a href="#"
                           className="w-32 flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 5H1m0 0 4 4M1 5l4-4"/>
                            </svg>
                            Previous
                        </a>
                    </Link>
                </div>
                <div className={"mt-6 ml-2 font-bold"}>
                    MODEL ELEMENTS
                </div>
                {
                    props.userDB.map((data, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <div className={"mt-2"}>
                                        {
                                            data.paramA.map((dataNew, index) => {
                                                let classBut = ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                if (props.butA === index) {
                                                    classBut.push("bg-gray-500 text-white")
                                                } else {
                                                    classBut.push("bg-opacity ")
                                                }
                                                return (
                                                    <div key={index}>
                                                        <button
                                                            onClick={() => props.setButA(index)}
                                                            className={classBut.join(' ')}
                                                            key={index}
                                                        >
                                                            {dataNew}
                                                        </button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={"mt-2"}>
                                        {
                                            data.paramB.map((dataNew, index) => {
                                                let classBut = ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                if (props.butB === index) {
                                                    classBut.push("bg-gray-500 text-white")
                                                } else {
                                                    classBut.push("bg-opacity ")
                                                }
                                                return (
                                                    <div key={index}>
                                                        <button
                                                            onClick={() => props.setButB(index)}
                                                            className={classBut.join(' ')}
                                                            key={index}
                                                        >
                                                            {dataNew}
                                                        </button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={"mt-2"}>
                                        {
                                            data.paramC.map((dataNew, index) => {
                                                let classBut = ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                if (props.butC === index) {
                                                    classBut.push("bg-gray-500 text-white")
                                                } else {
                                                    classBut.push("bg-opacity ")
                                                }
                                                return (
                                                    <div key={index}>
                                                        <button
                                                            onClick={() => props.setButC(index)}
                                                            className={classBut.join(' ')}
                                                            key={index}
                                                        >
                                                            {dataNew}
                                                        </button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <GlTFrender
                    userDB={props.userDB}
                    path={path}
                    butA={props.butA}
                    butB={props.butB}
                    butC={props.butC}
                />
            </div>
        </div>
    );
};

export default SinglePageElement;