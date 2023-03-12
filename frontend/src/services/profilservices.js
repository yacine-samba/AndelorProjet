import Axios from "../api/axios";
import jwt_decode from "jwt-decode";

/**
 * Connexion vers l'API
 * @param {object} credentials
 * @returns {Promise}
 */
let login = (credentials) => {
  return Axios.post("/connexion", credentials);
};

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 */
let saveToken = (token) => {
  localStorage.setItem("token", token);
};
/**
 * Sauvegarde du token dans le localStorage
 * @param {string} data
 */
let saveRes = (data) => {
  localStorage.setItem("nom", data.nom);
  localStorage.setItem("prenom", data.prenom);
  localStorage.setItem("telephone", data.telephone);
  localStorage.setItem("email", data.email);
  localStorage.setItem("date", data.date_reservation);
  localStorage.setItem("heure", data.heure_reservation);
  localStorage.setItem("email", data.email);
  localStorage.setItem("nombre_billet", data.nombre_billet);
  console.log('Donnée dans localstorage');
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getNom = () => {
  return (
    localStorage.getItem("nom")
  );
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getPrenom = () => {
  return (
    localStorage.getItem("prenom")
  );
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getTelephone = () => {
  return (
    localStorage.getItem("telephone")
  );
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getEmail = () => {
  return (
    localStorage.getItem("email")
  );
};

/**
 * Récupération brut de la date en localStorage
 * @returns {string}
 */
let getDate = () => {
  const inputDate = localStorage.getItem("date");
const date = new Date(inputDate);
const options = { weekday: 'long', month: 'long', day: 'numeric' };
return date.toLocaleDateString('fr-FR', options);
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getTime = () => {
  const inputDate = localStorage.getItem("heure");
const date = new Date(inputDate);
const options = { hour: 'numeric'  };
return date.toLocaleTimeString('fr-FR', options);
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getTicket = () => {
  return (
    localStorage.getItem("nombre_billet")
  );
};

/**
 * Suppression du token du localStorage
 */
let logout = () => {
  localStorage.removeItem("token");
};

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
  return localStorage.getItem("token");
};

/**
 * Récupération du payload du tkoen
 * @returns {object}
 */
let getTokenInfo = () => {
  return jwt_decode(getToken());
};

// Déclaration des serivces pour import
export const profilservices = {
  login,
  saveToken,
  logout,
  isLogged,
  getToken,
  getTokenInfo,
  saveRes,
  getNom,
  getPrenom,
  getTelephone,
  getEmail,
  getTicket,
  getDate,
  getTime
};
