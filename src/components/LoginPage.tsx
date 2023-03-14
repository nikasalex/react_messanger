import { text } from "stream/consumers";

export function LoginPage(){
    return(
        <div>
            <h1>Login Account:</h1>
            <form name="login" id="login" >
                <label><b>Email:</b></label>
                <input className="ml-1" type="text" id="email" name="email"/><br/>
                <label><b>Password:</b></label>
                <input className="ml-1" type="text" id="password" name="password"/><br/>
                <button className="px-2 py-1 border bg-green-100" type="submit" id="submit">Entry</button>
            </form>
        </div>
    )
}