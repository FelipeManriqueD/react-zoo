export const initialState = {
  animals: [],
  animalInfo: {},
  openAnimalDialog: false,
  openSnackbar: false,
  snackbarMessage: "",
  isAnimalInfoToUpdate: true,
};

// Define reducer function
export const animalsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ANIMALS":
      return { ...state, animals: action.payload };
    case "SET_ANIMAL_INFO":
      return { ...state, animalInfo: action.payload };
    case "SET_OPEN_ANIMAL_DIALOG":
      return { ...state, openAnimalDialog: action.payload };
    case "SET_OPEN_SNACKBAR":
      return { ...state, openSnackbar: action.payload };
    case "SET_SNACKBAR_MESSAGE":
      return { ...state, snackbarMessage: action.payload };
    case "SET_IS_ANIMAL_INFO_TO_UPDATE":
      return { ...state, isAnimalInfoToUpdate: action.payload };
    default:
      return state;
  }
};
