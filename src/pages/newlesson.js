import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  Container,
  Content,
  Title,
  Form,
  Input,
  TextArea,
  ButtonGroup,
  SaveButton,
  CancelButton,
  Navigation,
  Message,
  Error
} from '../styles/create-update-lesson';

const NewLesson = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    teacher: '',
    imgLink: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    event.preventDefault();
  
    if (!formData.title || formData.title === '') {
      setError('* Enter the title of the lesson.');
    } else if (!formData.duration || formData.duration === '') {
      setError('* Enter the duration of the lesson.');
    } else if (!formData.teacher || formData.teacher === '') {
      setError('* Enter the teacher name of the lesson.');
    } else {
      setError('');
      setMessage('The new lesson has been successfully saved!');
      console.log(formData);
    }
  };

  return (
    <>
      <Header />
      <Navigation>
        <Link to="/lessons">
          <FiArrowLeft />
        </Link>
        <span>Lessons List</span>
      </Navigation>
      <Container>
        <Title>New Lesson</Title>
        <Content>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="* Lesson Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <TextArea
              placeholder="Lesson Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="* Duration (in minutes)"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="* Teacher name"
              name="teacher"
              value={formData.teacher}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Image Link"
              name="imgLink"
              value={formData.imgLink}
              onChange={handleInputChange}
            />
            <ButtonGroup>
              <SaveButton type="submit">Save</SaveButton>

              <Link to="/lessons">
                <CancelButton>Cancel</CancelButton>
              </Link>
            </ButtonGroup>
            {error && <Error>{error}</Error>}
            {message && <Message>{message}</Message>}
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default NewLesson;