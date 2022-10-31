import { UserRef } from "../reference/user-ref";
import { FriendshipType } from "../variant/__friendship-type";

export interface _Friendship {
    
    between: [UserRef, UserRef],
    type:         FriendshipType 
};