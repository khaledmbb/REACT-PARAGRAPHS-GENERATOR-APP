const From = ({ numOfP, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number-of-paragraphs">Paragraphs:</label>
      <input
        onChange={handleChange}
        id="number-of-paragraphs"
        value={numOfP}
        type="number"
        min="0"
        max="100"
      />
      <input type="submit" value="Generate" />
    </form>
  );
};

export default From;
