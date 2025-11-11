"use client";

import { Send } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { useEffect, useState } from "react";

type ChatInputProps = {
    color: string | undefined;
    topic: string;
}


export default function ChatInput({ color, topic }: ChatInputProps) {
    const [chatHistory, setChatHistory] = useState({
        "type": "system",
        "message": "Bem vindo ao vai de next! Em que posso te ajudar?"
    });
    const [newMessage, setNewMessage] = useState("");
    
    useEffect(() => {
        let history = localStorage.getItem(`chatHistory-${topic}`);

        if (!history) {
            localStorage.setItem(`chatHistory-${topic}`, chatHistory)
        }
        else {
            setChatHistory(history);
        }
        
    }, [topic])

    const sendNewMessage = () => {
        const newHistoryItem = {
            "type": "user",
            "message": newMessage
        }

        setChatHistory(...prevChats, newHistoryItem);

        fetch("https://n8n.incluc0de.com.br/webhook-test/chats", {
            method: "POST",
            body: chatHistory
        })
    };

    return (
        <>
            <Input
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-l-2xl"
                placeholder="Pergunte alguma coisa"
                onChange={(e) => setNewMessage(e.target.value)}
                onSubmit={() => sendNewMessage()}
                style={{
                borderColor: color,
                }}
            />
            <Button className="ml-1 cursor-pointer rounded-r-2xl" style={{backgroundColor: color}} onClick={() => sendNewMessage()}>
                <Send size={16} />
            </Button>
        </>
    )
}