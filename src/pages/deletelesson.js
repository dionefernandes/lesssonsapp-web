import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
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
  Warning,
  ButtonGroup,
  DeleteButton,
  CancelButton,
  Navigation,
} from '../styles/viewlesson';

const DeleteLesson = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    // Aqui viria a lógica para buscar a aula com o id recebido pelos parâmetros da URL
    // e armazenar o resultado em "lesson". Por enquanto, usaremos um objeto vazio para evitar erros.

    setLesson({
      title: 'Lesson Title',
      description: 'Lesson Description',
      duration: '60',
      teacher: 'Teacher Name',
      imgLink: 'https://nordicapis.com/wp-content/uploads/Building-a-RESTful-API-Using-Node.JS-and-MongoDB-1024x768.png',
    });
  }, [id]);

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
        <Title>Delete Lesson</Title>
        <Content>
          {lesson ? (
            <>
              <ContentImage>
                <LessonImage src={lesson.imgLink} alt={lesson.title} />
              </ContentImage>
              <LessonTitle>{lesson.title}</LessonTitle>
              <LessonDescription>{lesson.description}</LessonDescription>
              <LessonDetails>
                <p>
                  <b>Duration:</b> {lesson.duration} minutes
                </p>
                <p>
                <b>Teacher:</b> {lesson.teacher}
                </p>
              </LessonDetails>
              <Warning>
                <div>Caution!</div>
                This action cannot be undone! Do you really want to delete this lesson?
              </Warning>
              <ButtonGroup>
                <DeleteButton onClick={handleDeleteClick}>Confirm delete</DeleteButton>
                <Link to="/lessons">
                  <CancelButton>Cancel</CancelButton>
                </Link>
              </ButtonGroup>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default DeleteLesson;
