/*
  Ini constant Url, buat ngedefine Url rest API biasa
*/

const BASE_URL = "http://localhost:8000";

export const GET_FILMS = `${BASE_URL}/films`;
export const POST_BENGKEL = `${BASE_URL}/api/registerBengkel`
export const POST_SEARCH = `${BASE_URL}/api/searchSparepart`
export const GET_SPAREPART = `${BASE_URL}/api/sparepart`
