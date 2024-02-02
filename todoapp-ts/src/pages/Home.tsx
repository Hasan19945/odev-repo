import{ useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import axios from "axios";
import { SweetAlertIcons, SweetPosition, notify } from "../helper/sweetalert";

// interface ITodoType {
//   id: string | number;//? id bilgisi string yada number olabilir. İki veri tipinide kabul edecek.
//   isDone: boolean;
//   task: string;
//   todo?: string;//! todo verisini opsiyonel bırakarak olsa da olur olmasa da olur demiş oluyoruz. Zorunlu olmayan fieldlar için kullanılabilir.
// }

const url: string = import.meta.env.VITE_BASE_URL;

const Home = () => {
  // const [todos,setTodos] = useState<[] as ITodoType>([]) //! type tanımlaması 1.yol
  // const [todos,setTodos] = useState<Array<ITodoType>>([])//* type tanımlaması 2.yol
  const [todos, setTodos] = useState<ITodoType[]>([]); //? type tanımlaması 3.yol ve yaygın kullanım

  const getTodos = async () => {
    try {
      const { data } = await axios.get<ITodoType[]>(url);//!axiostan gelecek olan veriye type tanımlaması yapıyoruz. TAbiki bunu kafamıza göre değil apiye bakarak yapıyoruz. Bunun için de thunder veya postman kullanılabilir.
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

 //! function type tanımlama 1.yol
  // const addTodo = async (text:string) => {
  //   try {

  //   } catch (error) {

  //   }
  // }
  //? function type tanımlama 2.yol
  // type AddFn = (text: string) => Promise<void>;

  const addTodo: AddFn = async (text) => {
    try {
      await axios.post(url, { task: text, isDone: false });
      notify("Todo created!",SweetAlertIcons.SUCCESS,SweetPosition.Center)
    } catch (error) {
      console.log(error);
      notify("Todo not created!",SweetAlertIcons.ERROR,SweetPosition.BottomEnd)
    }finally {
      getTodos()
    }
  };
  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, {...todo, isDone: !todo.isDone });
    } catch (error) {
      console.log(error);
    }finally {
      getTodos()
    }
  };
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }finally {
      getTodos()
    }
  };


  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography color="error" align="center" variant="h2" component="h1">
        TodoApp with Typescript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Home;
