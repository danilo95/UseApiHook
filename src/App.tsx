import useApiHook from "./hook/useApiHook";
import "./App.css";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const App: React.FC = () => {
  const { data, loading, error } = useApiHook<Post[]>(
    "https://jsonplaceholder.typicode.com/postss", //endpoint url
    { timeout: 5000 } //extra parameter just for example
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (data) {
    return (
      <div>
        {data.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default App;
