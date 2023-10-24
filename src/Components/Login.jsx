import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa6'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import toast from 'react-hot-toast'

export function Logn({ setLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("logged In")
            })
            .catch((e) => {
                console.log(e);
                toast.error("credentials dosn't match")
            })
    }




    return (
        <div className='w-[35%] h-fit py-12 px-8 border-[1px] border-slate-300 gap-4 flex flex-col rounded-lg'>
            <div className='flex w-full justify-start text-[2.5rem] font-[600]'>

                <h1>Login</h1>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex justify-between w-full'>
                        <div>

                            <label htmlFor='Email' className='text-[19px] font-semibold'>Email</label>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <span>Need an Account ?</span>
                            <span onClick={() => { setLogin(false) }} className='font-[550] cursor-pointer text-[#04aa6d] text-[17.5px]'>Sign Up</span>
                        </div>
                    </div>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} id='Email' placeholder='Email..' className='px-2 font-sans border-[1px] border-slate-300 rounded-lg outline-none py-3 text-[18px]  ' />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex justify-between w-full'>
                        <div>

                            <label htmlFor='Password' className='text-[19px] font-semibold'>Password</label>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer' onClick={() => { setShowPass(!showPass) }}>
                            <span><FaEye /></span>
                            <span className='font-[550] text-[17.5px]'>Show</span>
                        </div>
                    </div>
                    <input type={showPass ? "password" : "text"} value={password} onChange={(e) => { setPassword(e.target.value) }} id='Password' placeholder='Password..' className='px-2 border-[1px] border-slate-300 rounded-lg outline-none py-3 text-[18px]' />
                </div>
            </div>
            <div>
                <button onClick={() => { login() }} className='w-full text-center py-[0.85rem] text-white font-[550] rounded-full bg-[#04aa6d] text-[22px]'>Login</button>
            </div>
            <div className='flex justify-center items-center gap-1 '>
                <div className='h-[1px] bg-slate-300 w-full'></div>
                <div>OR</div>
                <div className='h-[1px] bg-slate-300 w-full'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex w-full py-[0.85rem] text-white font-[500] rounded-full bg-[#1877f2] text-[20px] justify-center items-center gap-3'>
                    <BsFacebook />
                    <button>Continue with Facebook</button>
                </div>
                <div className='flex w-full py-[0.85rem] border-[1px] border-slate-300 font-[500] rounded-full text-[20px] justify-center items-center gap-3'>
                    <FcGoogle />
                    <button>Continue with Google</button>
                </div>
            </div>
            <div className='mt-2'>
                <p>Forgot Password?</p>
            </div>
        </div>
    )
}


export function Signup({ setLogin }) {
    const [uppercase, setUppercase] = useState(false);
    const [lowcase, setLowcase] = useState(false);
    const [special, setSpecial] = useState(false);
    const [number, setNumber] = useState(false);
    const [length, setLength] = useState(false);

    const [email, setEmail] = useState("");


    // const [validations, setValidations] = useState({
    //     uppercase: false,
    //     lowcase: false,
    //     special: false,
    //     number: false,
    //     length: false,
    // });


    const signUp = () => {
        if (uppercase) {

        }
        if (uppercase && lowcase && special && number && length) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    alert("signed Up");
                    toast.success("Account created successfully!")
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Server erroe oucured")
                })
        }
        else {
            toast.error("Password Dosn't match the required crytiriya");
        }

    }

    const ContinewWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                alert("your Account is created");
                toast.success("Signed In successfully!")

            }).catch((error) => {
                console.log(error)
                toast.error("Server erroe oucured")
            });
    }



    const [password, setPassword] = useState("");

    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
        function containsLowerCaseCharacter(inputString) {
            return /[a-z]/.test(inputString);
        }
        function containsUpperCaseCharacter(inputString) {
            return /[A-Z]/.test(inputString);
        }
        function containsSpecialCharacter(inputString) {
            var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/;
            return regex.test(inputString)
        }
        function containsNumber(inputString) {
            var regex = /\d/;
            return regex.test(inputString)
        }
        function containsNumber(inputString) {
            var regex = /\d/;
            return regex.test(inputString)
        }
        if (containsLowerCaseCharacter(password)) {

            // setValidations((prev) => ({ ...prev, lowCase: true }));
            setLowcase(true);
        }
        else {
            // setValidations((prev) => ({ ...prev, lowCase: false }));
            setLowcase(false);

        }
        if (containsUpperCaseCharacter(password)) {

            setUppercase(true)
        }
        else {
            setUppercase(false)
        }
        if (containsSpecialCharacter(password)) {

            setSpecial(true)
        }
        else {
            setSpecial(false)
        }
        if (containsNumber(password)) {

            setNumber(true)
        }
        else {
            setNumber(false)
        }
        if (password.length >= 8) {
            setLength(true)
        }
        else {
            setLength(false)
        }
    }, [password]);

    return (
        <div className='w-[35%] h-fit py-12 px-8 border-[1px] border-slate-300 gap-4 flex flex-col rounded-lg'>
            <div className='flex w-full justify-start text-[2.5rem] font-[600]'>
                <h1>Sign Up</h1>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex justify-between w-full'>
                        <div>

                            <label htmlFor='Email' className='text-[19px] font-semibold'>Email</label>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <span>Already have an Account ?</span>
                            <span onClick={() => { setLogin(true) }} className='font-[550] cursor-pointer text-[#04aa6d] text-[17.5px]'>Login</span>
                        </div>
                    </div>
                    <input id='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email..' className='px-2 border-[1px] border-slate-300 rounded-lg outline-none py-3 text-[18px]  ' />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex justify-between w-full'>
                        <div>

                            <label htmlFor='Password' className='text-[19px] font-semibold'>Password</label>
                        </div>
                        <div className='flex gap-4 items-center cursor-pointer ' onClick={() => { setShowPass(!showPass) }}>
                            <span><FaEye /></span>
                            <span className='font-[550] text-[17.5px]'>Show</span>
                        </div>
                    </div>
                    <input type={showPass ? "password" : "text"} value={password} placeholder='Password..' onChange={(e) => { setPassword(e.target.value.trim()) }} className={`px-2 border-[1px] ${uppercase ? ("border-slate-300") : ("border-red-600")} border-slate-300 rounded-lg outline-none py-3 text-[18px]  `} />
                </div>
                <div className='flex w-full justify-between'>
                    <div >

                        <ul className='custom-list flex flex-col gap-2 text-start'>
                            <li className={`${lowcase ? ("text-[#04aa6d]") : ("text-black")}`}>One lowercase Character</li>
                            <li className={`${uppercase ? ("text-[#04aa6d]") : ("text-black")}`}>One uppercase Character</li>
                            <li className={`${special ? ("text-[#04aa6d]") : ("text-black")}`}>One special Character</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='custom-list flex flex-col gap-2 text-start'>
                            <li className={`${number ? ("text-[#04aa6d]") : ("text-black")}`}>One number</li>
                            <li className={`${length ? ("text-[#04aa6d]") : ("text-black")}`}>8 characters minimum</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => { signUp() }} className='w-full text-center py-[0.85rem] text-white font-[550] rounded-full bg-[#04aa6d] text-[22px]'>Login</button>
            </div>
            <div className='flex justify-center items-center gap-1 '>
                <div className='h-[1px] bg-slate-300 w-full'></div>
                <div>OR</div>
                <div className='h-[1px] bg-slate-300 w-full'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex w-full py-[0.85rem] text-white font-[500] rounded-full bg-[#1877f2] text-[20px] justify-center items-center gap-3'>
                    <BsFacebook />
                    <button>Continue with Facebook</button>
                </div>
                <div onClick={() => { ContinewWithGoogle() }} className='flex w-full py-[0.85rem] border-[1px] border-slate-300 font-[500] rounded-full text-[20px] justify-center items-center gap-3'>
                    <FcGoogle />
                    <button>Continue with Google</button>
                </div>
            </div>
            <div className='mt-2'>
                <p>Forgot Password?</p>
            </div>
        </div>
    )
}

const logedInpage=()=>{

}

const Login = () => {
    const [login, setLogin] = useState(true);


    return (

        <div className='h-[100vh] w-full bg-white flex justify-center items-center absolute top-0'>
            {login ? (<Logn setLogin={setLogin} />) : (<Signup setLogin={setLogin} />)}

        </div>
    )
}

export default Login