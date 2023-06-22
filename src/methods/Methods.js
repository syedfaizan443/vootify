import { addVote } from "@/app/FirebaseService"

export const addVoted = async (votewhom)=>{
    
        await addVote(votewhom).then((x)=> x)
    
}
