import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import Conversations from "./Conversations";
import LogoutButton from './LogoutButton'

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { loading, conversations: originalConversations } = useGetConversations();
  // const { setSelectedConversation } = useConversation();
  const [filteredConversations, setFilteredConversations] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    if (searchTerm.length >0) {
      const newFilteredConversations = originalConversations.filter((c) =>
        c.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredConversations(newFilteredConversations);
    } else {
      setFilteredConversations([]);
    }
  };

  return (
    <div className="mx-2">
      <form className="flex items-center gap-2 mt-2 sticky">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full bg-gray-500 border-gray-600 text-white"
          value={search}
          onChange={handleSearch}
        />
        <div className="sm:hidden ml-auto bg-transparent"><LogoutButton /></div>
      </form>
      <div className='divider px-3'></div>
      <div className='flex flex-col flex-1'>
        <div className="overflow-auto flex-1">
            <Conversations loading={loading} conversations={search.length >= 1 ? filteredConversations : originalConversations} />
        </div>
    </div>
    </div>
  );
};

export default SearchInput;






// -----------------------------------------

// original code

// import React, { useState } from "react";
// import { IoSearchSharp } from "react-icons/io5";
// import useConversation from "../../zustand/useConversation";
// import useGetConversations from "../../hooks/useGetConversations";
// import toast from "react-hot-toast";
// import Conversations from "./Conversations";

// const SearchInput = () => {
//   const [search, setSearch] = useState("");
//   const {loading,conversations}=useGetConversations();
//   const {setSelectedConversation}=useConversation();
//   const [conv,setConv]=useState(conversations);
//   // const {conversations}=useGetConversations();

//   const handleSubmit=(e)=>{
//       e.preventDefault();
        // if (!search) return;
        // if (search.length < 3) {
        //   return toast.error("Search term must be at least 3 characters long");
        // }

        // const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        // if (conversation) {
        //   setSelectedConversation(conversation);
        //   setSearch("");
        // } else toast.error("No such user found!");
//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="input input-bordered rounded-full bg-gray-500 border-gray-600 text-white"
//           value={search}
//           onChange={(e)=> setSearch(e.target.value)}
//         />
//         <button type="submit" className="btn btn-circle bg-blue-500 text-white">
//           <IoSearchSharp className="w-6 h-6 outline-none" />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchInput;




