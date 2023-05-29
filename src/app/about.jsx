import { useOutletContext } from "react-router-dom";

export default function About() {
  const ctx = useOutletContext(); // for debugging

  return (
    <div>
      <h1>About</h1>
      <p>{JSON.stringify(ctx)}</p>
    </div>
  );
}
