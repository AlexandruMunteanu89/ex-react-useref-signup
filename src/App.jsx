import { useRef, useState, useMemo } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-=[]{}|;:'\"\\,.<>?/`~";

function App() {
  
  // Campi Controllati
  const [username, setUsername] = useState("justHyur");
  const [password, setPassword] = useState("Password1234!");
  const [description, setDescription] = useState("Sono l'insegnante di questo corso e mi sto inscrivendo a questo magnifico sito internet creato per l'occasione");
  // Campi noncontrollati
  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceYearsRef = useRef();
  
// Validazione
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

    // Valori non controllati
    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value;

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
         ref={fullNameRef}
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
          ref={specializationRef}
        >
          <option value="Seleziona">Seleziona</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
      </label>
      <label>
        <p>Anni di esperienza</p>
        <input
         type="number"
         ref={experienceYearsRef}
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

// 📌 Milestone 3: Convertire i Campi Non Controllati
// Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, quindi è possibile gestirli in modo più efficiente.

// Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono essere non controllati senza impattare l’esperienza utente.
// Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore solo al momento del submit.
// Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato, deve comunque essere validato correttamente quando l’utente invia il form.