import { useState, type ChangeEvent, type FormEvent } from "react";
import { TASK_TAGS, type TaskInput } from "../types";

// The "props" (inputs) this component expects from its parent
interface TaskFormProps {
  initialValues: TaskInput;
  submitLabel: string;
  onSubmit: (values: TaskInput) => Promise<void>;
}

const labelClass =
  "absolute text-[#9c9c9c] bg-[#faf9fb] text-xl md:text-[30px] -top-5 lefxt-5 px-1";
const fieldCass =
  "w-full px-5 py-4 border border-[#b8b6b6] rounded-[5px] text-lg bg-transparent";

const TaskForm = ({ initialValues, submitLabel, onSubmit }: TaskFormProps) => {
  // Step1: the forms current values
  const [form, setForm] = useState<TaskInput>(initialValues);
  const [submitting, setSubmitting] = useState(false);

  // Step 2: Remember everyrhing typed into each key
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // Step 3: runs when the button is clicked
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); //stop the browser form reloading the page
    setSubmitting(true);
    await onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pt-10 flex flex-col items-start gap-8 w-full "
    >
      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Task Tile
        </label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          type="text"
          className={fieldCass}
          placeholder="E.g Project Defense, Assignment ..."
          maxLength={100}
          required
        />
      </div>

      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Description
        </label>
        <textarea
          id="description"
          name="decription"
          value={form.description}
          onChange={handleChange}
          className={fieldCass}
          placeholder="Briefly describe your task..."
          rows={6}
          required
        />
      </div>

      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Tag
        </label>
        <select
          name="tag"
          id="tag"
          value={form.tag}
          onChange={handleChange}
          required
          className={fieldCass}
        >
          <option value="">Choose a tag</option>
          {TASK_TAGS.map((tag) => {
            return (
              <option key={tag} value={tag}>
                {tag}
              </option>
            );
          })}
        </select>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#974fd0] py-4 text-[#faf9fb] font-medium text-2xl md:text-[35px] rounded-lg disabled:opacity-60 "
      >
        {submitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
};

export default TaskForm;
