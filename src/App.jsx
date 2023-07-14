import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
