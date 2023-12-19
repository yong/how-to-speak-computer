import React, { useState } from "react";

function Name() {
  const [name, setName] = useState("");
  const [binary, setHex] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const translateToHex = () => {
    const message = `${name}`;
    const hexString = message.split("").map((char) => char.charCodeAt(0).toString(16));
    setHex(hexString.join(" "));
  };

  return (
    <div className="App">
      <h1>Say your name in Binary</h1>
      <label htmlFor="name">Enter your name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={translateToHex}>Translate</button>
      {binary && <p>Binary (Hex) Representation: {binary}</p>}
      <h2>ASCII Table</h2>
      <table>
        <thead>
          <tr>
            <th>Char</th>
            <th>Decimal</th>
            <th>Binary</th>
          </tr>
        </thead>
        <tbody>
          {ASCII_TABLE.map((row) => (
            <tr>
              <td>{row.char}</td>
              <td>{row.decimal}</td>
              <td>{row.hex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ASCII_TABLE = [
    { char: "A", decimal: 65, hex: "41" },
    { char: "B", decimal: 66, hex: "42" },
    { char: "C", decimal: 67, hex: "43" },
    { char: "D", decimal: 68, hex: "44" },
    { char: "E", decimal: 69, hex: "45" },
    { char: "F", decimal: 70, hex: "46" },
    { char: "G", decimal: 71, hex: "47" },
    { char: "H", decimal: 72, hex: "48" },
    { char: "I", decimal: 73, hex: "49" },
    { char: "J", decimal: 74, hex: "4a" },
    { char: "K", decimal: 75, hex: "4b" },
    { char: "L", decimal: 76, hex: "4c" },
    { char: "M", decimal: 77, hex: "4d" },
    { char: "N", decimal: 78, hex: "4e" },
    { char: "O", decimal: 79, hex: "4f" },
    { char: "P", decimal: 80, hex: "50" },
    { char: "Q", decimal: 81, hex: "51" },
    { char: "R", decimal: 82, hex: "52" },
    { char: "S", decimal: 83, hex: "53" },
    { char: "T", decimal: 84, hex: "54" },
    { char: "U", decimal: 85, hex: "55" },
    { char: "V", decimal: 86, hex: "56" },
    { char: "W", decimal: 87, hex: "57" },
    { char: "X", decimal: 88, hex: "58" },
    { char: "Y", decimal: 89, hex: "59" },
    { char: "Z", decimal: 90, hex: "5a" },
    { char: "a", decimal: 97, hex: "61" },
    { char: "b", decimal: 98, hex: "62" },
    { char: "c", decimal: 99, hex: "63" },
    { char: "d", decimal: 100, hex: "64" },
    { char: "e", decimal: 101, hex: "65" },
    { char: "f", decimal: 102, hex: "66" },
    { char: "g", decimal: 103, hex: "67" },
    { char: "h", decimal: 104, hex: "68" },
    { char: "i", decimal: 105, hex: "69" },
    { char: "j", decimal: 106, hex: "6a" },
    { char: "k", decimal: 107, hex: "6b" },
    { char: "l", decimal: 108, hex: "6c" },
    { char: "m", decimal: 109, hex: "6d" },
    { char: "n", decimal: 110, hex: "6e" },
    { char: "o", decimal: 111, hex: "6f" },
    { char: "p", decimal: 112, hex: "70" },
    { char: "q", decimal: 113, hex: "71" },
    { char: "r", decimal: 114, hex: "72" },
    { char: "s", decimal: 115, hex: "73" },
    { char: "t", decimal: 116, hex: "74" },
    { char: "u", decimal: 117, hex: "75" },
    { char: "v", decimal: 118, hex: "76" },
    { char: "w", decimal: 119, hex: "77" },
    { char: "x", decimal: 120, hex: "78" },
    { char: "y", decimal: 121, hex: "79" },
    { char: "z", decimal: 122, hex: "80" },
];
  

export default Name;
