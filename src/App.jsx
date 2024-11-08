import { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const numberRef = useRef(null);
  const charRef = useRef(null);
  const passwordRef = useRef(null);
  const [copied, setCopied] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setCopied(true)
    setTimeout(() => setCopied(false), 1500);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='flex flex-col gap-4 sm:gap-5 items-center justify-center min-h-screen w-full p-4 sm:p-8'>
      <h1 className='text-2xl -mt-20 sm:text-4xl font-bold hero-text'>Password Generator</h1>
      <div className='w-fit sm:w-fit px-4 sm:px-6 py-5 flex flex-col gap-4 bg-gray-100 rounded-xl'>
        <div className='flex sm:flex-row items-center justify-center'>
          <input
            type="text"
            value={password}
            className='rounded-s-lg px-4 py-2 outline-none sm:w-full w-56'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <div className="relative group">
            <button
              onClick={copyPasswordToClipboard}
              className="copy-btn text-white bg-blue-500 duration-300 rounded-e-lg px-4 py-2 font-semibold transition-all cursor-pointer w-full sm:w-auto"
            >
              Copy
            </button>
            <span className={`absolute whitespace-nowrap bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-zinc-600 rounded transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>
              Copied to clipboard
            </span>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <div className='flex items-center justify-center gap-1 w-full'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label className='text-sm sm:text-base'>Length: {length}</label>
          </div>
          <div className='flex gap-10 sm:gap-4'>
            <div className='flex items-center gap-1'>
              <input
                type="checkbox"
                checked={numberAllowed}
                ref={numberRef}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label onClick={() => numberRef.current.click()} className='text-sm sm:text-base cursor-pointer'>Numbers</label>
            </div>
            <div className='flex items-center gap-1'>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                ref={charRef}
              />
              <label onClick={() => charRef.current.click()} className='text-sm sm:text-base cursor-pointer'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
