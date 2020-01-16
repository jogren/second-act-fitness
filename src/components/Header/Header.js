import React from 'react';
import { Typer } from '../Typer/Typer';

export const Header = () => {

  return (
    <header>
      <div className="header-content-container">
        <h1 className="Header_h1">No Pain, All Gain</h1>
        <Typer
          heading={'In-Home Fitness Training to help you:'}
          dataText={["STAY ACTIVE", "IMPROVE STRENGTH", "MAINTAIN INDEPENDENCE"]}
        />
      </div>
    </header>
  )
}