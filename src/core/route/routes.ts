const BASE_ROOT = "/" as const;

const ROUTES = {
  HOME: BASE_ROOT,
  LOGIN: `${BASE_ROOT}login`,
  SETTINGS: `${BASE_ROOT}settings`,
  PROJECTS: `${BASE_ROOT}projects`,
  MY_PROJECT: `${BASE_ROOT}my-project`,
  PROJECT_DETAILS: `${BASE_ROOT}project-details/:id`,
  ANNOUNCEMENT: `${BASE_ROOT}announcement`,
  DOCUMENTS: `${BASE_ROOT}my-project/documents`
} as const;

export default ROUTES;
