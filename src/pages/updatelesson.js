import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const UpdateLesson = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    teacher: '',
    imgLink: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch lesson data by ID from the server and set it in the state
    const fetchLessonData = async () => {
      try {
        const response = await fetch(`/api/lessons/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch lesson data from server.');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch lesson data from server.');
      }
    };
    fetchLessonData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(`/api/lessons/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update lesson data.');
      }

      setMessage('The lesson has been successfully updated!');
    } catch (error) {
      console.error(error);
      setError('Failed to update lesson data.');
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
              <SaveButton type="submit">Update</SaveButton>

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

export default UpdateLesson;
