import React from 'react';

export const USERS = [
    "MEMBER", 
    "WORKER", 
    "PASTOR", 
    "VISITOR"
];

export default function RegisterUserType(props) {
    const { setUserType } = props;
    return (
        <>
            <div className="middle-conatiner">
                <div className="register-user-header">
                    REGISTER AS
                </div>
                <div className="register-user-body">
                    {USERS.map((user, i) =>
                        <button
                            key={i}
                            className="register-user-button"
                            onClick={() => setUserType(user)}
                        >
                            {user}
                        </button>
                    )}


                </div>
            </div>
        </>
    )
}