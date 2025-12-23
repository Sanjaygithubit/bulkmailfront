import { useState } from "react";
import axios from "axios";

function App() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [recipients, setRecipients] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async () => {
    try {
      await axios.post("https://bulkmailback.onrender.com/api/mail/send", {
        subject,
        body,
        recipients: recipients.split(","),
      });
      setMessage("Email sent successfully ✅");
    } catch {
      setMessage("Failed to send email ❌");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bulk Mail Sender</h2>

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Email Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Recipients (comma separated)"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />
      <br /><br />

      <button onClick={sendMail}>Send Mail</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
