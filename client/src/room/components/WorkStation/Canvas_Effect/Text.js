import { useState, useRef } from "react";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";

const Text = (props) => {
  const [font, setFont] = useState("");
  const [linePx, setlinePx] = useState(30);
  const lineColor = useRef(props.TC);

  const handleChange = (e) => {
    e.preventDefault();
    setFont(e.target.value);
    props.font(e.target.value);
  };

  const changepx = (e) => {
    e.preventDefault();
    setlinePx(e.target.value);
    console.log(e.target.value);
  };

  const changecolor = (e) => {
    e.preventDefault();
    console.log(lineColor.current.value);
    props.color(lineColor.current.value);
  };

  return (
    <>
      <Button
        className="sidebar-item"
        name="Text Mode"
        onClick={() => {
          props.mode(props.textmode ? false : true);
        }}
        startIcon={<TextFieldsOutlinedIcon style={{ fontSize: 35 }} />}
      ></Button>
      {props.textmode && (
        <ul className="canvaseffect__items">
          <li>
            <span style={{ color: "white" }}>1px</span>
            <input
              type="range"
              min="1"
              max="50"
              value={linePx}
              onChange={changepx}
              onMouseUp={() => {
                props.px(linePx);
              }}
            />
            <span style={{ color: "white" }}>50px</span>
          </li>
          <li>
            <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
              <InputLabel id="demo-select-small">Font</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={font}
                label="Font"
                onChange={handleChange}
                autoWidth
                style={{ fontFamily: font }}
              >
                <MenuItem
                  value={"system-ui"}
                  style={{ fontFamily: "system-ui" }}
                >
                  system-ui123
                </MenuItem>
                <MenuItem value={"Georgia"} style={{ fontFamily: "Georgia" }}>
                  Georgia123
                </MenuItem>
                <MenuItem value={"cursive"} style={{ fontFamily: "cursive" }}>
                  cursive123
                </MenuItem>
                <MenuItem value={"fantasy"} style={{ fontFamily: "fantasy" }}>
                  fantasy123
                </MenuItem>
                <MenuItem
                  value={"monospace"}
                  style={{ fontFamily: "monospace" }}
                >
                  monospace123
                </MenuItem>
                <MenuItem value={"math"} style={{ fontFamily: "math" }}>
                  math123
                </MenuItem>
              </Select>
            </FormControl>
          </li>
          <li>
            <input
              type="color"
              value={lineColor}
              ref={lineColor}
              onChange={changecolor}
            />
          </li>
        </ul>
      )}
    </>
  );
};
export default Text;
