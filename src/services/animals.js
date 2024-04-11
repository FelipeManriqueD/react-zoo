import { ZOO_ENDPOINT } from "./constants";

export const getAnimals = async () => {
  const res = await fetch(`${ZOO_ENDPOINT}/animals`);
  if (!res.ok) throw new Error("Error fetching");
  const data = await res.json();
  return data;
};

export const deleteAnimal = async (animalID) => {
  const res = await fetch(`${ZOO_ENDPOINT}/animals/${animalID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error deleting");
  return res;
};

export const updateAnimalCheckup = async (animalInfoToUpdate) => {
  const newAnimalData = {
    ...animalInfoToUpdate.animal,
    nextCheckup: animalInfoToUpdate.nextCheckupDate,
    next_checkup: animalInfoToUpdate.nextCheckupDate,
  };
  const res = await fetch(`${ZOO_ENDPOINT}/animals/${animalInfoToUpdate.animal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnimalData),
  });
  if (!res.ok) throw new Error("Error Updating Animal");
  return res;
};
