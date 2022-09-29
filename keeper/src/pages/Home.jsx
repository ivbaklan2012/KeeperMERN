import { useEffect } from "react";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import Footer from "../components/Footer";
import { useNotesContext } from "../hooks/useNotesContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { notes, dispatch } = useNotesContext();

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_NOTES", payload: json });
      }
    };

    if (user) {
      fetchNotes();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <CreateArea />
      <div className="notes">
        {notes && notes.map((note) => <Note key={note._id} note={note} />)}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
