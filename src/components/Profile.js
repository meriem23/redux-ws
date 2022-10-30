import React from "react";
import { connect } from "react-redux"

const Profile = (props) => {
    const { profile, counter } = props
    return (
        <div>
            <h1>Hello my name is {profile.firstName} and my last name is {profile.lastName}</h1>
            <h1>My age is {counter.age}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { profile, counter } = state;
    return { profile, counter }
}

export default connect(mapStateToProps)(Profile);
