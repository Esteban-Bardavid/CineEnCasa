function UseAdmin() {
    function SessionPage() {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let email = "bardavidesteban@gmail.com";
        let Contraseña = "123456";

        let response = users.find((item) => {
            let session = false;
            if (item.email === email && item.Contraseña === Contraseña) {
                session = true;
            }
            return session;
        })
        console.log(response);

    }

    return {
        SessionPage,
    }
}

export default UseAdmin;