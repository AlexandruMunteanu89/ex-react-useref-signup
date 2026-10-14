import { useState } from "react";

function App() {
  
  // Campi Controllati
  const [fullName, setFullName] = useState("Hyur");
  const [username, setUsername] = useState("justHyur");
  const [password, setPassword] = useState("Password");
  const [specialization, setSpecialization] = useState("Full Stack");
  const [experienceYears, setExperienceYears] = useState("10");
  const [description, setDescription] = useState("Sono l'insegnante di questo corso");

  const handleSubmit = e => {
    e.preventDefault();
    if(
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
    ){
      alert("Errore: Compilare tutti i campi correttamente.");
      return;
    }
    console.log('Submit effettuato:', {
      fullName,
      username,
      password,
      specialization,
      experienceYears,
      description,
    });
    
  }

  return (
   <div>
    <h1>Web Developer Signup</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Nome Completo</p>
        <input
         type="text"
         value={fullName}
         onChange={(e) => setFullName(e.target.value)}
         />
      </label>
      <label>
        <p>Username</p>
        <input
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
      </label>
      <label>
        <p>Password</p>
        <input
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
      </label>
      <label>
        <p>Specializzazione</p>
        <select 
          value={specialization}
          onChange={e => setSpecialization(e.target.value)}
        >
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
      </label>
      <label>
        <p>Anni di esperienza</p>
        <input
         type="number"
         value={experienceYears}
         onChange={(e) => setExperienceYears(e.target.value)}
         />
      </label>
      <label>
        <p>Descrizione</p>
        <textarea
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         />
      </label>
      <button type="submit">Registrati</button>
    </form>
   </div>
  );
}

export default App


// 💡 Premessa: Stai sviluppando un form di registrazione per una piattaforma dedicata ai giovani sviluppatori web. Gli utenti devono iscriversi indicando le loro competenze e specializzazioni.

// 📌 Milestone 1: Creare un Form con Campi Controllati
// Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

// ✅ Nome completo (input di testo)

// ✅ Username (input di testo)

// ✅ Password (input di tipo password)

// ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")

// ✅ Anni di esperienza (input di tipo number)

// ✅ Breve descrizione sullo sviluppatore (textarea)

// ggiungi una validazione al submit, verificando che:

// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata

// Al submit, se il form è valido, stampa in console i dati