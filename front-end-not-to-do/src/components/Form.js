import React, { useState } from "react";

const initialState = { task: "", hr: "" };

export const Form = ({addNewTask}) => {
  const [newTask, setNewTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({
      ...newTask,
      [name]: name === "hr" ? +value : value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask(initialState);
  };

  return (
    <div class="row">
      <div class="col">
        <div class="form-box py-5 text-">
          <form
            onSubmit={handleOnSubmit}
            class="row row-cols-md-auto d-flex justify-content-center g-3"
          >
            <div class="col-12">
              <label class="visually-hidden" for="inlineFormInputGroupUsername">
                Your task
              </label>
              <div class="input-group">
                <input
                  type="text"
                  name="task"
                  onChange={handleOnChange}
                  value={newTask.task}
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Your task"
                  required
                />
              </div>
            </div>

            <div class="col-12">
              <label class="visually-hidden" for="inlineFormInputGroupUsername">
                Hours
              </label>
              <div class="input-group">
                <input
                  type="number"
                  name="hr"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Hours"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
