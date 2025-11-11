import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import topics from "@/topics";
import { Send } from "lucide-react";
import { Metadata } from "next";
import Chat from "./chat";
import ChatInput from "@/components/ui/ChatInput";

type Props = {
  params: { topicType: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicType } = await params;

  const topicData = topics.find((t) => t.prompt === topicType);

  return {
    title: topicData ? topicData.topic : "Tópico não encontrado",
  };
}

export default async function TopicPage({params}: Props) {
  const { topicType } = await params;

	const topicData = topics.find(t => t.prompt === topicType);

  return (
    <Card className="w-11/12 flex items-center justify-center mx-auto my-10 p-0" style={{borderColor: topicData?.color}}>
        <CardHeader className="text-4xl font-light w-full p-8 text-white rounded-t-lg" style={{backgroundColor: topicData?.color}}>
					{topicData?.topic}
        </CardHeader>
        <CardDescription className="p-8 w-full">
          <Chat color={topicData?.color} />
        </CardDescription>
        <CardFooter className="w-full p-8">
          <ChatInput color={topicData?.color} topic={topicType} />
        </CardFooter>
    </Card>
  );
}