import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

export default function AdminHeader() {
  return (
    <div className='page-header-root'>
        <div className='page-header-logo'>
          <div className="logo">
            <div className="logoImg">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
            </div>
            <div className="logoText">
                <h3>BUCODeL</h3>
                <h5>Student</h5>
            </div>
          </div>
        </div>
        <div className='page-header-menu'>
          <div className="classroomContainer">
            <div className="util">
              <FaRegUserCircle className='icon1' />
              <div>
                <h3>Izu Onisokumen Preye</h3>
                <h5>19/1485</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
