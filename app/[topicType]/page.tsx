import topics from "@/topics";
import { Metadata } from "next";
import ChatBox from "@/components/ui/ChatBox";
import { Prompts } from "@/enum/PromptsEnum";

type Props = {
  params: { topicType: Prompts };
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
    <ChatBox
      topic={topicType}
      color={topicData.color}
      topicName={topicData.topic}
    />
  );
}