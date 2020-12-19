const ShowMore = ({ dispatchApi }) => {
  return (
    <div
      className="show-more"
      onClick={() => dispatchApi({ type: "show-more" })}
    >
      <p>Show More</p>
    </div>
  );
};

export default ShowMore;
