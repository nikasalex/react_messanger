export function SignUpPage(){
    return(
        <div>
        <h1>Sign Up form:</h1>
        <form name="signup" id="signup" >
            <label><b>Email:</b></label>
            <input className="ml-1" type="text" id="email" name="email"/><br/>
            <label><b>First Name:</b></label>
            <input className="ml-1" type="text" id="firstName" name="firstName"/><br/>
            <label><b>Last Name:</b></label>
            <input className="ml-1" type="text" id="lastName" name="lastName"/><br/>
            <label><b>Password:</b></label>
            <input className="ml-1" type="text" id="password" name="password"/><br/>
            <label><b>Password confirmation:</b></label>
            <input className="ml-1" type="text" id="passwordAgain" name="passwordAgain"/><br/>
            <button className="px-2 py-1 border bg-green-100" type="submit" id="submit">Sign Up</button>
        </form>
        </div>
    )
}


