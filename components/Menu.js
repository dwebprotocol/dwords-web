import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'

export default function Menu () {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          dWords
        </Typography>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="https://dwebx.org">
          <Button>About The dWeb</Button>
        </Link>
        <Link to="https://peepsx.com">
          <Button>About Peeps</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}