import React from 'react';

export const InfoClient = (props) => {
  return(
    <>
    <p>Cliente: {props.infoClient.client}</p>
    <p>Nro. mesa:{props.infoClient.table}</p>
    </>
  )
}