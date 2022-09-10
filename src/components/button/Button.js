import './Button.scss'

export default function Button({ title, btnStyle }) {
  return (
    <div className={`button-container ${btnStyle === "light" ? "light" : "dark"}`}>
        <p>{title}</p>
    </div>
  )
}
