import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../components/context/AuthContext";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";


export default function useCart() {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();
    const cartQuery = useQuery({queryKey: ['carts', uid || ''], queryFn: async() => getCart(uid)}); 

    const addOrUpdateItem =  useMutation({mutationFn: (product) => addOrUpdateToCart(uid, product),
                                            onSuccess: () => queryClient.invalidateQueries(['carts'])
                             }); 

    const removeItem = useMutation({
        mutationFn: (id) => removeFromCart(uid, id), 
        onSuccess: () => queryClient.invalidateQueries(['carts'])
    }); 

    return {cartQuery, addOrUpdateItem, removeItem}

}