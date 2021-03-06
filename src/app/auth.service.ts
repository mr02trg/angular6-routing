

export class AuthService {
    isLogin = true; 

    // simulated method -- pretend to contact server to get status whether certain user is login or not. 
    isAuthenticated () {
        return new Promise (
            (resolve, reject) => {
                // perform asynchronous task 
                // use setTimeOut to pretend that we are contacting the server through AuthService 

                setTimeout(() => {
                    resolve(this.isLogin);      // pass back this.isLogin after 3s 
                }, 1000);
            }
        );
    }

    login () {
        this.isLogin = true; 
        console.log("Welcome wanderers ..."); 
    }

    logout() {
        this.isLogin = false; 
        console.log("GTFO >.<!!");
    }
}