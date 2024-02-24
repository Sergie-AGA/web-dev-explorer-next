import { v4 as uuidv4 } from "uuid";

interface ISelectUserProps {
  existingUsers: string[];
}

export default function NewUser({ existingUsers }: ISelectUserProps) {
  const newUserID = uuidv4();

  return <div className="flex flex-col gap-4">qwe</div>;
}
