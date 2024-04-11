import React, { useEffect, useReducer, useState } from "react";
import moment from "moment";
import {
  DataGrid,
  GridToolbarFilterButton,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import Snackbar from '@mui/material/Snackbar';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  deleteAnimal,
  getAnimals,
  updateAnimalCheckup,
} from "../services/animals";
import { dateOptions } from "../services/constants";
import Animal from "./Animal";
import { animalsReducer, initialState } from "../reducers/animals";

export default function AnimalList() {
  const [state, dispatch] = useReducer(animalsReducer, initialState);
  // Destructure state
  const { animals, animalInfo, openAnimalDialog, openSnackbar, snackbarMessage, isAnimalInfoToUpdate } = state;

  const fetchAnimals = async () => {
    try {
      const animalsData = await getAnimals();
      dispatch({ type: 'SET_ANIMALS', payload: animalsData });
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  const handleUpdateAnimalInfo = (animalID) => {
    const animal = animals.find((animal) => animal.id === animalID);
    dispatch({ type: 'SET_OPEN_ANIMAL_DIALOG', payload: true });
    dispatch({ type: 'SET_ANIMAL_INFO', payload: animal });
  };

  const handleDeleteClick = async (animalID) => {
    try {
      const response = await deleteAnimal(animalID);
      const filterAnimalsById = animals.filter(
        (animal) => animal.id !== animalID
      );
      if (response.ok) {
        dispatch({ type: 'SET_OPEN_SNACKBAR', payload: true });
        dispatch({ type: 'SET_SNACKBAR_MESSAGE', payload: `Animal with ID ${animalID} deleted successfully` });
        dispatch({ type: 'SET_ANIMALS', payload: filterAnimalsById });
      }
    } catch (error) {
      console.error(`Error deleting animal with id ${error}`);
    }
  };

  const handleAnimalInfo = (animalID) => {
    const animal = animals.find((animal) => animal.id === animalID);
    dispatch({ type: 'SET_OPEN_ANIMAL_DIALOG', payload: true });
    dispatch({ type: 'SET_ANIMAL_INFO', payload: animal });
    dispatch({ type: 'SET_IS_ANIMAL_INFO_TO_UPDATE', payload: false });
  };

  const handleAnimalDialogClose = async (animalInfoToUpdate) => {
    const { nextCheckup, animalID } = animalInfoToUpdate;
    dispatch({ type: 'SET_OPEN_ANIMAL_DIALOG', payload: false });
    const nextCheckupDate = moment(nextCheckup).utc().format("YYYY-MM-DD");
    const animal = animals.find((animal) => animal.id === animalID);

    try {
      const response = await updateAnimalCheckup({
        nextCheckupDate,
        animal,
      });
      if (response.ok) {
        dispatch({ type: 'SET_SNACKBAR_MESSAGE', payload: `Animal with ID ${animalID} updated successfully`});
        dispatch({ type: 'SET_OPEN_SNACKBAR', payload: false });
        fetchAnimals();
      }
    } catch (error) {
      console.error(`Error updating animal with id ${error}`);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({ type: 'SET_OPEN_SNACKBAR', payload: false });
  };

  return (
    <>
      <DataGrid
        autoHeight
        columns={[
          {
            field: "type",
            headerName: "Type",
            sortable: false,
            flex: 1,
            minWidth: 150,
          },
          {
            field: "name",
            headerName: "Name",
            filterable: false,
            flex: 1,
            minWidth: 150,
          },
          {
            field: "age",
            headerName: "Age",
            filterable: false,
            flex: 1,
            minWidth: 150,
          },
          {
            field: "next_checkup",
            flex: 1,
            minWidth: 150,
            headerName: "Next Checkup",
            filterable: false,
            sortable: false,
            valueGetter: (value) =>
              new Date(value).toLocaleString("en-US", dateOptions),
          },
          {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            cellClassName: "actions",
            flex: 1,
            minWidth: 150,
            getActions: ({ id }) => {
              return [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Update"
                  className="textPrimary"
                  onClick={() => handleUpdateAnimalInfo(id)}
                  color="inherit"
                  key="update"
                />,
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={() => handleDeleteClick(id)}
                  color="inherit"
                  key="delete"
                />,
                <GridActionsCellItem
                  icon={<VisibilityIcon />}
                  label="View Animal Info"
                  onClick={() => handleAnimalInfo(id)}
                  color="inherit"
                  key="view"
                />,
              ];
            },
          },
        ]}
        rows={animals}
        slots={{ toolbar: GridToolbarFilterButton }}
      />
      <Animal
        animal={animalInfo}
        open={openAnimalDialog}
        onClose={handleAnimalDialogClose}
        isAnimalInfoToUpdate={isAnimalInfoToUpdate}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}
