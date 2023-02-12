import { atom } from "recoil";

export const postListState = atom({
  key: "post-list",
  default: ["Learn React JS", "Learn Recoil"],
});
