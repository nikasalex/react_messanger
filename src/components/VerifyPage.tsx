export function VerifyPage(){
    return(
        <div>
            <h1>Verify Account:</h1>
            <form name="verify" id="verify" >
            <label><b>Email:</b></label>
            <input type="text" id="email" name="email"/><br/>
            <button className="px-2 py-1 border bg-green-100" type="submit" id="submit">Send mail</button>
            </form>
        </div>
    )
}