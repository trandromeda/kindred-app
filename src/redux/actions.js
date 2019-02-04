import { ADD_REQUEST, ADD_LESSON } from "./actionTypes";

let nextLessonId = 0;

export const addRequest = content => ({
  type: ADD_REQUEST,
  payload: {
    content
  }
});

export const addLesson = (id, content) => ({
  type: ADD_LESSON,
  payload: {
    id: ++nextLessonId,
    content
  }
});
