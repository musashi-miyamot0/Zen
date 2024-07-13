import neuro from "../../../assets/svg/neuro.svg";
import send from "../../../assets/svg/send.svg";
import images from "../../../assets/svg/images.svg";
import "./Input.css";

/* 
BaseStyleFromBtn- Базовые стилли для кнопок 
CreateButton -фабричная функция, создает нам кнопку
*/
function CreateButton() {
  const dataBTN = [
    {
      src: neuro,
      classNameDiv: "neuro",
      alt: "AI",
      classNameImg: "neuroStyle",
    },

    {
      src: images,
      classNameDiv: "images",
      alt: "images other",
      classNameImg: "ImagesStyle",
    },

    {
      src: send,
      classNameDiv: "send",
      alt: "send",
      classNameImg: "sendStyle",
    },
  ];

  return (
    <>
      {dataBTN.map((button) => {
        return (
          <div key={button.src} className={button.classNameDiv}>
            <img
              onClick={button.src === send ? sendMSG : null}
              onMouseLeave={baseNoHover}
              onMouseOver={baseHover}
              src={button.src}
              alt={button.alt}
              className={button.classNameImg + " BaseStyleFromBtn"}
            />
          </div>
        );
      })}
    </>
  );
}
function sendMSG(event) {
  event.target.style.backgroundColor = "var(--color-panel)";
  let inp = document.querySelector(".InputFieldMessage");
  inp.value = null;
}
function baseHover(event) {
  event.target.style.backgroundColor = "#1D1E24";
}
function baseNoHover(event) {
  event.target.style.backgroundColor = "var(--color-panel)";
}
export default function Input() {
  return (
    <section className="ContainerUperLevel">
      <div className="Conatainer">
        <input
          className="InputFieldMessage"
          type="text"
          placeholder="Напишите сообщение..."
          onMouseOver={baseHover}
          onMouseLeave={baseNoHover}
        />{" "}
        <CreateButton />
      </div>
    </section>
  );
}
