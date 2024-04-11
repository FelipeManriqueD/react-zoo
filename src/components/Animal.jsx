import React from "react";
import moment from "moment";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomDatePicker from "./CustomDatePicker";

function AnimalCardInfo({ animal }) {
  return (
    <Card sx={{marginTop: 4}}>
      <CardContent>
        <h3>{animal?.name}</h3>
        <p>Type: {animal?.type}</p>
        <p>Monthly Food Cost: ${animal?.monthly_food_cost}</p>
        <p>Primary Crae taker: ${animal?.primary_care_taker}</p>
      </CardContent>
    </Card>
  );
}

export default function Animal(props) {
  const { onClose, animal = {}, open, isAnimalInfoToUpdate } = props;
  const [nextCheckup, setNextCheckup] = React.useState(moment());

  const handleClose = () => {
    onClose({ nextCheckup, animalID: animal?.id });
  };

  const handleDateSelected = (dateSelected) => {
    setNextCheckup(dateSelected);
  };

  console.log(animal);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Animal Selected: {animal?.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isAnimalInfoToUpdate ? "Animal's next checkup" : "Animal Info"}
        </DialogContentText>
        {isAnimalInfoToUpdate ? (
          <CustomDatePicker
            label="Choose next checkup"
            dateValue={nextCheckup}
            onChangeDate={handleDateSelected}
          />
        ) : (
          <AnimalCardInfo animal={animal} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{isAnimalInfoToUpdate ? 'Cancel' : 'Close' }</Button>
        {isAnimalInfoToUpdate && <Button onClick={handleClose} autoFocus>
          Update
        </Button>}
      </DialogActions>
    </Dialog>
  );
}
