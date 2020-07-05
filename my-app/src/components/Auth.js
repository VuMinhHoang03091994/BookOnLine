class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        localStorage.setItem('auth',JSON.stringify(true))
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        localStorage.setItem('auth',JSON.stringify(false))

        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();