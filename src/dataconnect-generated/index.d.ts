import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Course_Key {
  id: UUIDString;
  __typename?: 'Course_Key';
}

export interface CreateNewCourseData {
  course_insert: Course_Key;
}

export interface CreateNewCourseVariables {
  title: string;
  description: string;
  difficultyLevel: string;
  status: string;
}

export interface EnrollUserInCourseData {
  enrollment_insert: Enrollment_Key;
}

export interface EnrollUserInCourseVariables {
  courseId: UUIDString;
}

export interface Enrollment_Key {
  userId: UUIDString;
  courseId: UUIDString;
  __typename?: 'Enrollment_Key';
}

export interface GetEnrolledCoursesData {
  enrollments: ({
    course: {
      id: UUIDString;
      title: string;
      description: string;
      difficultyLevel: string;
    } & Course_Key;
      enrolledAt: TimestampString;
      completedAt?: TimestampString | null;
      grade?: number | null;
      progressPercentage: number;
  })[];
}

export interface Lesson_Key {
  id: UUIDString;
  __typename?: 'Lesson_Key';
}

export interface ListAvailableCoursesData {
  courses: ({
    id: UUIDString;
    title: string;
    description: string;
    difficultyLevel: string;
    instructor?: {
      id: UUIDString;
      displayName: string;
    } & User_Key;
  } & Course_Key)[];
}

export interface Module_Key {
  id: UUIDString;
  __typename?: 'Module_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateNewCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewCourseVariables): MutationRef<CreateNewCourseData, CreateNewCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewCourseVariables): MutationRef<CreateNewCourseData, CreateNewCourseVariables>;
  operationName: string;
}
export const createNewCourseRef: CreateNewCourseRef;

export function createNewCourse(vars: CreateNewCourseVariables): MutationPromise<CreateNewCourseData, CreateNewCourseVariables>;
export function createNewCourse(dc: DataConnect, vars: CreateNewCourseVariables): MutationPromise<CreateNewCourseData, CreateNewCourseVariables>;

interface ListAvailableCoursesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAvailableCoursesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAvailableCoursesData, undefined>;
  operationName: string;
}
export const listAvailableCoursesRef: ListAvailableCoursesRef;

export function listAvailableCourses(): QueryPromise<ListAvailableCoursesData, undefined>;
export function listAvailableCourses(dc: DataConnect): QueryPromise<ListAvailableCoursesData, undefined>;

interface EnrollUserInCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
  operationName: string;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;

export function enrollUserInCourse(vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;
export function enrollUserInCourse(dc: DataConnect, vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface GetEnrolledCoursesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEnrolledCoursesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetEnrolledCoursesData, undefined>;
  operationName: string;
}
export const getEnrolledCoursesRef: GetEnrolledCoursesRef;

export function getEnrolledCourses(): QueryPromise<GetEnrolledCoursesData, undefined>;
export function getEnrolledCourses(dc: DataConnect): QueryPromise<GetEnrolledCoursesData, undefined>;

