import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Copyright (props) {
  return (
    <Typography variant="h6">
      Copyright 2021 {props.companyName}. All rights reserved.
    </Typography>
  )
}