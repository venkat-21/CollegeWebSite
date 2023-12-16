import "./SettingsPage.css";
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

function SettingsPage() {
  return (
    <div>
      <Navbar />
      <div className="homepage-content">
        <Sidebar />
        <div className="settings-page">
          <form className="settings-page-form">
            <div className="form-center">
              <FormRow type="email" labelText="Email" />
              <FormRow type="password" labelText="Password" />
              <FormRow type="string" labelText="Name" />
              <FormRow type="string" labelText="School" />
              <button type="submit" className="btn-settings">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
