import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to homepage with contact section
    navigate("/#contact", { replace: true });
    
    // Scroll to contact section after a brief delay
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [navigate]);

  return null;
}
