import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'star-skill-port',
  location: 'us-east4'
};

export const createNewCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewCourse', inputVars);
}
createNewCourseRef.operationName = 'CreateNewCourse';

export function createNewCourse(dcOrVars, vars) {
  return executeMutation(createNewCourseRef(dcOrVars, vars));
}

export const listAvailableCoursesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAvailableCourses');
}
listAvailableCoursesRef.operationName = 'ListAvailableCourses';

export function listAvailableCourses(dc) {
  return executeQuery(listAvailableCoursesRef(dc));
}

export const enrollUserInCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'EnrollUserInCourse', inputVars);
}
enrollUserInCourseRef.operationName = 'EnrollUserInCourse';

export function enrollUserInCourse(dcOrVars, vars) {
  return executeMutation(enrollUserInCourseRef(dcOrVars, vars));
}

export const getEnrolledCoursesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnrolledCourses');
}
getEnrolledCoursesRef.operationName = 'GetEnrolledCourses';

export function getEnrolledCourses(dc) {
  return executeQuery(getEnrolledCoursesRef(dc));
}

