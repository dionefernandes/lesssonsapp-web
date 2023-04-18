import React from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import {
  LessonsListContainer,
  LessonsListHeader,
  LessonsListTitle,
  SearchContainer,
  SearchInput,
  SearchButton,
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
} from '../styles/lessons';

const LessonsList = () => {
  const lessons = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React',
      duration: '2h',
      teacher: 'John Doe',
    },
    {
      id: 2,
      title: 'Advanced React',
      description: 'Learn advanced concepts of React',
      duration: '4h',
      teacher: 'Jane Doe',
    },
    {
      id: 3,
      title: 'React Native',
      description: 'Learn how to build mobile apps with React Native',
      duration: '3h',
      teacher: 'John Smith',
    },
  ];

  return (
    <>
      <Header />
      <LessonsListContainer>
        <LessonsListTitle>Lessons List</LessonsListTitle>
        <LessonsListHeader>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search lessons" />
            <SearchButton>
              <FaSearch />
            </SearchButton>
          </SearchContainer>
          <NewLessonButton>
            <Link to={`/newLesson`}>
              <FaPlus />&nbsp;
              New Lesson
            </Link>
          </NewLessonButton>
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
          <Link to={`/expiredtokens`}>
            Click para excluir tokens expirados
          </Link>
        </ExpiredTokensLink>
      </LessonsListContainer>
      <Footer />
    </>
  );
}

export default LessonsList;