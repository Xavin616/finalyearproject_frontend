import { TextareaAutosize, Modal, Button, IconButton } from '@mui/material'
import React from 'react';
import './css/createassignmentmodal.css'
import { GrClose } from 'react-icons/gr';

function CreateAssignmentModal({ open, setOpen }) {
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className='assign-modal-root'>
                    <div className='assign-modal-header'>
                        <div className='assign-modal-title'>Assignment</div>
                        <div className='assign-modal-cancel'>
                            <IconButton onClick={() => setOpen(false)}>
                                <GrClose className='assign-modal-cancel' />
                            </IconButton>
                        </div>
                    </div>
                    <div className='assign-modal-body'>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Course
                            </label>
                            <select className='assign-modal-input-tag'>
                                <option>SENG 302</option>
                                <option>SENG 302</option>
                                <option>SENG 302</option>
                                <option>SENG 302</option>
                            </select>
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Title
                            </label>
                            <input className='assign-modal-input-tag' type={'text'} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Date
                            </label>
                            <input className='assign-modal-input-tag' type={'date'} value={"2023-03-12"} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Time
                            </label>
                            <input className='assign-modal-input-tag' type={'time'} />
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Marks
                            </label>
                            <input className='assign-modal-input-tag' type={'number'} defaultValue={50} min={1} max={100} />
                            <span className='assign-input-description'>Select the amount you want to assign</span>
                        </div>
                        <div className='assign-modal-input'>
                            <label className='assign-modal-input-label'>
                                Description
                            </label>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                className='assign-modal-input-tag'
                            />
                        </div>
                        <div className='assign-modal-input'>
                            <div className='assign-add-file'>
                                <Button sx={{ textTransform: 'none' }} variant='contained' className='assign-add-file-btn'>Add file</Button>
                            </div>
                        </div>
                        <div className='assign-bottom-btn'>
                            <Button onClick={handleClose} className='assign-main-btn' sx={{ textTransform: 'none' }} variant='outlined'>Cancel</Button>
                            <Button className='assign-main-btn' sx={{ textTransform: 'none' }} variant='contained'>Post</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CreateAssignmentModal