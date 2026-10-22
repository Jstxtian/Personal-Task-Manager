const labelClass =
  "absolute text-[#9c9c9c] bg-[#faf9fb] tsxt-xl md:text-[30px] -top-5 lefxt-5 px-1";
const fieldCass =
  "w-full px-5 py-4 border border-[#b8b6b6] rounded-[5px] text-lg bg-transparent";

const TaskForm = () => {
  return (
    <form className="pt-10 flex flex-col items-start gap-8 w-full ">
      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Task Tile
        </label>
        <input
          type="text"
          className={fieldCass}
          placeholder="E.g Project Defense, Assignment ..."
        />
      </div>

      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Description
        </label>
        <input
          type="text"
          className={fieldCass}
          placeholder="Briefly describe your task..."
        />
      </div>

      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Tag
        </label>
        <select name="" id="" className={fieldCass}></select>
      </div>

      <button className="w-full bg-[#974fd0] py-4 text-[#faf9fb] font-medium text-2xl md:text-[35px] rounded-lg disabled:opacity-60 ">
        Done
      </button>
    </form>
  );
};

export default TaskForm;
