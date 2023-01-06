import React from 'react'
import { IMobile } from '../types'
import MobileCard from './MobileCard';

interface IPropType{
    mobiles: IMobile[];
}

const MobileList = ({mobiles}: IPropType) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 grid-gap gap-16 mt-16">
            {mobiles.map((mobile) => {
                return (
                    <div key={mobile.id}>
                            <MobileCard mobile={mobile} />
                        
                    </div>
                );
            })}
        </div>
    );
};

export default MobileList