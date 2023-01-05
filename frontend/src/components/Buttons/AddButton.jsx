import React from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Zoom from '@mui/material/Zoom'

function AddButton (props) {
  return (
    <div>
      <Zoom in={props.expand}>
        <Fab onClick={props.onClick} type={props.type}>
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  )
}
export default AddButton;
