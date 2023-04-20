import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import authService from '../services/auth';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  Container,
  Content,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  ButtonGroup,
  SaveButton,
  CancelButton,
  Navigation,
  Message,
  Error
} from '../styles/create-update-lesson';

const UpdateLesson = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    Teacher: '',
    ImgLink: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const valid = async () => {
      const valid = await api.isTokenValid();

      if(!valid.status === 200) {
        window.location.href = '/';
        return false;
      }
    }
    
    const getLesson = async () => {
      try {
        const response = await api.lessonById(id);
        const lesson = response.data;
        setLesson(lesson);
        setFormData(lesson);
      } catch (error) {
        setError('Lesson not found!');
      }
    };
    
    valid();
    getLesson();
  }, [id]);

  if( !authService.isAuthenticated() )
    return false;
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!formData.title || formData.title === '') {
      setError('* Enter the title of the lesson.');
    } else if (!formData.duration || formData.duration === '') {
      setError('* Enter the duration of the lesson.');
    } else if (!formData.Teacher || formData.Teacher === '') {
      setError('* Enter the teacher name of the lesson.');
    } else {
      setError('');

      try {
        await api.updateLesson(formData, id);
        setMessage('The new lesson has been successfully saved!');
      } catch(error) {
        console.log(error);
      }
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
        <Title>Update Lesson</Title>
        <Content>
          {lesson ? (
            <>
              <Form onSubmit={handleSubmit}>
                <Label>Lesson title</Label>
                <Input
                  type="text"
                  placeholder="* Lesson Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <Label>Lesson description</Label>
                <TextArea
                  placeholder="Lesson Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <Label>Duration</Label>
                <Input
                  type="text"
                  placeholder="* Duration (in minutes)"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
                <Label>Teacher name</Label>
                <Input
                  type="text"
                  placeholder="* Teacher name"
                  name="Teacher"
                  value={formData.Teacher}
                  onChange={handleInputChange}
                />
                <Label>Image Link</Label>
                <Input
                  type="text"
                  placeholder="Image Link"
                  name="ImgLink"
                  value={formData.ImgLink}
                  onChange={handleInputChange}
                />
                {error && <Error>{error}</Error>}
                {message && <Message>{message}</Message>}
                <ButtonGroup>
                  <SaveButton type="submit">Update</SaveButton>

                  <Link to="/lessons">
                    <CancelButton>Cancel</CancelButton>
                  </Link>
                </ButtonGroup>
              </Form>
            </>
          ) : (
            <>
              {error && <Error>{error}</Error>}
              <p>Loading...</p>
            </>
          )}
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default UpdateLesson;
