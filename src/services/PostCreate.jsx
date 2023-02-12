import { useState } from "react";
import { MdOutlineInput } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postListState } from "../store";
const PostCreate = () => {
  const [toDo, setTodo] = useState("");
  const setPostListState = useSetRecoilState(postListState);
  const inputTodo = (e) => {
    e.preventDefault();
    setPostListState((prev) => [...prev, toDo]);
    setTodo("");
  };
  return (
    <form
      onSubmit={inputTodo}
      className="flex justify-between items-center gap-x-10"
    >
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={toDo}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Input Todo"
      />
      <button type="submit">
        <MdOutlineInput className="cursor-pointer" size={50} />
      </button>
    </form>
  );
};

export default PostCreate;
