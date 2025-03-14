import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Copyright &copy; {new Date().getFullYear()} <span>Comfy Sloth</span>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
