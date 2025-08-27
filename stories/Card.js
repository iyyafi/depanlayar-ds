import "./button.css";

export const createButton = ({ label }) => {
  const wrapper = document.createElement("div");
  wrapper.innerText = label;

  wrapper.className = "bg-gray-100 p-3 w-fit";

  return wrapper;
};
