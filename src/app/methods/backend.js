import dotenv from 'dotenv';

dotenv.config()

export const address = process.env.NEXT_PUBLIC_SERVER
const cockieName = 'tempVote';
const cockieValue = '7777'


export const cockcheck = () => {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [name, value] = cookie.split('=');

    if (name === cockieName && value === cockieValue) {
      return true;
    }
  }

  return false;
}


//showwin
export const showWin=async ()=>{
    const response = await fetch(address+'showwin')
    const res = await response.json()
    
    return res
}

export const addcock =()=>{
  const expiryDate = new Date();
    expiryDate.setHours(0, 0, 0, 0); // Set the time to midnight
    expiryDate.setDate(expiryDate.getDate() + 1); // Set the date to the next day
    
  

    document.cookie = `${cockieName}=${cockieValue}; expires=${expiryDate.toUTCString()}; path=/`;
}


  
//addvote

export const voteadd= async (key)=>{
    
        try{
            const response = fetch(address+'addvotes',{
                method:'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(key), // Replace 'your-ip-address' with the actual IP address
              });
        }
        catch (error){

        }
}

//showvote

export const showvotes= async()=>{
    try{
      const response = await fetch(address+'showresult')
      const data = await response.json()
      return data
    }
    catch (eror){
      
      console.log(eror);
    }
}

// battle page

export const showCharacter = async(postdata)=>{
    try{
      const response = await fetch(address+'character',{
        method:'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postdata),
      })
      const data = await response.json()
      return data
    }
    catch(error){
    }

}