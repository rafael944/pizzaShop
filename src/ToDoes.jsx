import { useSelector } from "react-redux";

export default function ToDoes() {
  const list = useSelector((state) => state.list);
  return (
    <li>
      <input type="checkbox" disabled={list.isDisabled}></input>
      <span>{list.name}</span>
      <span id={list.id}>❌</span>
    </li>
  );
}
