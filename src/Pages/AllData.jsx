import { useState } from "react";
import "./styles/AllData.css";

const AllData = () => {
  const [formData1, setFormData1] = useState(
    JSON.parse(localStorage.getItem("form")) || []
  );
  const [formData2, setFormData2] = useState(
    JSON.parse(localStorage.getItem("form2")) || []
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    name: "",
    email: "",
    message: "",
    serviceName: "",
  });

  const combinedData = [...formData1, ...formData2];

  // Handle Edit
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedData(combinedData[index]);
  };

  // Handle Save
  const handleSave = () => {
    const updatedData = [...combinedData];
    updatedData[editingIndex] = editedData;

    // Splitting back into original arrays
    const updatedForm1 = updatedData.slice(0, formData1.length);
    const updatedForm2 = updatedData.slice(formData1.length);

    setFormData1(updatedForm1);
    setFormData2(updatedForm2);

    localStorage.setItem("form", JSON.stringify(updatedForm1));
    localStorage.setItem("form2", JSON.stringify(updatedForm2));

    setEditingIndex(null);
  };

  // Handle Delete
  const handleDelete = (index) => {
    const updatedData = combinedData.filter((_, i) => i !== index);

    // Splitting back into original arrays
    const updatedForm1 = updatedData.slice(0, formData1.length);
    const updatedForm2 = updatedData.slice(formData1.length);

    setFormData1(updatedForm1);
    setFormData2(updatedForm2);

    localStorage.setItem("form", JSON.stringify(updatedForm1));
    localStorage.setItem("form2", JSON.stringify(updatedForm2));
  };

  return (
    <div>
      <h1 className="design">All Data</h1>
      <div className="tableresp">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Services</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {combinedData.map((item, index) => (
              <tr key={index}>
                {editingIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editedData.name}
                        onChange={(e) =>
                          setEditedData({ ...editedData, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        value={editedData.email}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            email: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editedData.message}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            message: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editedData.serviceName}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            serviceName: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditingIndex(null)}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                    <td>{item?.serviceName || "Not Selected"}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllData;
