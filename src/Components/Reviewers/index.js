import Multiselect from "multiselect-react-dropdown";
import localstorage from "../../Controllers/Localstorage";

const Reviewers = () => {
  const state = {
    options: [...localstorage.getAllUsers()]
};


  return ( <div>Reviwers

<Multiselect
options={state.options} // Function will trigger on remove event
displayValue="email" // Property name to display in the dropdown options
/>
  </div> );
}
 
export default Reviewers;