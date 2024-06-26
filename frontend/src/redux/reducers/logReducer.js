// Authentification - Reducer //

const initialState = {
  isLoggedIn: false, // Par défaut, l'utilisateur n'est pas connecté //
  user: null, // Initialement - aucun utilisateur n'est connecté //
  token: null, // Tout est vide ! //
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state, // Crée une copie de l'état existant de l'initial state //
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null, // Réinitialise le token lors de la déconnexion //
      };
    default:
      return state;
  }
};

export default authReducer;

// Lorsque l'action de type 'LOGIN' est dispatchée,
// le reducer renvoie un nouvel état où "isLoggedIn" est défini sur true pour indiquer que l'utilisateur est connecté //
