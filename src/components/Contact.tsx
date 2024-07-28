import { FormEvent, useState } from "react";
import Button from "./shared/Button";
import Caption from "./shared/Caption";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const sendMail = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const mail = await fetch(`${import.meta.env.VITE_API}/mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailData),
      });

      if (mail.status == 200) {
        setLoading(false);
        setMailData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
        alert("Mail Sent");
        return;
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  return (
    <div className="py-14 bg-[#091242]">
      <div className="max-w-6xl mx-auto px-8 lg:px-4 flex justify-between flex-wrap items-center">
        <section className="space-y-3 text-white rubik-font lg:w-[40%]">
          <Caption styles="bg-[#041C37] text-white text-[12px] rubik-font h-[18px] text-center">
            Contact
          </Caption>
          <h1 className="rubik-font font-bold text-xl md:text-2xl text-white">
            Get in touch with us
          </h1>
          <p className="font-normal">
            Reach out to us for tailored solutions and expert support in
            navigating your logistics needs.
          </p>
          <div className="space-y-6 font-normal">
            <section className="flex gap-4">
              <img
                src="/icons/phone.svg"
                alt="Phone Icon"
                className="w-[60px] h-[60px]"
              />
              <div>
                <p>Contact Us</p>
                <p className="font-bold">Nigeria:</p>
                <div className="flex gap-2 flex-wrap gap-y-0">
                  <p>13 Primrose Street,</p>
                  <p>Banky Peace Estate,</p>
                  <p>Magboro Ogun State</p>
                </div>
                <div className="flex gap-2 flex-wrap gap-y-0 mt-2 items-center">
                  <img
                    src="/icons/phone.svg"
                    alt="Phone Icon"
                    className="w-[30px] h-[30px]"
                  />
                  <a href="tel:+2348037600173">+234 803 760 0173,</a>
                  <a href="tel:+2348033731131">+234 803 373 1131</a>
                </div>
                <p className="font-bold">Canada:</p>
                <div className="flex gap-2 flex-wrap gap-y-0">
                  <p>Natronia Trail,</p>
                  <p>Brampton Ontario</p>
                </div>
                <div className="flex gap-2 flex-wrap gap-y-0 items-center mt-2">
                  <img
                    src="/icons/phone.svg"
                    alt="Phone Icon"
                    className="w-[30px] h-[30px]"
                  />
                  <a href="tel:+13653553563">+1 365 355 3563</a>
                </div>
              </div>
            </section>
            <section className="flex gap-4 md:items-center break-words">
              <img
                src="/icons/mail.svg"
                alt="Mail Icon"
                className="w-[60px] h-[60px]"
              />
              <div className="w-[75%] md:w-full">
                <p>Email</p>
                <p>zocromsintegratedservices@hotmail.com</p>
              </div>
            </section>
            <section className="flex gap-4 md:items-center">
              <img
                src="/icons/time.svg"
                alt="Clock Icon"
                className="w-[60px] h-[60px]"
              />
              <div>
                <p>Mon - Fri 9.00 - 17.00</p>
                <p>Sat & Sun Closed</p>
              </div>
            </section>
          </div>
        </section>
        <section className="space-y-3 gap-4 lg:w-[50%]">
          <form
            className="flex flex-wrap gap-y-6 justify-between py-6 lg:py-2"
            onSubmit={sendMail}
          >
            <input
              type="text"
              className="bg-transparent border-[1px] outline-none w-full md:w-[320px] lg:w-[260px] py-3 px-3 text-white"
              placeholder="Your Name"
              required
              name="name"
              id="name"
              value={mailData.name}
              onChange={(e) =>
                setMailData({ ...mailData, name: e.target.value })
              }
            />
            <input
              type="email"
              className="bg-transparent border-[1px] outline-none w-full md:w-[320px] lg:w-[260px] py-3 px-3 text-white"
              placeholder="Email"
              required
              name="email"
              id="email"
              value={mailData.email}
              onChange={(e) =>
                setMailData({ ...mailData, email: e.target.value })
              }
            />
            <input
              type="tel"
              className="bg-transparent border-[1px] outline-none w-full md:w-[320px] lg:w-[260px] py-3 px-3 text-white"
              placeholder="+234 000 000 0000"
              required
              name="number"
              id="number"
              value={mailData.phone_number}
              pattern="[+][0-9]{3} [0-9]{3} [0-9]{3} [0-9]{4}"
              onChange={(e) =>
                setMailData({ ...mailData, phone_number: e.target.value })
              }
            />
            <textarea
              className="bg-transparent border-[1px] outline-none w-full h-32 py-3 px-3 text-white"
              placeholder="Message"
              required
              name="message"
              id="message"
              value={mailData.message}
              onChange={(e) =>
                setMailData({ ...mailData, message: e.target.value })
              }
            />
            <Button type="submit" styles="px-3">
              {loading ? (
                <img
                  src="/icons/loading.svg"
                  alt="Loader"
                  className=" h-[20px] w-[20px] animate-spin text-center mx-auto"
                />
              ) : (
                "Submit Message"
              )}
            </Button>
          </form>
          <section className="w-[fit-content]">
            <a
              href="https://www.linkedin.com/company/zocroms-integrated-services-limited/"
              target="_blank"
            >
              <img
                src="/icons/linkedin.svg"
                alt="Linkedin Icon"
                className="w-[50px] h-[50px]"
              />
            </a>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Contact;
