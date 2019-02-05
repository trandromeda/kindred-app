import _ from 'underscore';

export const getLessonsState = store => store.lessons;

export const getLessonById = (store, id) => getLessonsState(store) ? 
    _.find(getLessonsState(store).byIds, lesson => {
        return lesson.id === id;
    })
  : {}