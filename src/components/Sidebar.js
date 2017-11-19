/**
 * Created by bowenjiang on 11/18/17.
 */

import React from 'react';

 const Sidebar =({buildings})=>{
        return(
            <div>
                <ul>
                    {buildings.map((b,i)=>(
                        <li key={i}>
                            {b.buildingName}
                            <ul>
                                {b.fountains.map((f,i)=>(
                                    <li key={i}>
                                        {f.floor}
                                        {f.description}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        )
};
export default Sidebar;

