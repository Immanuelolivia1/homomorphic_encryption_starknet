import { useNavigate } from "react-router-dom";
import Instruction from "../ui/Instruction";
import { instructions } from "../utils/data";

function InstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col bg-white px-[120px] pb-[96px] pt-[31px] text-base">
      <h1 className="mb-5 text-2xl font-bold">
        Data Input - Guidance on Encryption with StarkNet Wallet
      </h1>
      <h2 className="mb-5 text-xl font-medium">Text Instructions:</h2>
      <ol className="flex flex-col gap-y-3">
        {instructions.map((instruction, i) => (
          <Instruction
            key={i}
            id={instruction.id}
            task={instruction.task}
            instructions={instruction.instructions}
          />
        ))}
      </ol>
      <button
        className="mx-auto mt-[60px] w-[340px] rounded-lg bg-[#121212] py-[14px] font-medium text-white"
        onClick={() => navigate("/app")}
      >
        Continue
      </button>
    </div>
  );
}

export default InstructionsPage;
