type chatProps = {
    color: string | undefined;
}

export default async function Chat({ color }: chatProps){
    const chatHistory = [
        {
            "type": "system",
            "message": "Oi, bem vindo ao vai de next!"
        },
        {
            "type": "user",
            "message": "Como faço isso no next?"
        }
    ]
    
    return (
        <div className="flex flex-col gap-4">
            {
                chatHistory.map(chat => (
                        chat.type === "system" ? (
                            <div className="w-full flex justify-start items-center">
                                <p className="flex justify-end w-fit">{chat.message}</p>
                            </div>
                        ) : (
                            <div className="w-full flex justify-end items-center text-white">
                                <p className="flex justify-end w-fit p-2 rounded-2xl" style={{backgroundColor: color, opacity: "0.8"}}>{chat.message}</p>
                            </div>
                        )
                ))
            }
        </div>
    )
}