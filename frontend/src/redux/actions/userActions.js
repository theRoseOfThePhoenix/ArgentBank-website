import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
};

// Création du slice userProfile qui contient le nom, l'état initial et les reducers
const userProfileSlice = createSlice({
  name: "userProfile", // Nom du slice, utilisé pour référencer ce morceau du store
  initialState,
  reducers: {
    // Reducer pour définir le profil utilisateur
    // Déstructuration de payload directement dans les paramètres pour accès direct aux champs firstName et lastName
    setUserProfile: (state, { payload: { firstName, lastName } }) => {
      state.firstName = firstName; // Mise à jour du prénom dans l'état du store
      state.lastName = lastName; // Mise à jour du nom dans l'état du store
    },
    // Reducer pour réinitialiser le profil utilisateur à ses valeurs initiales
    resetUserProfile: (state) => {
      state.firstName = ""; // Réinitialise le prénom à une chaîne vide
      state.lastName = ""; // Réinitialise le nom à une chaîne vide
    },
  },
});

// Exportation des actions pour permettre leur utilisation à l'extérieur du module
export const { setUserProfile, resetUserProfile } = userProfileSlice.actions;

// Exportation du reducer pour intégration au store global
export default userProfileSlice.reducer;
// Profile - Actions //

// Action Types
export const SET_PROFILE = "USER_PROFILE";
export const UPDATE_USERNAME = "UPDATE_USER_NAME";
export const PROFILE_ERROR = "PROFILE_ERROR";

// Helper pour obtenir le token //
const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

// Action pour récupérer le profil de l'utilisateur //
export const fetchUserProfile = () => async (dispatch) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const userProfile = await response.json();
    dispatch({
      type: SET_PROFILE,
      payload: userProfile.body,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: PROFILE_ERROR,
      payload: error.message,
    });
  }
};

// Action pour mettre à jour le nom d'utilisateur //
export const updateUserName = (userName) => async (dispatch) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    });

    if (!response.ok) {
      throw new Error("Failed to update user name");
    }

    dispatch({
      type: UPDATE_USERNAME,
      payload: userName,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: PROFILE_ERROR,
      payload: error.message,
    });
  }
};
