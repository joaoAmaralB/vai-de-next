"use client";

import { Send } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

type ChatInputProps = {
  color?: string;
  sendNewMessage: () => void;
  newMessage: string;
  setNewMessage: (message: string) => void;
};

export default function ChatInput({ color, sendNewMessage, newMessage, setNewMessage }: ChatInputProps) {
  return (
    <>
        <Input
        value={newMessage}
            className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-l-2xl"
            placeholder="Pergunte alguma coisa"
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendNewMessage();
                }
            }}
            style={{
                borderColor: color,
            }}
        />
        <Button className="ml-1 cursor-pointer rounded-r-2xl" style={{backgroundColor: color}} onClick={() => sendNewMessage()}>
            <Send size={16} />
        </Button>
    </>
  );
}
