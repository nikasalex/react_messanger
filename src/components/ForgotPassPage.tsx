export function ForgotPassPage(){
    return(
        <div>
            <h1>Forgot Password:</h1>
            <form name="verify" id="verify" >
            <label><b>Email:</b></label>
            <input className="ml-1" type="text" id="email" name="email"/><br/>
            <button className="px-2 py-1 border bg-green-100" type="submit" id="submit">Send mail</button>
            </form>
        </div>
    )
}