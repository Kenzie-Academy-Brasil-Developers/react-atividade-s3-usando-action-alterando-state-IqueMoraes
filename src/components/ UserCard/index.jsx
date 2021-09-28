import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [newName, setNewName] = useState("");

  const dispatch = useDispatch();

  const expoName = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
  };
  // console.log(expoName);
  return (
    <div>
      <p> Olá, {expoName.name} </p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
