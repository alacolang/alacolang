import React from "react"

const colors = [
  "#FFEBDC",
  "#C1C1C1",
  "#D0D7CF",
  "#C2C2C2",
  "#A08B92",
  "#E1CAD2",
  "#ACB8B4",
  "#6A6667",
  "#ADB4B2",
  "#D0D7CF",
  "#e7ffef",
  "#fffbf9",
]
const Colors = () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    {colors.map(color => (
      <div style={{ width: 100, height: 20, backgroundColor: color }}>
        {color}
      </div>
    ))}
  </div>
)

export default Colors
