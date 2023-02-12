import { useRecoilState, useRecoilValue } from "recoil";
import { postListState } from "../store";
import Button from "../components/Button";
const PostList = () => {
  const postList = useRecoilValue(postListState);
  const [list, setList] = useRecoilState(postListState);
  return (
    <ul>
      {postList.map((x, i) => (
        <div key={i} className="flex flex-row justify-between gap-x-10 text-xl">
          <li className="font-bold">{x}</li>
          <Button
            onClick={() => setList((prev) => prev.filter((list) => list != x))}
            text="Delete"
          />
        </div>
      ))}
    </ul>
  );
};
export default PostList;
