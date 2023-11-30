import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [fname, setFname] = useState("");

  const [file, setFile] = useState("");

  const history = useNavigate();

  const setData = (e) => {
    const { value } = e.target;
    setFname(value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }
  // adduser data
  const addUser = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append('photo', file);
    formData.append('fname', fname);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const res = await axios.post("http://localhost:8008/register", formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("errror")
    } else {
      history("/")
    }
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Image Here</h1>
        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" name='fname' onChange={setData} placeholder="Enter your good name.." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select your image</Form.Label>
            <Form.Control type="file" onChange={setimgfile} name='photo' placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addUser}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register