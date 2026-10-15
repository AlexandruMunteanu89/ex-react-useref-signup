import { useMemo, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-=[]{}|;:'\"\\,.<>?/`~";

function App() {
  
  // Campi Controllati
  const [fullName, setFullName] = useState("Hyur");
  const [username, setUsername] = useState("justHyur");
  const [password, setPassword] = useState("Password1234!");
  const [specialization, setSpecialization] = useState("Full Stack");
  const [experienceYears, setExperienceYears] = useState("10");
  const [description, setDescription] = useState("Sono l'insegnante di questo corso e mi sto inscrivendo a questo magnifico sito internet creato per l'occasione");

  const isUsernameValid = useMemo(() => {
    // Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
    const charsValid = username.split("").every(char => 
      letters.includes(char.toLowerCase()) || 
      numbers.includes(char)
    );

    return charsValid && username.length >= 6;
    
  },[username]);

  const isPasswordValid = useMemo(() => {
    // ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
    return (
      password.length >= 8 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    )
  },[password]);

  const isDescriptionValid = useMemo(() => {
    return (
      description.trim().length >= 100 &&
      description.trim().length < 1000
    );
  },[description])

  const handleSubmit = e => {
    e.preventDefault();
    if(
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
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
         {username.trim() && (
          <p style={{ color: isUsernameValid ? 'green' : 'red'}}>
            {isUsernameValid ? "Username valido" : "Deve avere almeno 6 caratteri alfanumerici."}
          </p>
         )}
      </label>
      <label>
        <p>Password</p>
        <input
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         {password.trim() && (
          <p style={{ color: isPasswordValid ? 'green' : 'red'}}>
            {isUsernameValid ? "Password valida" : "Deve avere almeno 8 caratteri, 1 lettera, 1 numero, 1 simbolo."}
          </p>
         )}
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
         onChange={e => setDescription(e.target.value)}
         />
         {description.trim() && (
          <p style={{ color: isDescriptionValid ? 'green' : 'red'}}>
            {isDescriptionValid ? "Descrizione valida" : `Deve avere tra 100 e 1000 caratteri (${description.trim().length})`}
          </p>
         )}
      </label>
      <button type="submit">Registrati</button>
    </form>
   </div>
  );
}

export default App


// 💡 Premessa: Stai sviluppando un form di registrazione per una piattaforma dedicata ai giovani sviluppatori web. Gli utenti devono iscriversi indicando le loro competenze e specializzazioni.

// 📌 Milestone 2: Validare in tempo reale
// Aggiungere la validazione in tempo reale dei seguenti campi:

// ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

// ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

// ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

// Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:
// Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.