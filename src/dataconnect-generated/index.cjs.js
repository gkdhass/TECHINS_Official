const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'star-skill-port',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createNewCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewCourse', inputVars);
}
createNewCourseRef.operationName = 'CreateNewCourse';
exports.createNewCourseRef = createNewCourseRef;

exports.createNewCourse = function createNewCourse(dcOrVars, vars) {
  return executeMutation(createNewCourseRef(dcOrVars, vars));
};

const listAvailableCoursesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAvailableCourses');
}
listAvailableCoursesRef.operationName = 'ListAvailableCourses';
exports.listAvailableCoursesRef = listAvailableCoursesRef;

exports.listAvailableCourses = function listAvailableCourses(dc) {
  return executeQuery(listAvailableCoursesRef(dc));
};

const enrollUserInCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'EnrollUserInCourse', inputVars);
}
enrollUserInCourseRef.operationName = 'EnrollUserInCourse';
exports.enrollUserInCourseRef = enrollUserInCourseRef;

exports.enrollUserInCourse = function enrollUserInCourse(dcOrVars, vars) {
  return executeMutation(enrollUserInCourseRef(dcOrVars, vars));
};

const getEnrolledCoursesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnrolledCourses');
}
getEnrolledCoursesRef.operationName = 'GetEnrolledCourses';
exports.getEnrolledCoursesRef = getEnrolledCoursesRef;

exports.getEnrolledCourses = function getEnrolledCourses(dc) {
  return executeQuery(getEnrolledCoursesRef(dc));
};
