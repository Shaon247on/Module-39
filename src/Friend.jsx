export default function Friend({friend}){
    console.log(friend)
    const {name, email, username} = friend
    return (
        <div style={{border:'2px solid green', padding:'10px', borderRadius:'10px', margin:'10px'}}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Use Nname: {username}</p>
        </div>
    )
}