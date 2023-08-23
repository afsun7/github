import { useState } from "react";
import { DateCalculator } from "../helper/data-method";
export function ShowRepository({ repositor }) {
  //set active button
  const [activeBtn, setActiveBtn] = useState(1);
  //get text input
  const [text, setText] = useState("");
  //get search
  const [search, setSearch] = useState([]);
  // function for search
  function handelSearch(e) {
    setText(e.target.value);
    if (e.key === "Enter") {
      if (text !== "") {
        const result = repositor.filter((item) => {
          return item.name.toLowerCase().includes(text.toLocaleLowerCase());
        });
        setSearch([...result]);
        e.target.value = "";
      }
    }
  }

  //get time
  const currentDate = new Date();

  return (
    <>
      <div className="m-[1.9rem]">
        <div className="flex content-center justify-start items-center h-[30px] flex-row gap-2 w-full ">
          <img src="src/assets/images.png" className="w-6 bg-cover bg-center" />
          <h2>Filter</h2>
          <button
            className={`border-[1px] border-gray-400 rounded-3xl w-[40px] h-[30px]  ${
              activeBtn === 1 && "active-btn"
            }`}
            onClick={() => setActiveBtn(1)}
          >
            All
          </button>
          <button
            className={`border-[1px] border-gray-400 rounded-3xl w-[63px] h-[30px]  ${
              activeBtn === 2 && "active-btn"
            }`}
            onClick={() => setActiveBtn(2)}
          >
            public
          </button>
          <button
            className={`border-[1px] border-gray-400 rounded-3xl w-[69px] h-[30px]  ${
              activeBtn === 3 && "active-btn"
            }`}
            onClick={() => setActiveBtn(3)}
          >
            private
          </button>
        </div>
        <div className=" mt-4">
          <div className="w-full bg-[#ECEEEF] flex flex-row gap-1 rounded-xl">
            <div className="mx-3 w-10 flex justify-center items-center text-gray-400 ">
              <i className="fas fa-search text-xl"></i>
            </div>
            <input
              className="w-full  h-12 bg-[#ECEEEF] rounded-xl focus:outline-none"
              placeholder="Find a repository..."
              onKeyUp={handelSearch}
            ></input>
          </div>
        </div>
      </div>
      <div className="mt-8 m-[1.9rem]">
        {search.length ? (
          <>
            {search.map((repos) => (
              <div
                className="flex flex-col gap-8 border-b-[1px] text-2xl "
                key={repos.id}
              >
                <div className="flex content-center justify-start items-center gap-4 mt-6">
                  <div className=" text-2xl font-bold ">{repos.name}</div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1894 1.74994L3.96967 7.96967L5.03033 9.03032L11.25 2.81066V5.49994H12.75V0.999939C12.75 0.585725 12.4142 0.249939 12 0.249939H7.5V1.74994H10.1894ZM10.5 7V10C10.5 10.8284 9.82843 11.5 9 11.5H3C2.17157 11.5 1.5 10.8284 1.5 10V4C1.5 3.17157 2.17157 2.5 3 2.5H6V0.999996H3C1.34315 0.999996 0 2.34314 0 4V10C0 11.6568 1.34315 13 3 13H9C10.6569 13 12 11.6568 12 10V7H10.5Z"
                      fill="#141414"
                    />
                  </svg>

                  {repos.private ? (
                    <div className=" h-7 rounded-xl border-[1px] bg-violet-200 text-[#9835FF] px-2 text-xl">
                      private
                    </div>
                  ) : (
                    <div className=" h-7 rounded-xl border-[1px] bg-sky-100 text-[#0099FF] px-2 text-xl">
                      public
                    </div>
                  )}
                </div>
                <div className="flex content-center justify-start items-center mb-6 text-xl gap-10">
                  <p className=" text-slate-500">{repos.language}</p>
                  <i className="far fa-star "></i>
                  <p className=" -ml-8">{repos.stargazers_count}</p>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.25 2.25C12.8358 2.25 12.5 2.58579 12.5 3C12.5 3.41421 12.8358 3.75 13.25 3.75C13.6642 3.75 14 3.41421 14 3C14 2.58579 13.6642 2.25 13.25 2.25ZM11.1278 2.25054C11.4366 1.37636 12.2701 0.75 13.25 0.75C14.4926 0.75 15.5 1.75736 15.5 3C15.5 4.24264 14.4926 5.25 13.25 5.25C12.2706 5.25 11.4373 4.62419 11.1283 3.75062C10.7319 3.75223 10.4309 3.75793 10.1833 3.77816C9.85447 3.80503 9.68631 3.85372 9.56901 3.91349C9.28677 4.0573 9.0573 4.28677 8.91349 4.56901C8.85372 4.68631 8.80503 4.85447 8.77816 5.18328C8.75058 5.52085 8.75 5.95757 8.75 6.6V8.25H11.128C11.4369 7.37611 12.2703 6.75 13.25 6.75C14.4926 6.75 15.5 7.75736 15.5 9C15.5 10.2426 14.4926 11.25 13.25 11.25C12.2703 11.25 11.4369 10.6239 11.128 9.75H8.75V11.4C8.75 12.0424 8.75058 12.4792 8.77816 12.8167C8.80503 13.1455 8.85372 13.3137 8.91349 13.431C9.0573 13.7132 9.28677 13.9427 9.56901 14.0865C9.68631 14.1463 9.85447 14.195 10.1833 14.2218C10.4309 14.2421 10.7319 14.2478 11.1283 14.2494C11.4373 13.3758 12.2706 12.75 13.25 12.75C14.4926 12.75 15.5 13.7574 15.5 15C15.5 16.2426 14.4926 17.25 13.25 17.25C12.2701 17.25 11.4366 16.6236 11.1278 15.7495C10.7174 15.7479 10.3636 15.7416 10.0611 15.7169C9.63956 15.6824 9.25203 15.6085 8.88803 15.423C8.32354 15.1354 7.8646 14.6765 7.57698 14.112C7.39151 13.748 7.31759 13.3604 7.28314 12.9389C7.24998 12.533 7.24999 12.0347 7.25 11.431V9.75H4.87197C4.56309 10.6239 3.72966 11.25 2.75 11.25C1.50736 11.25 0.5 10.2426 0.5 9C0.5 7.75736 1.50736 6.75 2.75 6.75C3.72966 6.75 4.56309 7.37611 4.87197 8.25H7.25V6.56903C7.24999 5.9653 7.24998 5.46703 7.28314 5.06113C7.31759 4.63956 7.39151 4.25203 7.57698 3.88803C7.8646 3.32354 8.32354 2.8646 8.88803 2.57698C9.25203 2.39151 9.63956 2.31759 10.0611 2.28315C10.3636 2.25843 10.7174 2.25214 11.1278 2.25054ZM2.75 8.25C2.33579 8.25 2 8.58579 2 9C2 9.41421 2.33579 9.75 2.75 9.75C3.16421 9.75 3.5 9.41421 3.5 9C3.5 8.58579 3.16421 8.25 2.75 8.25ZM13.25 8.25C12.8358 8.25 12.5 8.58579 12.5 9C12.5 9.41421 12.8358 9.75 13.25 9.75C13.6642 9.75 14 9.41421 14 9C14 8.58579 13.6642 8.25 13.25 8.25ZM13.25 14.25C12.8358 14.25 12.5 14.5858 12.5 15C12.5 15.4142 12.8358 15.75 13.25 15.75C13.6642 15.75 14 15.4142 14 15C14 14.5858 13.6642 14.25 13.25 14.25Z"
                      fill="#141414"
                    />
                  </svg>
                  <p className=" -ml-8">{repos.forks}</p>
                  <p className="text-slate-500">
                    {DateCalculator(currentDate, new Date(repos.updated_at))}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {repositor.map((repos) => (
              <div
                className="flex flex-col gap-8 border-b-[1px] text-2xl "
                key={repos.id}
              >
                <div className="flex content-center justify-start items-center gap-4 mt-6">
                  <div className=" text-2xl font-bold ">{repos.name}</div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1894 1.74994L3.96967 7.96967L5.03033 9.03032L11.25 2.81066V5.49994H12.75V0.999939C12.75 0.585725 12.4142 0.249939 12 0.249939H7.5V1.74994H10.1894ZM10.5 7V10C10.5 10.8284 9.82843 11.5 9 11.5H3C2.17157 11.5 1.5 10.8284 1.5 10V4C1.5 3.17157 2.17157 2.5 3 2.5H6V0.999996H3C1.34315 0.999996 0 2.34314 0 4V10C0 11.6568 1.34315 13 3 13H9C10.6569 13 12 11.6568 12 10V7H10.5Z"
                      fill="#141414"
                    />
                  </svg>

                  {repos.private ? (
                    <div className=" h-7 rounded-xl border-[1px] bg-violet-200 text-[#9835FF] px-2 text-xl">
                      private
                    </div>
                  ) : (
                    <div className=" h-7 rounded-xl border-[1px] bg-sky-100 text-[#0099FF] px-2 text-xl">
                      public
                    </div>
                  )}
                </div>
                <div className="flex content-center justify-start items-center mb-6 text-xl gap-10">
                  <p className=" text-slate-500">{repos.language}</p>
                  <i className="far fa-star "></i>
                  <p className=" -ml-8">{repos.stargazers_count}</p>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.25 2.25C12.8358 2.25 12.5 2.58579 12.5 3C12.5 3.41421 12.8358 3.75 13.25 3.75C13.6642 3.75 14 3.41421 14 3C14 2.58579 13.6642 2.25 13.25 2.25ZM11.1278 2.25054C11.4366 1.37636 12.2701 0.75 13.25 0.75C14.4926 0.75 15.5 1.75736 15.5 3C15.5 4.24264 14.4926 5.25 13.25 5.25C12.2706 5.25 11.4373 4.62419 11.1283 3.75062C10.7319 3.75223 10.4309 3.75793 10.1833 3.77816C9.85447 3.80503 9.68631 3.85372 9.56901 3.91349C9.28677 4.0573 9.0573 4.28677 8.91349 4.56901C8.85372 4.68631 8.80503 4.85447 8.77816 5.18328C8.75058 5.52085 8.75 5.95757 8.75 6.6V8.25H11.128C11.4369 7.37611 12.2703 6.75 13.25 6.75C14.4926 6.75 15.5 7.75736 15.5 9C15.5 10.2426 14.4926 11.25 13.25 11.25C12.2703 11.25 11.4369 10.6239 11.128 9.75H8.75V11.4C8.75 12.0424 8.75058 12.4792 8.77816 12.8167C8.80503 13.1455 8.85372 13.3137 8.91349 13.431C9.0573 13.7132 9.28677 13.9427 9.56901 14.0865C9.68631 14.1463 9.85447 14.195 10.1833 14.2218C10.4309 14.2421 10.7319 14.2478 11.1283 14.2494C11.4373 13.3758 12.2706 12.75 13.25 12.75C14.4926 12.75 15.5 13.7574 15.5 15C15.5 16.2426 14.4926 17.25 13.25 17.25C12.2701 17.25 11.4366 16.6236 11.1278 15.7495C10.7174 15.7479 10.3636 15.7416 10.0611 15.7169C9.63956 15.6824 9.25203 15.6085 8.88803 15.423C8.32354 15.1354 7.8646 14.6765 7.57698 14.112C7.39151 13.748 7.31759 13.3604 7.28314 12.9389C7.24998 12.533 7.24999 12.0347 7.25 11.431V9.75H4.87197C4.56309 10.6239 3.72966 11.25 2.75 11.25C1.50736 11.25 0.5 10.2426 0.5 9C0.5 7.75736 1.50736 6.75 2.75 6.75C3.72966 6.75 4.56309 7.37611 4.87197 8.25H7.25V6.56903C7.24999 5.9653 7.24998 5.46703 7.28314 5.06113C7.31759 4.63956 7.39151 4.25203 7.57698 3.88803C7.8646 3.32354 8.32354 2.8646 8.88803 2.57698C9.25203 2.39151 9.63956 2.31759 10.0611 2.28315C10.3636 2.25843 10.7174 2.25214 11.1278 2.25054ZM2.75 8.25C2.33579 8.25 2 8.58579 2 9C2 9.41421 2.33579 9.75 2.75 9.75C3.16421 9.75 3.5 9.41421 3.5 9C3.5 8.58579 3.16421 8.25 2.75 8.25ZM13.25 8.25C12.8358 8.25 12.5 8.58579 12.5 9C12.5 9.41421 12.8358 9.75 13.25 9.75C13.6642 9.75 14 9.41421 14 9C14 8.58579 13.6642 8.25 13.25 8.25ZM13.25 14.25C12.8358 14.25 12.5 14.5858 12.5 15C12.5 15.4142 12.8358 15.75 13.25 15.75C13.6642 15.75 14 15.4142 14 15C14 14.5858 13.6642 14.25 13.25 14.25Z"
                      fill="#141414"
                    />
                  </svg>
                  <p className=" -ml-8">{repos.forks}</p>
                  <p className="text-slate-500">
                    {DateCalculator(currentDate, new Date(repos.updated_at))}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
