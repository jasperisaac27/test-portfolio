export default function handler(req, res) {
    try {
        const { data } = req.body;
        console.log(req.body.data);
        const client = new SMTPClient({
            user: "froschk12@Gmail.com",
            password: "Contristati2!",
            host: "smtp.froschk12@gmail.com",
            ssl: true,
        });
        const message = {
            text: data.body,
            from: data.email,
            to: "froschk12@Gmail.com",
            subject: data.subject,
        };

        client.send(message, function (err, message) {
            console.log(err || message);
        });
        console.log(req.method);
        res.status(200).json({ name: "John Doe" });
    } catch (error) {
        console.log(error);
    }
}
