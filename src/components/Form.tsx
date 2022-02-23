const Form = ({ value, placeholder, handleInputChange, handleButtonClick, handleCheckedClick }: any) => {
  
  return (
    <label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={e => handleInputChange(e.target.value)}
      />
      <button onClick={handleButtonClick}>Add todo</button>
      <input
        type="checkbox"
        name="active"
        id="ActiveTask"
        onClick={handleCheckedClick}
      />
      <label htmlFor="ActiveTask">Active Tasks</label>
    </label>
  );
};

export default Form;