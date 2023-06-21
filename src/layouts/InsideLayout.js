import Navbar from '../components/Navbar/Navbar';




function InsideLayout(props) {
  return (
    <div>
        <Navbar/> 
        {props.children}
    </div>
  );
}

export default InsideLayout;
