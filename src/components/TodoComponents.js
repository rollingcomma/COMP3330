import React, {useState} from "react";

//Form component
export function Form(props) {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(name.length > 0) {
      props.addTask(name);
      setName("");
      setMsg("");
    } else {
      setMsg("List name can not be empty");
    }
  }

  const handleChange = e => {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      {msg && <p className="alert">{msg}</p>}
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button id="new_list_add_btn" type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

//Filter Button component
export function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name} </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

//Todo item component
export function Todo(props) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(props.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, name);
    setEditable(false);
  };

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {name}
        </label>
        <input 
          id={props.id} 
          className="todo-text" 
          type="text" 
          onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => setEditable(false)}>
          Cancel
        <span className="visually-hidden">renaming {name}</span>
        </button>
        <button 
          type="submit" 
          className="btn btn__primary todo-edit">
          Save
        <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => {
          setEditable(true);
        }}>
          
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger btn_dlt"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  
  return (
    <li className="todo stack-small">
      {editable? editingTemplate : viewTemplate}
    </li>
  );
}

