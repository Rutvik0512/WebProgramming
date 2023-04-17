// @ts-nocheck

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBPSCmpNBxWVO7Np7YyYU2tNarPxziwshQ",
    authDomain: "web-engineering-2931c.firebaseapp.com",
    databaseURL: "https://web-engineering-2931c-default-rtdb.firebaseio.com",
    projectId: "web-engineering-2931c",
    storageBucket: "web-engineering-2931c.appspot.com",
    messagingSenderId: "967595550196",
    appId: "1:967595550196:web:e04a68e82dd87b82f045a1"
  };

  const app = initializeApp(firebaseConfig);


 import {
 set,
 ref,
 get,
 getDatabase,
 child,
 update,
 remove,
 } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

 const db = getDatabase();
 const dbRef = ref(db);

 // References
 var nameBox = document.getElementById("name");
 var rollBox = document.getElementById("rollno");
 var branchBox = document.getElementById("branch");
 var secBox = document.getElementById("section");
 var selBtn = document.getElementById("select");
 var insBtn = document.getElementById("insert");
 var updBtn = document.getElementById("update");
 var delBtn = document.getElementById("delete");
 var clrBtn = document.getElementById("clear");
 // Insert operation
 
function insertData(){
    set(ref(db,"MyFriends/"+rollBox.value),{
        NameOfStudent: nameBox.value,
        RollNo: rollBox.value,
        Branch: branchBox.value,
        Section: secBox.value,
    })
    .then(() => alert("Data inserted Successfully"))
    .catch((err) => alert("Unsuccessful, error" + err));
}

function selectData(){
    get(child(dbRef,"MyFriends/"+rollBox.value)).then((snapshot) => {
        if(snapshot.exists()){
            nameBox.value = snapshot.val().NameOfStudent;
            branchBox.value = snapshot.val().RollNo;
            secBox.value = snapshot.val().Section;
        }
        else{
            alert("No data found");
        }
    });
}

function updateData() {
    update(ref(db, "MyFriends/" + rollBox.value), {
        NameOfStudent: nameBox.value,
        RollNo: rollBox.value,
        Branch: branchBox.value,
        Section: secBox.value,
    })
    .then(() => alert("Data updated successfully"))
    .catch((err) => alert("Unsuccessful, error" + err));
}

function deleteData() {
    remove(ref(db, "MyFriends/" + rollBox.value))
    .then(() => alert("Data deleted successfully"))
    .catch((err) => alert("Unsuccessful, error" + err));
}

function clearData() {
    (nameBox.value = ""), (rollBox.value = "");
    (branchBox.value = ""), (secBox.value = "");
}
   

 insBtn.addEventListener("click", insertData);
 selBtn.addEventListener("click", selectData);
 updBtn.addEventListener("click", updateData);
 delBtn.addEventListener("click", deleteData);
 clrBtn.addEventListener("click", clearData);
