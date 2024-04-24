import React, { useEffect, useState } from 'react'

function Header(props) {
    const [userData, setUserData] = useState('')
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('loginUser')) || null;
        setUserData(user)
    }, [])
    const onClickLogout = () => {
        localStorage.removeItem('loginUser')
        props.navigate('/')
    }
    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='container'>
                    <div className='d-flex justify-content-between p-3 '>
                        <div>MineCart</div>
                        <div>
                            {userData?.name} <span className='badge bg-danger ms-3' onClick={onClickLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header