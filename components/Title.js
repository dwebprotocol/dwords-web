import React from 'react'
import  useStyles  from './../hooks/useStyles'
import Typography from '@material-ui/core/Typography'

export default function Title (props) {
  const classes = useStyles()
  return (
    <Typography variant="h2" className={classes.title}>
      {props.title}
    </Typography>
  )
}