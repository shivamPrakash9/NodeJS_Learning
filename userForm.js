function userForm(req,resp){
    resp.write(`
        <form method = "POST" action = "/submit">
            <input type = "text", name = "name", id = "name">
            <input type = "email", name = "email", id = "email">
            <button type="submit">submit</button>
        </form>
        `);
}
module.exports= userForm;