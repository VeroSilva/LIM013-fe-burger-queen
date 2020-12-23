import React from 'react';

export const InfoClient = (props) => {
  return(
    <h1>{props.infoClient.client} | {props.infoClient.table}</h1>
   
  )
}