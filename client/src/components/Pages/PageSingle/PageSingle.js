import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import GLTFrender from "./GLTFrender";
import PageSingleElement from "./PageSingleElement";
import {useParams, Link} from "react-router-dom";

const PageSingle = (props) => {
    const [butA, setButA] = useState(0)
    const [butB, setButB] = useState(0)
    const [butC, setButC] = useState(0)
    const singleId = useParams()
    const id = singleId.id

    const getKey = useCallback(async () => {
        try {
            await axios.get('/api/get', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {id}
            })
                .then((response) => props.setUserDB(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getKey()
    }, [getKey])

    return (
        <>
            {
                props.userDB[0]
                    ?
                    <PageSingleElement
                        setButA={setButA}
                        setButB={setButB}
                        setButC={setButC}
                        butA={butA}
                        butB={butB}
                        butC={butC}
                        userDB={props.userDB}
                    />
                    :
                    <></>
            }
        </>
    );
};

export default PageSingle;