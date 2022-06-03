import React from 'react'
import { dark } from "@mui/material/styles/createPalette";

function home() {
  return (
    <div>
      <div className="mt-5">

        <button type="button" class="btn btn-outline-primary">Primary</button><br /><br />
        <button type="button" class="btn btn-outline-secondary">Secondary</button><br /><br />
        <button type="button" class="btn btn-outline-success">Success</button><br /><br />
        <button type="button" class="btn btn-outline-danger">Danger</button><br /><br />
        <button type="button" class="btn btn-outline-warning">Warning</button><br /><br />
        <button type="button" class="btn btn-outline-info">Info</button><br /><br />
        <button type="button" class="btn btn-outline-light">Light</button><br /><br />
        <button type="button" class="btn btn-outline-dark">Dark</button><br /><br />
      </div>

    </div>
  )
}

export default home
