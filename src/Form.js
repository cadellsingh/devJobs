const Form = () => {
  const handleOnSubmit = () => {};

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="">
        <input
          type="text"
          placeholder="Filter by title, companies, expertise"
        />
      </label>

      <label htmlFor="">
        <input type="text" placeholder="Filter by location" />
      </label>

      <label htmlFor="">
        <input type="checkbox" />
        Full Time Only
      </label>
    </form>
  );
};

export default Form;
