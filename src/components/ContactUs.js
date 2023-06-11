import "./ContactUsStyles.css";

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Send A Message To Us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="5" />
        <button>Submit Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
