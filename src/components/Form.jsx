import { useState } from "react";
import Calendar from "react-calendar";

const Form = () => {
  let [schedule, setSchedule] = useState(false);
  let [data, setData] = useState({ text: "", link: "" });
  const [imageFile, setImageFile] = useState(null);

  const posts = [];

  const [date, setDate] = useState(null);

  const setPosts = (e) => {
    e.preventDefault();

    posts.push(data);

    console.log("Posts :", posts);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(data);
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    console.log(imageFile);
  };

  const handleDateChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
          }}
        >
          <label htmlFor="">Add text</label>
          <input type="text" name="text" id="" onChange={handleChange} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
          }}
        >
          <label htmlFor="">Add image</label>
          <input type="file" id="file-input" onChange={handleFileChange} />
          <button style={{ marginTop: "5px" }}>Upload</button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
          }}
        >
          <label htmlFor="">Add link</label>
          <input type="url" name="link" id="" onChange={handleChange} />
        </div>

        <input type="date" name="date" id="" onChange={handleDateChange} />

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() =>
              schedule === true ? setSchedule(false) : setSchedule(true)
            }
          >
            Schedule
          </button>
          <button onClick={setPosts}>Post</button>
        </div>
      </form>

      <div>
        <h3>Posts</h3>
        {posts &&
          posts.map((d, k) => (
            <div key={k}>
              text : {d}
              link : {d}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Form;
