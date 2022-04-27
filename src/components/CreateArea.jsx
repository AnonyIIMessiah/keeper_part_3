import React from "react";
function CreateArea(props) {
  const [user1, setChange] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setChange((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    // console.log(user1)
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(user1);
          event.preventDefault();
        }}
      >
        <input
          value={user1.title}
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          value={user1.content}
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button> Add </button>
      </form>
    </div>
  );
}

export default CreateArea;
