import "./App.css";
import InvestmentForm from "./component/InvestmentForm";
import LoginForm from "./component/LoginForm";
import RegisterForm from "./component/RegisterForm";

function App() {
  return (
    <div className="App">
      <h1>Register</h1>
      <RegisterForm />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default App;
