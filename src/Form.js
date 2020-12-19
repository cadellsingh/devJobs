const Form = ({ formInputs, dispatchInputs, handleFormSubmit }) => {
  return (
    <form id="form-container" onSubmit={handleFormSubmit}>
      <div className="title">
        <input
          aria-label="Filter Title"
          type="text"
          placeholder="Filter by title, companies, expertise"
          value={formInputs.title}
          onChange={(event) =>
            dispatchInputs({ type: "description", value: event.target.value })
          }
        />
      </div>

      <div className="location">
        <input
          aria-label="Filter Location"
          type="text"
          placeholder="Filter by location"
          value={formInputs.location}
          onChange={(event) =>
            dispatchInputs({ type: "location", value: event.target.value })
          }
        />
      </div>

      <div className="full-time-checkbox">
        <input
          type="checkbox"
          id="fullTime"
          defaultChecked={formInputs.fullTime}
          onChange={() => dispatchInputs({ type: "fulltime" })}
        />
        <label htmlFor="fullTime">FT Only</label>
      </div>

      <div className="button">
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Form;
