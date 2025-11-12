import { Spinner } from "@/components/ui/spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatProps = {
  color?: string;
  chatHistory: ChatMessage[];
  loading: boolean;
};

type ChatMessage = {
  role: string;
  content: string;
};

export default function Chat({ color, chatHistory, loading }: ChatProps) {  
  return (
    <div className="flex flex-col gap-4 p-2">
      {chatHistory.map((chat, index) =>
        chat.role === "system" ? (
          <div key={index} className="w-full flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-2 rounded-2xl max-w-full overflow-auto prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {chat.content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div key={index} className="w-full flex justify-end">
            <p
              className="text-white p-2 rounded-2xl max-w-[75%]"
              style={{ backgroundColor: color, opacity: 0.85 }}
            >
              {chat.content}
            </p>
          </div>
        )
      )}
      {loading && (
        <div className="w-full flex justify-start">
          <Spinner />
        </div>
      )}
    </div>
  );
}
