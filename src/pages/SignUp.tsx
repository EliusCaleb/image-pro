import {  useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate =useNavigate()
    const[email, setEmail ] = useState<string>('');
    const [ password,setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()

      try{
        createUserWithEmailAndPassword(auth, email,password)
         navigate('/')
      }catch(error) {
        setError(error.message)
      }
    }
  return (
    <form onSubmit={handleSubmit}>
      {error && error}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Image Pro</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in.
            </p>
          </div>
          <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
