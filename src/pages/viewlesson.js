import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import authService from '../services/auth';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  Container,
  Content,
  Title,
  ContentImage,
  LessonImage,
  LessonTitle,
  LessonDescription,
  LessonDetails,
  ButtonGroup,
  EditButton,
  DeleteButton,
  CancelButton,
  Navigation,
  Error,
  
} from '../styles/viewlesson';

const ViewLesson = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState('');

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
      } catch (error) {
        setError('Lesson not found!');
      }
    };

    valid();
    getLesson();
  }, [id]);

  if( !authService.isAuthenticated() )
    return false;

  const handleEditClick = () => {
    window.location.href = `/updatelesson/${id}`;
  };

  const handleDeleteClick = () => {
    window.location.href = `/deletelesson/${id}`;
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
        <Title>View Lesson</Title>
        <Content>
          {lesson ? (
            <>
              <ContentImage>
                <LessonImage src={lesson.ImgLink} alt={lesson.title} />
              </ContentImage>
              <LessonTitle>{lesson.title}</LessonTitle>
              <LessonDescription>{lesson.description}</LessonDescription>
              <LessonDetails>
                <p>
                  <b>Duration:</b> {lesson.duration} minutes
                </p>
                <p>
                <b>Teacher:</b> {lesson.Teacher}
                </p>
              </LessonDetails>
              <ButtonGroup>
                <EditButton onClick={handleEditClick}>Edit</EditButton>
                <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
                <Link to="/lessons">
                  <CancelButton>Cancel</CancelButton>
                </Link>
              </ButtonGroup>
              
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

export default ViewLesson;
