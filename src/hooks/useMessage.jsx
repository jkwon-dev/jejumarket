import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../components/context/AuthContext";
import { addOrUpdateToMessage, getMessages } from "../api/firebase";

export default function useMessage() {
    const {user, uid} = useAuthContext();
    const queryClient = useQueryClient();

    const messageQuery = useQuery({queryKey:['messages'], queryFn: async() => getMessages(uid)})

    const addOrUpdateMessages =  useMutation({mutationFn: (message) => addOrUpdateToMessage(user, message),
        onSuccess: () => queryClient.invalidateQueries(['messages'])
}); 

return {messageQuery, addOrUpdateMessages}
}