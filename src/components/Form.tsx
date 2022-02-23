const Form = ({ value, placeholder, handleInputChange, handleButtonClick }: any) => {
  return (
    <label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={e => handleInputChange(e.target.value)}
      />
      <button onClick={handleButtonClick}>Add todo</button>
    </label>
  );
};

export default Form;