export const parseInstruction = (instruction: string) => {
  const firstSpaceIndex = instruction.indexOf(' ');
  if (firstSpaceIndex === -1) {
    return { action: instruction, object: '' };
  }

  return {
    action: instruction.slice(0, firstSpaceIndex),
    object: instruction.slice(firstSpaceIndex + 1),
  };
};
