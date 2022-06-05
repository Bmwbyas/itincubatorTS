
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import './App.css';

// function hello(){
//   debugger
//   alert("helo");
// }
// hello();

function App() {
  console.log("app");
  
  return (
    <div>
      <PageTitle title={"This is APP component"}/>
      <PageTitle title={"My friends"}/>
      <Rating value={0}/>
      <Accordion titleValue={"Menu"} collapsed={false}/>
      <Accordion titleValue={"Users"} collapsed={true}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>

    </div>
   
  );
}

type PageTitlePropsType={
  title:string
}
function PageTitle(props:PageTitlePropsType){
  
  console.log("Apptitle");
  
  return(
    <h1>{props.title}</h1>
  )
}




export default App;

