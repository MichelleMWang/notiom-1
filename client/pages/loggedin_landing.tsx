
import NavBar from "../components/navbar";
export default function Protected() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Welcome to a protected page.</h1>
        <p>Here are your details</p>
      </main>
    </div>
  );
}