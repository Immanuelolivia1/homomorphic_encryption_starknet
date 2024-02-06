/* eslint-disable react/prop-types */
function Instruction({ id, task, instructions }) {
  return (
    <li className="font-bold leading-[25px]">
      <span>
        {id}. {task}
      </span>
      <ul className="list-disc pl-[45px] font-normal">
        {instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ul>
    </li>
  );
}

export default Instruction;
