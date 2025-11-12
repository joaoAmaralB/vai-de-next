"use client";

import Chat from "@/app/[topicType]/chat";
import { Card, CardDescription, CardFooter, CardHeader } from "./card";
import ChatInput from "./ChatInput";
import { useEffect, useState } from "react";
import prompts from "@/prompts";
import { Prompts } from "@/enum/PromptsEnum";

type ChatMessage = {
  role: string;
  content: string;
};

type ChatProps = {
  color: string;
  topicName: string;
  topic: Prompts;
};

export default function ChatBox({ color, topicName,  topic }: ChatProps) {
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const history = localStorage.getItem(`chatHistory-${topic}`);
        if (history) {
            setChatHistory(JSON.parse(history));
        }
        else {
            const firstMessage = [
                {
                    role: "system",
                    content: "Olá! Sou o Vai de Next, seu assistente especializado em Next.js. Como posso ajudar você hoje?",
                }
            ];

            localStorage.setItem(`chatHistory-${topic}`, JSON.stringify(firstMessage));
            setChatHistory(firstMessage);
        }
    }, [topic]);

    useEffect(() => {
        if (chatHistory.length > 0) {
            localStorage.setItem(`chatHistory-${topic}`, JSON.stringify(chatHistory));
        }
    }, [chatHistory]);

    const sendNewMessage = async () => {
        if (!newMessage.trim()) return;

        const newHistory = [
        ...chatHistory,
        { role: "user", content: newMessage },
        ];

        setChatHistory(newHistory);
        setNewMessage("");
        setLoading(true);

        // envia o histórico atualizado para o n8n
        const response = await fetch("https://n8n.incluc0de.com.br/webhook-test/chats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                sessionId: `chatHistory-${topic}`,
                promptOptionDescription: prompts[topic],
                chatInput: newMessage,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            let chatReply = data[0]["output"] || "Desculpe, não consegui entender sua pergunta.";

            // Se vier com aspas extras ou barras escapadas, tenta decodificar
            try {
                if (typeof chatReply === "string" && chatReply.startsWith('"')) {
                    chatReply = JSON.parse(chatReply);
                }
                chatReply = chatReply.replace(/\\n/g, "\n");
            } catch (e) {
                console.warn("Erro ao tentar decodificar markdown:", e);
            }
            const newHistoryWithChatReply = [
                ...newHistory,
                { role: "system", content: chatReply },
            ];
            setChatHistory(newHistoryWithChatReply);
        } else {
            console.error("Erro ao enviar mensagem:", response.statusText);
        }
        setLoading(false);
    };

    return (
        <Card className="w-11/12 flex items-center justify-center mx-auto my-10 p-0" style={{borderColor: color}}>
            <CardHeader className="text-4xl font-light w-full p-8 text-white rounded-t-lg" style={{backgroundColor: color}}>
                {topicName}
            </CardHeader>
            <CardDescription className="px-8 w-full">
                <Chat color={color} chatHistory={chatHistory} loading={loading} />
            </CardDescription>
            <CardFooter className="w-full p-8">
                <ChatInput color={color} newMessage={newMessage} setNewMessage={setNewMessage} sendNewMessage={sendNewMessage} />
            </CardFooter>
        </Card>
    )
}