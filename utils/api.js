import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "./init";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const createTime = async (time) => {
  const { s, e } = time;
  try {
    const docRef = await addDoc(collection(db, "times"), {
      s: s,
      e: e,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const createSlot = async (slot) => {
  const { name, type, venue, time } = slot;
  try {
    const docRef = await addDoc(collection(db, "slots"), {
      name,
      type,
      venue,
      time,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const createDay = async (timeTable) => {
  const { day, slots } = timeTable;
  try {
    const docRef = await addDoc(collection(db, "days"), {
      day,
      slots,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const createTimetable = async (timeTable)=>{
  
}

export const getTimetable = async (group) => {
  try {
    const timetablesRef = collection(db, "timetables");
    const q = query(timetablesRef, where("group", "==", group));

    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    const [doc] = docs;
    return doc;
  } catch (e) {
    console.log("Error Retrieving Timetables", e);
  }
};

export const getSlotsForToday = async (group) => {
  const { days } = await getTimetable(group);
  

  const today = getToday();
  if (today == 'sunday' || today == 'saturday') {
    return [];
  }else{

    const {slots} = days.find((day) => {
      return day.day === today;
    });
    return {today, slots};
  }

};

export const getToday = ()=>{
  const today = ['sunday','monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'thursday'][(new Date()).getDay()];
  return today;
}

export const getDayFromTimetable = (timeTable, selectedDay) =>{
  const { days } = timeTable;
  const {slots} = days.find((day) => {
    return day.day === selectedDay;
  });
  return {selectedDay, slots};
}

