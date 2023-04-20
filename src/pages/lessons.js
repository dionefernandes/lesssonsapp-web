import React, { useEffect, useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrashAlt, FaEye, FaUndo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import authService from '../services/auth';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  LessonsListContainer,
  LessonsListHeader,
  LessonsListTitle,
  SearchContainer,
  SearchInput,
  SearchResetBtn,
  NewLessonButton,
  LessonsTable,
  TableHeader,
  TableData,
  ActionButtonsContainer,
  ViewButton,
  EditButton,
  DeleteButton,
  TableRow,
  ExpiredTokensLink,
  Error,
} from '../styles/lessons';

const LessonsList = () => {
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect( () => {
    const valid = async () => {
      const valid = await api.isTokenValid();

      if(!valid.status === 200) {
        window.location.href = '/';
        return false;
      }
    }
      
    const getLessons = async () => {
      try {
        const response = await api.lessonsAll();
        const allLessons = response.data;
        setLessons(allLessons);
      } catch (error) {
        setError('There was a problem trying to load the lessons!');
      }
    };

    valid();
    getLessons();
  }, []);

  if( !authService.isAuthenticated() )
    return false;

  const handleSearch = async () => {
    try {
      const response = await api.lessonByTitle(searchTerm);
      const searchedLessons = response.data;
      setLessons(searchedLessons);
    } catch (error) {
      setError('There was a problem trying to load lessons by title!');
    }
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = async () => {
    setSearchTerm('');
    try {
      const response = await api.lessonsAll();
      const allLessons = response.data;
      setLessons(allLessons);
    } catch (error) {
      setError('There was a problem trying to load the lessons!');
    }
  };

  return (
    <>
      <Header />
      <LessonsListContainer>
        <LessonsListTitle>Lessons List</LessonsListTitle>
        {error && <Error>{error}</Error>}
        <LessonsListHeader>
          <SearchContainer>
          <SearchInput type="text" placeholder="Search lessons" onChange={handleSearchInput} onKeyPress={ (e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }
            }
          />
            <SearchResetBtn onClick={handleSearch}>
              <FaSearch />
            </SearchResetBtn>
            <SearchResetBtn onClick={handleReset}>
              <FaUndo />
            </SearchResetBtn>
          </SearchContainer>
          <Link to="/newLesson">
            <NewLessonButton>
              <FaPlus />&nbsp;
              New Lesson
            </NewLessonButton>
          </Link>
        </LessonsListHeader>
        <LessonsTable>
          <thead>
            <tr>
              <TableHeader>Title</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Duration</TableHeader>
              <TableHeader>Teacher</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <TableRow key={lesson.id}>
                <TableData>{lesson.title}</TableData>
                <TableData>{lesson.description}</TableData>
                <TableData>{lesson.duration}</TableData>
                <TableData>{lesson.teacher}</TableData>
                <TableData>
                  <ActionButtonsContainer>
                    <Link to={`/viewlesson/${lesson.id}`}>
                      <ViewButton>
                        <FaEye />
                      </ViewButton>
                    </Link>
                    <Link to={`/updatelesson/${lesson.id}`}>
                      <EditButton>
                        <FaEdit />
                      </EditButton>
                    </Link>
                    <Link to={`/deletelesson/${lesson.id}`}>
                      <DeleteButton>
                        <FaTrashAlt />
                      </DeleteButton>
                    </Link>
                  </ActionButtonsContainer>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </LessonsTable>
        <ExpiredTokensLink>
          <Link to="/expiredtokens">
            Click para excluir tokens expirados
          </Link>
        </ExpiredTokensLink>
      </LessonsListContainer>
      <Footer />
    </>
  );
}

export default LessonsList;