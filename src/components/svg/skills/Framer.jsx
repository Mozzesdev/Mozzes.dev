

const Framer = (props) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      enableBackground: "new 0 0 24 24",
    }}
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={6.425}
      y1={1.029}
      x2={6.425}
      y2={23.048}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fe008c",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#de01ec",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#a)",
      }}
      d="M.918 1.029v22.019L11.932 12.07z"
    />
    <linearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1={11.925}
      y1={12.07}
      x2={11.925}
      y2={23.048}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#6e08ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4501ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#b)",
      }}
      d="m11.932 23.048-5.507-5.489 5.507-5.489 5.493 5.489z"
    />
    <linearGradient
      id="c"
      gradientUnits="userSpaceOnUse"
      x1={17.5}
      y1={0.877}
      x2={17.5}
      y2={23.123}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#9610ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#5903ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#c)",
      }}
      d="m23.082.877-.075 22.246-11.088-11.047z"
    />
    <linearGradient
      id="d"
      gradientUnits="userSpaceOnUse"
      x1={20.242}
      y1={11.924}
      x2={20.242}
      y2={23.117}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#0095ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#0058ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#d)",
      }}
      d="m17.425 17.559 5.635-5.635-.04 11.193z"
    />
  </svg>
)

export default Framer
