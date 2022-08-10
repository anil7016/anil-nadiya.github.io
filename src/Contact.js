import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const API_PATH = 'http://localhost:890/nodejs/react-app/api/contact.php';


const Contact = () => {
    const [values, setValues] = useState({name:'',email:''});
    console.log('values', values)
    const set = (name) => {
        return ( { target: {value} } ) => {
            setValues(oldValues => ( {...oldValues, [name]:value} ) )
        }
    }
    const saveFormData = async () => {
        // axios({
        //     method: 'post',
        //     url: `${API_PATH}`,
        //     headers: { 'content-type': 'application/json' },
        //     data: values
        //   })
        //     .then(result => {
        //       this.setState({
        //         mailSent: result.data.sent
        //       })
        //     })
        //     .catch(error => this.setState({ error: error.message }));
        const response = await fetch(`${API_PATH}`, {
          method: 'POST',
          body: JSON.stringify(values)
        });
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`); 
        }

      }
      const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        try {
          await saveFormData();
          alert('Your registration was successfully submitted!');
          setValues({
            name: '', email: '' 
          });
        } catch (e) {
          alert(`Registration failed! ${e.message}`);
        }
      }


    return(
        <div className="section container">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={values.name} onChange={set('name')} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  value={values.email} onChange={ set('email')} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>    
    )
}

export default Contact;