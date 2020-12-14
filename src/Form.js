const Form = () => {
  const handleOnSubmit = () => {};

  return (
    <form id="form-container" onSubmit={handleOnSubmit}>
      <div className="title">
        <label htmlFor="title" />
        <input
          aria-labelledby="title"
          type="text"
          name="title"
          id="title"
          placeholder="Filter by title, companies, expertise"
        />
      </div>

      <div className="location">
        <label htmlFor="location" />

        <input
          aria-labelledby="location"
          type="text"
          name="location"
          id="location"
          placeholder="Filter by location"
        />
      </div>

      <div className="search-container">
        <div className="checkbox">
          <input type="checkbox" name="fullTime" id="fullTime" />
          <label htmlFor="fullTime">Full Time Only </label>
        </div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Form;
