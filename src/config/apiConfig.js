const apiUrl = 'http://localhost:9000/api';

export const apiPaths = {
  register: `${apiUrl}/user/register`,
  login: `${apiUrl}/user/login`,
  addNote: `${apiUrl}/note`,
  getAllNotes: `${apiUrl}/notes`,
  getAllNotesOfOneType: `${apiUrl}/notes/type`,
  getSingleNote: `${apiUrl}/note`,
  removeNote: `${apiUrl}/note`,
};
