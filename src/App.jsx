// import './App.css'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

let handelClick = () => {
  console.log("button was clicked");
};

function App() {
  return (
    <>
      <h1>Material-UI</h1>
      <Button variant="contained" onClick={handelClick} startIcon={<DeleteIcon />}>
        delete
      </Button>
      <Button variant="contained" onClick={handelClick} disabled>
        click me2
      </Button>
    </>
  );
}

export default App;
