import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBnnQSIE7HQ1OTlWtFFLO4428axkAqfHQI',
  authDomain: 'kanban-agrha.firebaseapp.com',
  databaseURL: 'https://kanban-agrha.firebaseio.com',
  projectId: 'kanban-agrha',
  storageBucket: '',
  messagingSenderId: '17992175845'
})

const db = firebaseApp.database()
export const tasksRef = db.ref('tasks')
