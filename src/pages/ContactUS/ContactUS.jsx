import React, { useEffect, useRef, useState } from "react";
import Heading from "../../components/ui/Heading";
import Feature from "../../components/Feature";
import { renderToStaticMarkup } from "react-dom/server";
import { useToast } from "../../context/Toast/ToastContext";
import { useFormLoader } from "../../context/FormLoader/FormLoaderContext";
import { Link } from "react-router";

const ContactUS = () => {
  const itiRef = useRef(null);
  const inputRef = useRef(null);
  const { showToast } = useToast();
  const { showFormLoader, hideFormLoader } = useFormLoader();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    const phoneInput = inputRef.current;
    if (phoneInput) {
      itiRef.current = window.intlTelInput(phoneInput, {
        strictMode: true,
        initialCountry: "in",
        separateDialCode: true,
      });

      const handlePhoneChange = () => {
        const number = itiRef.current?.getNumber();
        setFormData((prev) => ({
          ...prev,
          phone: number,
        }));
        setErrors((prev) => ({
          ...prev,
          phone: "",
        }));
      };

      phoneInput.addEventListener("input", handlePhoneChange);
      phoneInput.addEventListener("blur", handlePhoneChange);

      return () => {
        phoneInput.removeEventListener("input", handlePhoneChange);
        phoneInput.removeEventListener("blur", handlePhoneChange);
        itiRef.current?.destroy();
      };
    }
  }, []);
  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required!";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Valid email address is required!";
    }
    // if (!/^[0-9]{10,15}$/.test(formData.phone)) {
    //   errs.phone = "Valid phone number is required!";
    // }
    if (!itiRef.current?.isValidNumber())
      errs.phone = "Valid phone number is required.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailMethod = "php";
  const mailerSetting = {
    fromName: "Gokuldas Website",
    sendTo: ["verligte@gmail.com"],
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isSubmitting) {
        e.returnValue =
          "Your message is still being sent. Are you sure you want to leave?";
        return e.returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isSubmitting]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.target;
    formEl.classList.add("was-validated");
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    setIsSubmitting(true);
    showFormLoader();

    const submitButton = e.target.querySelector("button[type='submit']");
    submitButton.disabled = true;

    const customLabels = {
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      message: "User Message",
    };

    const formArray = Object.entries(formData).map(([key, value]) => ({
      label: customLabels[key] || key,
      value,
    }));

    try {
      let response, result;

      if (emailMethod === "api") {
        const htmlContent = renderToStaticMarkup(
          <EmailTable data={formArray} />
        );

        response = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": import.meta.env.VITE_BREVO_API_KEY,
          },
          body: JSON.stringify({
            sender: {
              name: mailerSetting.fromName,
              email: "cooperate.ashok@gmail.com",
            },
            to: mailerSetting.sendTo.map((email) => ({ email })),
            replyTo: {
              email: formData.email,
              name: `${formData.firstName} ${formData.lastName}`.trim(),
            },
            subject: "New Enquiry from Website",
            htmlContent,
          }),
        });

        const rawText = await response.text();

        console.log(response);

        try {
          result = JSON.parse(rawText);
        } catch (e) {
          throw new Error(e, "Response is not valid JSON.");
        }

        if (!response.ok || !result.messageId) {
          throw new Error("Failed to send message.");
        }
      } else if (emailMethod === "php") {
        response = await fetch(`https://verligte.com/api/contactMailer.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Smtp-Host": "mail.gokuldasgathiawala.com",
            "Smtp-Port": 465,
            "Smtp-User": "crm@gokuldasgathiawala.com",
            "Smtp-Password": "#%[H[WoK;eDE",
          },
          body: JSON.stringify({
            fromName: mailerSetting.fromName,
            subject: "New Enquiry from Website",
            tableHeaderColor: "#09509F",
            to: mailerSetting.sendTo,
            fields: formArray,
          }),
        });

        const result = await response.json();
        console.log(result);
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      hideFormLoader();
      showToast(
        "Thank you! Your message has been sent successfully.",
        "success"
      );
    } catch (error) {
      console.error("Submission Error:", error);
      setTimeout(() => {
        hideFormLoader();
        showToast("Submission failed. Please try again.", "error");
      }, 400);
    } finally {
      formEl.classList.remove("was-validated");
      const inputs = formEl.querySelectorAll(".is-valid, .is-invalid");
      inputs.forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
      });
      submitButton.disabled = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-section section-padding less">
        <div className="container">
          <div className="local-container">
            <Heading title="Contact Us" heading="Get In Touch" />
            <div className="ctnr" data-aos="fade-up" data-aos-delay="200">
              {/* ___________google map________________ */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30176.93107515325!2d72.83286389623414!3d19.014592523148895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedb5fa4a535%3A0x386d6d640427d1f0!2sGokuldas%20Gathiawala!5e0!3m2!1sen!2sin!4v1757565841447!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
              {/* __________shop info_______________ */}
              <div
                className="shop-info section-padding less"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="shop-address">
                  <h3>Shop Address</h3>
                  <h2>Gokuldas Gathiawala</h2>
                  <div className="sp-ads-ctnr">
                    <div className="sp-ads">
                      <img src="/images/store.png" alt="store" />
                      <p>
                        Shop No. 1, Laxmi Building, <br />
                        Dr, MC Jawale Rd, Near Kabutar Khana, <br />
                        Dadar West, Dadar, Mumbai, Maharashtra 400028
                      </p>
                    </div>
                    <div className="sp-ads">
                      <img src="/images/email.png" alt="store" />
                      <a href="mailto:info@gokuldasplus@hotmail.com ">
                        gokuldasplus@hotmail.com
                      </a>
                      <a href="mailto:info@gokuldasplus@gmail.com ">
                        gokuldasplus@gmail.com
                      </a>
                    </div>
                    <div className="sp-ads">
                      <img src="/images/call.png" alt="store" />
                      <a href="tel:+919029291221">(+91) 90292 91221</a>
                      <a href="tel:+919867781113">(+91) 9867781113</a>
                      <a href="tel:+918898296444">(+91) 8898296444</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* _________contact form _____________---- */}
              <div
                className="contact-form section-padding less pb-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Have Questions?</h3>
                <h2>Write to us</h2>

                <form
                  onSubmit={handleSubmit}
                  className="form-ctnr needs-validation"
                  noValidate
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      onChange={handleChange}
                      value={formData.fullName}
                      required
                    />
                    <div className="invalid-feedback">{errors.fullName}</div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>

                  <div className="input-mobile-nmbr">
                    <input
                      className={
                        ("form-control phone-input",
                        errors.phone && "is-invalid")
                      }
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number*"
                      required
                      ref={inputRef}
                    />
                    <div
                      className="invalid-feedback"
                      style={
                        errors.phone
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      {errors.phone}
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className={`form-control`}
                      onChange={handleChange}
                      value={formData.message}
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="btn-container">
                    <button type="submit" className="btnn">
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature cl="section-padding pt-0" />
    </>
  );
};

export default ContactUS;

export const EmailTable = ({ data }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <thead>
        <tr>
          <th
            colSpan={2}
            style={{
              padding: "16px",
              backgroundColor: "#09509F",
              color: "white",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            New Enquiry Details
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ label, value }, index) => (
          <tr key={index}>
            <td
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                backgroundColor: "#f4f4f4",
              }}
            >
              {label}
            </td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
