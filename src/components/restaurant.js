import React, { useState, useEffect } from 'react';

import { Kitchen } from './kitchen'
import { OrderView } from './orderView';

export const Restaurant = () => {
  
  return (
    <div>
      <OrderView />
      <Kitchen />
    </div>
  )
};