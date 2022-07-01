// import { useState } from "react";
// import { useDispatch } from "react-redux";

// const OperationForm = () => {
//   const dispatch = useDispatch();

//   const [formOperation, setFormOperation] = useState({
//     date_operation: "",
//     nature_operation: "",
//     debit: null,
//     credit: null,
//     id_user: null,
//     id_category: null,
//   });

//   const {
//     date_operation,
//     nature_operation,
//     debit,
//     credit,
//     id_user,
//     id_category,
//   } = formOperation;


//   function onChange(e) {
//     setFormDate((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }))
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     const registerOperation = {
//       date_operation,
//       nature_operation,
//       debit,
//       credit,
//       id_user,
//       id_category,
//     }
//     dispatch(registerUser(registerData))
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Date de l'opération"
//         type="date"
//         value={date_operation}
//         onChange={onChange}
//         name="date_operation"
//       />
//       <input
//         placeholder="Nature de l'opération"
//         type="text"
//         value={nature_operation}
//         onChange={onChange}
//         name="nature_operation"
//       />
//       <input
//         placeholder="Débit (laisser vide si nul)"
//         type="number"
//         value={debit}
//         onChange={onChange}
//         name="debit"
//       />
//       <input
//         placeholder="Credit (laisser vide si nul)"
//         type="number"
//         value={credit}
//         onChange={onChange}
//         name="credit"
//       />
//       <input type="submit" value="submit" />
//     </form>
//   );
// };

// export default OperationForm;
