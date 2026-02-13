
import "./Loader.css";

export default function Loader() {
  return (
    <div className="dot-loader-container">
      <div className="dot-loader">
        {[...Array(4)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </div>
  );
}

