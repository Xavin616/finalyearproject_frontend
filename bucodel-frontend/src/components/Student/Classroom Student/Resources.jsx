import React, { useEffect, useState } from 'react'
import '../css/resources.css'
import { MdOutlineAssignment } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import moment from 'moment';
import axios from 'axios';
import config from '../../../config';
import EmptyResources from './EmptyResource';


const Resources = ({ resources, course, empty }) => {
  return (
    <div className='resources'>
      {empty ? (<div className="resourcesContainer">
        {resources.map((p) => (
          <Resource resource={p} key={p._id} course={course} />
        ))}
      </div>
      ) : (<EmptyResources />)}
    </div>
  )
}

const Resource = ({ resource, course }) => {
  const formattedDate = moment(resource.createdAt).format("Do MMM, h:mm a");

  return (
    <div className="resource">
      <div className="color1">
        <div className='flexRow'>
          <MdOutlineAssignment className='icon8' />
          <div className="resourceDetails">
            <h2>{resource.title}</h2>
            <h3>{`${course.courseabrev}: ${course.title}`}</h3>
          </div>
        </div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="resourceContent">
        <h4>{resource.description}</h4>
        <div className="resourceFiles">
          <div className="files">
            {resource.files.map((p) => (
              <File file={p} key={p._id} id={resource._id} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

const File = ({ file, id }) => {
  //Get class resources
  const [fileDets, setFileDets] = useState(null)
  useEffect(() => {
    const fetchFileDets = async () => {
      const res = await axios.get(`${config.baseURL}/coursematerialfile/${file}/`);
      setFileDets(res.data);
    };
    fetchFileDets();
  }, [file]);

  const handleDownload = async () => {
    const fileUrl = fileDets.fileUrl
    const fileName = fileDets.fileName
    const res = await axios.get(fileUrl, {
      responseType: 'blob'
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    const fileExt = fileUrl.substring(fileUrl.lastIndexOf('.') + 1);
    link.setAttribute('download', `${fileName}.${fileExt}`);
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className="file">
      {fileDets && <>
        <GrDocumentPdf className='icon8 red1' />
        <div className="filename" onClick={handleDownload}>
          <h2>{fileDets.fileName}</h2>
          <h3>PDF</h3>
        </div>
      </>}
    </div>
  )
}


export default Resources