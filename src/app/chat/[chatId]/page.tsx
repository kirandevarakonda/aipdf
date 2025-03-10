// import { Suspense } from 'react';
// import ChatPageContent from './ChatPageContent';
// import { getChatsData } from './chatUtils';
// import { Slab } from 'react-loading-indicators';
// import HeaderAuth from '@/components/Headerauth';

// type Props = {
//     params: {
//         chatId: string;
//     };
// };

// const ChatPage = async ({ params: { chatId } }: Props) => {
//     // Server-side: Fetch data
//     const chatsData = await getChatsData(chatId);

//     return (
//         // Wrap the ChatPageContent in Suspense for client-side lazy loading or rendering
//         <div>
//             <HeaderAuth />
//         <div className="h-screen overflow-hidden ">
//             <Suspense
//                 fallback={
//                     <div className="flex items-center justify-center h-screen">
//                         <Slab color="#32cd32" size="medium" text="" textColor="" />
//                     </div>
//                 }
//             >
//                 {/* Pass server-side data to the component */}
//                 <ChatPageContent chatId={chatId} initialChatsData={chatsData} />
//             </Suspense>
//         </div>
//         </div>
//     );
// };

// export default ChatPage;

import { Suspense } from 'react';
import ChatPageContent from './ChatPageContent';
import { getChatsData } from './chatUtils';
import { Slab } from 'react-loading-indicators';
import HeaderAuth from '@/components/Headerauth';
import HeaderAuthChat from '@/components/headerauthchat';

type Props = {
    params: {
        chatId: string;
    };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
    // Server-side: Fetch data
    const chatsData = await getChatsData(chatId);
    
    return (
        // Wrap the ChatPageContent in Suspense for client-side lazy loading or rendering
        <div>
            {/* HeaderAuth will be hidden on mobile and shown in sidebar */}
            <div className="lg:block hidden">
                <HeaderAuthChat />
            </div>
            <div className="h-screen overflow-hidden">
                <Suspense
                    fallback={
                        <div className="flex items-center justify-center h-screen">
                            <Slab color="#32cd32" size="medium" text="" textColor="" />
                        </div>
                    }
                >
                    {/* Pass server-side data to the component */}
                    <ChatPageContent chatId={chatId} initialChatsData={chatsData} />
                </Suspense>
            </div>
        </div>
    );
};

export default ChatPage;