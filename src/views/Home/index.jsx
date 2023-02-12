import ContentLayout from "../../layouts/ContentLayout";
import PostList from "../../services/PostList";
import PostCreate from "../../services/PostCreate";
const Home = () => {
  return (
    <ContentLayout>
      <PostCreate />
      <PostList />
    </ContentLayout>
  );
};

export default Home;
