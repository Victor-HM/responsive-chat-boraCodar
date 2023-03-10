import { MessageDiv } from "./message.style";

interface MessageProps {
  placeholder: string | undefined;
  type: "ANSWER" | "QUESTION";
  name?: string;
  hour?: Date;
}

export function Message({
  placeholder,
  name = "Você",
  type,
  hour = new Date(),
}: MessageProps) {
  return (
    <div className="flex flex-col gap-2 text-[#E1E1E6] font-roboto text-xs">
      <div className="opacity-80">
        <p>
          {name} - {hour.getHours()}:{hour.getMinutes()}
        </p>
      </div>

      <MessageDiv typeMessage={type}>
        <p>{placeholder}</p>
      </MessageDiv>
    </div>
  );
}
