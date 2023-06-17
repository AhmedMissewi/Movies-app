import Topbar from '../components/Topbar';
import Loginswitch from '../Loginswitch';




function OutsideLayout({children}) {

  return (
    <div className="outside-layout">
      <Loginswitch/>
      
    </div>
  );
}

export default OutsideLayout;
