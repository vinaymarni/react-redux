import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux';

function UserContainer({userData, fetchUsers}) {

    useEffect(()=>{
        fetchUsers()
    },[]);

    return userData.loading ? 
        <h2>Loading...</h2>
        : userData.error ? (
            <h2>{userData.error}</h2>
        ):(
            <div>
                <h1>User List</h1>
                {userData && userData.users && userData.users.map((users, index)=>{
                    return (
                        <p key={index}>{users.name}</p>
                    )
                }) }
            </div>
        )
};

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
