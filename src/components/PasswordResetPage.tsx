export function PasswordResetPage(){
    return(
        <div>
            <h1>Password Reset:</h1>
            <form name="verify" id="verify" >
            <label><b>Email:</b></label>
            <input className="ml-1" type="text" id="email" name="email"/><br/>
            <label><b>Password:</b></label>
            <input className="ml-1" type="text" id="password" name="password"/><br/>
            <label><b>Password confirmation:</b></label>
            <input className="ml-1" type="text" id="passwordAgain" name="passwordAgain"/><br/>
            <button className="px-2 py-1 border bg-green-100" type="submit" id="submit">Send mail</button>
            </form>
        </div>
    )
}