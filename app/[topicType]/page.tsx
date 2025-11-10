import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import topics from "@/topics";
import { Send } from "lucide-react";
import { Metadata } from "next";

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
        <CardDescription className="p-8">

        </CardDescription>
        <CardFooter className="w-full p-8">
          <Input
            className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-l-2xl"
            placeholder="Pergunte alguma coisa"
            style={{
              borderColor: topicData?.color,
            }}
          />
          <Button className="ml-1 cursor-pointer rounded-r-2xl" style={{backgroundColor: topicData?.color}}>
            <Send size={16} />
          </Button>
        </CardFooter>
    </Card>
  );
}