# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListAvailableCourses*](#listavailablecourses)
  - [*GetEnrolledCourses*](#getenrolledcourses)
- [**Mutations**](#mutations)
  - [*CreateNewCourse*](#createnewcourse)
  - [*EnrollUserInCourse*](#enrolluserincourse)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListAvailableCourses
You can execute the `ListAvailableCourses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAvailableCourses(): QueryPromise<ListAvailableCoursesData, undefined>;

interface ListAvailableCoursesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAvailableCoursesData, undefined>;
}
export const listAvailableCoursesRef: ListAvailableCoursesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAvailableCourses(dc: DataConnect): QueryPromise<ListAvailableCoursesData, undefined>;

interface ListAvailableCoursesRef {
  ...
  (dc: DataConnect): QueryRef<ListAvailableCoursesData, undefined>;
}
export const listAvailableCoursesRef: ListAvailableCoursesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAvailableCoursesRef:
```typescript
const name = listAvailableCoursesRef.operationName;
console.log(name);
```

### Variables
The `ListAvailableCourses` query has no variables.
### Return Type
Recall that executing the `ListAvailableCourses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAvailableCoursesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListAvailableCourses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAvailableCourses } from '@dataconnect/generated';


// Call the `listAvailableCourses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAvailableCourses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAvailableCourses(dataConnect);

console.log(data.courses);

// Or, you can use the `Promise` API.
listAvailableCourses().then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

### Using `ListAvailableCourses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAvailableCoursesRef } from '@dataconnect/generated';


// Call the `listAvailableCoursesRef()` function to get a reference to the query.
const ref = listAvailableCoursesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAvailableCoursesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.courses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

## GetEnrolledCourses
You can execute the `GetEnrolledCourses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEnrolledCourses(): QueryPromise<GetEnrolledCoursesData, undefined>;

interface GetEnrolledCoursesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEnrolledCoursesData, undefined>;
}
export const getEnrolledCoursesRef: GetEnrolledCoursesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEnrolledCourses(dc: DataConnect): QueryPromise<GetEnrolledCoursesData, undefined>;

interface GetEnrolledCoursesRef {
  ...
  (dc: DataConnect): QueryRef<GetEnrolledCoursesData, undefined>;
}
export const getEnrolledCoursesRef: GetEnrolledCoursesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEnrolledCoursesRef:
```typescript
const name = getEnrolledCoursesRef.operationName;
console.log(name);
```

### Variables
The `GetEnrolledCourses` query has no variables.
### Return Type
Recall that executing the `GetEnrolledCourses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEnrolledCoursesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetEnrolledCourses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEnrolledCourses } from '@dataconnect/generated';


// Call the `getEnrolledCourses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEnrolledCourses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEnrolledCourses(dataConnect);

console.log(data.enrollments);

// Or, you can use the `Promise` API.
getEnrolledCourses().then((response) => {
  const data = response.data;
  console.log(data.enrollments);
});
```

### Using `GetEnrolledCourses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEnrolledCoursesRef } from '@dataconnect/generated';


// Call the `getEnrolledCoursesRef()` function to get a reference to the query.
const ref = getEnrolledCoursesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEnrolledCoursesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.enrollments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollments);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewCourse
You can execute the `CreateNewCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewCourse(vars: CreateNewCourseVariables): MutationPromise<CreateNewCourseData, CreateNewCourseVariables>;

interface CreateNewCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewCourseVariables): MutationRef<CreateNewCourseData, CreateNewCourseVariables>;
}
export const createNewCourseRef: CreateNewCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewCourse(dc: DataConnect, vars: CreateNewCourseVariables): MutationPromise<CreateNewCourseData, CreateNewCourseVariables>;

interface CreateNewCourseRef {
  ...
  (dc: DataConnect, vars: CreateNewCourseVariables): MutationRef<CreateNewCourseData, CreateNewCourseVariables>;
}
export const createNewCourseRef: CreateNewCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewCourseRef:
```typescript
const name = createNewCourseRef.operationName;
console.log(name);
```

### Variables
The `CreateNewCourse` mutation requires an argument of type `CreateNewCourseVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewCourseVariables {
  title: string;
  description: string;
  difficultyLevel: string;
  status: string;
}
```
### Return Type
Recall that executing the `CreateNewCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewCourseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewCourseData {
  course_insert: Course_Key;
}
```
### Using `CreateNewCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewCourse, CreateNewCourseVariables } from '@dataconnect/generated';

// The `CreateNewCourse` mutation requires an argument of type `CreateNewCourseVariables`:
const createNewCourseVars: CreateNewCourseVariables = {
  title: ..., 
  description: ..., 
  difficultyLevel: ..., 
  status: ..., 
};

// Call the `createNewCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewCourse(createNewCourseVars);
// Variables can be defined inline as well.
const { data } = await createNewCourse({ title: ..., description: ..., difficultyLevel: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewCourse(dataConnect, createNewCourseVars);

console.log(data.course_insert);

// Or, you can use the `Promise` API.
createNewCourse(createNewCourseVars).then((response) => {
  const data = response.data;
  console.log(data.course_insert);
});
```

### Using `CreateNewCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewCourseRef, CreateNewCourseVariables } from '@dataconnect/generated';

// The `CreateNewCourse` mutation requires an argument of type `CreateNewCourseVariables`:
const createNewCourseVars: CreateNewCourseVariables = {
  title: ..., 
  description: ..., 
  difficultyLevel: ..., 
  status: ..., 
};

// Call the `createNewCourseRef()` function to get a reference to the mutation.
const ref = createNewCourseRef(createNewCourseVars);
// Variables can be defined inline as well.
const ref = createNewCourseRef({ title: ..., description: ..., difficultyLevel: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewCourseRef(dataConnect, createNewCourseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.course_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.course_insert);
});
```

## EnrollUserInCourse
You can execute the `EnrollUserInCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
enrollUserInCourse(vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface EnrollUserInCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
enrollUserInCourse(dc: DataConnect, vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface EnrollUserInCourseRef {
  ...
  (dc: DataConnect, vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the enrollUserInCourseRef:
```typescript
const name = enrollUserInCourseRef.operationName;
console.log(name);
```

### Variables
The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface EnrollUserInCourseVariables {
  courseId: UUIDString;
}
```
### Return Type
Recall that executing the `EnrollUserInCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `EnrollUserInCourseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface EnrollUserInCourseData {
  enrollment_insert: Enrollment_Key;
}
```
### Using `EnrollUserInCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, enrollUserInCourse, EnrollUserInCourseVariables } from '@dataconnect/generated';

// The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`:
const enrollUserInCourseVars: EnrollUserInCourseVariables = {
  courseId: ..., 
};

// Call the `enrollUserInCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await enrollUserInCourse(enrollUserInCourseVars);
// Variables can be defined inline as well.
const { data } = await enrollUserInCourse({ courseId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await enrollUserInCourse(dataConnect, enrollUserInCourseVars);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
enrollUserInCourse(enrollUserInCourseVars).then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

### Using `EnrollUserInCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, enrollUserInCourseRef, EnrollUserInCourseVariables } from '@dataconnect/generated';

// The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`:
const enrollUserInCourseVars: EnrollUserInCourseVariables = {
  courseId: ..., 
};

// Call the `enrollUserInCourseRef()` function to get a reference to the mutation.
const ref = enrollUserInCourseRef(enrollUserInCourseVars);
// Variables can be defined inline as well.
const ref = enrollUserInCourseRef({ courseId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = enrollUserInCourseRef(dataConnect, enrollUserInCourseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

