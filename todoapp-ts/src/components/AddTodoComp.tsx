import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

//? 1.Kullanım yolu(Props type tanımlası)

// const AddTodoComp = ({addTodo}:{addTodo:(text:string)=>Promise<void>}) => {
//   // const [text,setText] = useState<string>("")
//   const [text,setText] = useState("")//! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.

//   const handleClick = () => {
//     console.log(text)
//     addTodo(text)
//     setText("")
//   }

//   return (
//     <Box
//         sx={{
//           display: { xs: "block", sm: "flex" },
//           justifyContent: { xs: "flex-start", sm: "center" },
//           m: { xs: 1, sm: "auto" },
//           height: { xs: "120px", sm: "80px" },
//         }}
//       >
//         <TextField
//           id="outlined-basic"
//           label="New Todo"
//           color="success"
//           sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
//           variant="outlined"
//           value={text}
//           onChange={(e)=>setText(e.target.value)}
//         />
//         <Button
//           variant="contained"
//           color="success"
//           sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
//           endIcon={<SaveIcon />}
//           onClick={handleClick}
//         >
//           Save Todo
//         </Button>
//       </Box>
//   )
// }

// export default AddTodoComp

//? 2.Kullanım yolu(Props type tanımlası)

interface IAddTodoComp {
  // addTodo:(text:string)=>Promise<void>;
  addTodo:AddFn;

}

const AddTodoComp = ({addTodo}:IAddTodoComp) => {
  // const [text,setText] = useState<string>("")
  const [text,setText] = useState("")//! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.

  const handleClick = () => {
    console.log(text)
    addTodo(text)
    setText("")
  }

  return (
    <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: { xs: "flex-start", sm: "center" },
          m: { xs: 1, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="New Todo"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          variant="outlined"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          inputProps={{maxLength:40}}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          disabled={!text.trim()}
          endIcon={<SaveIcon />}
          onClick={handleClick}
        >
          Save Todo
        </Button>
      </Box>
  )
}

export default AddTodoComp