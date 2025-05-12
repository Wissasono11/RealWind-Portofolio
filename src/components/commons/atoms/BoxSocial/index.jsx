const listSocial = [
  {
    name: "Github",
    icon: "fa-brands fa-github",
    link: "https://github.com/Wissasono11",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/wjcbayy/",
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/bayu-wicaksono-a08391282/",
  },
];

const BoxSocial = () => {
  return (
    <div className="mt-8 flex gap-3">
      {listSocial.map((item, index) => (
        <button
          key={index}
          className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-2 py-0.5 hover:bg-(--bg-secondary-cray)"
          onClick={() => window.open(item.link, "_blank")}
        >
          <i className={`${item.icon} text-md`}></i>
        </button>
      ))}
    </div>
  );
};
export default BoxSocial;
