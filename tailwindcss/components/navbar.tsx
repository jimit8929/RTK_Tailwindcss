export const Navbar = () => {

  const links = [
    { title: "Guide", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Login", href: "#" },

  ]

  return (
    <div className="navbar-root">
      <div className="logo">Lethal</div>
      <div className="links">
        {links.map((link, idx) => {
          return (
            <a href={link.href} key={idx} className="link-items">{link.title}</a>
          )
        })}
        <button className="btn">Start Free Trail</button>
      </div>
    </div>
  )
}