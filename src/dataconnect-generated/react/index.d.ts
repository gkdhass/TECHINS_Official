import { CreateNewCourseData, CreateNewCourseVariables, ListAvailableCoursesData, EnrollUserInCourseData, EnrollUserInCourseVariables, GetEnrolledCoursesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewCourse(options?: useDataConnectMutationOptions<CreateNewCourseData, FirebaseError, CreateNewCourseVariables>): UseDataConnectMutationResult<CreateNewCourseData, CreateNewCourseVariables>;
export function useCreateNewCourse(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewCourseData, FirebaseError, CreateNewCourseVariables>): UseDataConnectMutationResult<CreateNewCourseData, CreateNewCourseVariables>;

export function useListAvailableCourses(options?: useDataConnectQueryOptions<ListAvailableCoursesData>): UseDataConnectQueryResult<ListAvailableCoursesData, undefined>;
export function useListAvailableCourses(dc: DataConnect, options?: useDataConnectQueryOptions<ListAvailableCoursesData>): UseDataConnectQueryResult<ListAvailableCoursesData, undefined>;

export function useEnrollUserInCourse(options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;
export function useEnrollUserInCourse(dc: DataConnect, options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;

export function useGetEnrolledCourses(options?: useDataConnectQueryOptions<GetEnrolledCoursesData>): UseDataConnectQueryResult<GetEnrolledCoursesData, undefined>;
export function useGetEnrolledCourses(dc: DataConnect, options?: useDataConnectQueryOptions<GetEnrolledCoursesData>): UseDataConnectQueryResult<GetEnrolledCoursesData, undefined>;
