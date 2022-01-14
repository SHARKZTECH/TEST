const InputArea = () => {
  return (
    <div className="inputarea">
      <form>
        <input
          type="text"
          className="input"
          placeholder="Type your message here.."
        />
        <button className="btn">send</button>
      </form>
    </div>
  );
};
export default InputArea;
