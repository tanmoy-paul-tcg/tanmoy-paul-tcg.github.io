import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwujDxzfQlp_f0sV6qA0Ap-EdAPOMOAjfPA77YYBykbt0FCWWVtTtqyuUxLVBMj4FBldg/exec';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Message sent successfully!');
        setTimeout(() => setMessage(''), 5000);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error!', error);
      setMessage('Failed to send message. Please try again.');
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Contact us</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <Form id="contact-form" name="google-sheet" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your name</Form.Label>
            <Form.Control 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name" 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your email address</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="someone@example.com" 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message for Dr.Tanmoy Paul" 
              required 
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      {message && <p id="msg">{message}</p>}
      <style>
        {`
          h1 {
            font-size: 50px;
            font-weight: bold;
          }
        `}
      </style>
    </Container>
  );
};

export default Contact;
