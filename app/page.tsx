import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import topics from "@/topics";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center py-8">
      <div className="flex justify-start mb-8">
        <h1>
          Bem-vindo ao Vai de Next! Escolha um tópico para começar a aprender sobre Next.js:
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center w-full">
        {
          topics.map((topic) => (
            <Card key={`${topic.topic}-key`} className="w-1/4 h-52 p-4">
              <CardHeader className="flex items-center p-0">
                <div className="w-8 h-8 p-1.5 rounded-lg text-white" style={{ backgroundColor: topic.color }}>
                  {topic.icon}
                </div>
                <div>
                  <h2 className="font-semibold">
                    {topic.topic}
                  </h2>
                </div>
              </CardHeader>
              <CardDescription className="h-full">
                {topic.description}
              </CardDescription>
              <CardFooter className="p-0">
                <span className="w-full">
                  <Link href={`/${topic.prompt}`}>
                    <Button className="w-full cursor-pointer">
                        Iniciar
                    </Button>
                  </Link>
                </span>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  );
}
