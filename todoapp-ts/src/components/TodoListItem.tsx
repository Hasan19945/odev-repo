import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";

interface ITodoListItem {
  todo: ITodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", padding: "1rem" }}
      secondaryAction={
        <IconButton sx={{ "&:hover": { color: "red" } }} aria-label="delete">
          <DeleteIcon onClick={() => deleteTodo(todo.id)} />
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => toggleTodo(todo)}
        primary={todo.task || todo.todo}
        sx={{ wordWrap: "break-word" }}
      />
    </ListItem>
  );
};

export default TodoListItem;
