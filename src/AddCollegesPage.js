import "./AddCollegesPage.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const FormRow = ({ labelText, type = "text" }) => {
  return (
    <div className="form-row">
      <label className="form-label">{labelText}</label>
      <input type={type} className="form-input-settings"></input>
    </div>
  );
};

function AddCollegesPage() {
  return (
    <div>
      <Navbar />
      <div className="homepage-content">
        <Sidebar />
        <div className="settings-page">
          <form className="settings-page-form">
            <div className="form-center">
              <FormRow type="string" labelText="College Name" />
              <FormRow type="string" labelText="Branch" />
              <FormRow type="string" labelText="Location" />
              <FormRow type="string" labelText="Application Status" />
              <FormRow type="string" labelText="Date Applied On" />

              <button type="submit" className="btn-settings">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCollegesPage;
