import React from 'react'
import '../css/settings.css'
import { FaUserCircle } from "react-icons/fa";


const Profile = () => {
    return (
        <div className="profile">
            <div className="personalInfo flexRow">
                <div className="personalInfoText">
                    <h4>Personal Info</h4>
                </div>
                <div className="personalInfoForm">
                    <div>
                        <h4 className="label">Name</h4>
                        <input type="text" className='mgb68' placeholder='Name' />
                    </div>
                    <h4 className="label">Email</h4>
                    <input type="text" placeholder='Email' />
                    <div>
                        <h4 className="label">Matric No</h4>
                        <input type="text" placeholder='Matric No' />
                    </div>
                </div>
            </div>
            <hr />
            <div className="academicInfo flexRow">
                <div className="personalInfoText">
                    <h4>Academic Info</h4>
                </div>
                <div className="personalInfoForm">
                    <div>
                        <h4 className="label">Department</h4>
                        <input type="text" className='mgb68' placeholder='Department' />
                    </div>

                    <h4 className="label">Level</h4>
                    <input type="text" placeholder='500' />
                    <div><h4 className="label">Programme</h4>
                        <input type="text" placeholder='Software Engineering' /></div>

                </div>
            </div>
            <hr />
            <div className="yourPhoto flexRow">
                <div className="yourPhotoText">
                    <h4>Your Photo</h4>
                    <h5>This will be displayed on your profile</h5>
                </div>
                <div className="yourPhotoPic">
                    <FaUserCircle className='icon9'/>
                </div>
                <div className="yourPhotoControls flexRow">
                    <h3 className='blue'>Delete</h3>
                    <h3>Update</h3>
                </div>
            </div>

        </div>
    )
}

export default Profile