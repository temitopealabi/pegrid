import React, { Fragment } from 'react';
import generalCss from '../../general.module.css';
import championCss from './champion.module.css';

const Championship = () => {
    const { font12, joslaText, dispUsedUnit, fontNormal, joslaGTextC } = generalCss;
    const { smallFin } = championCss;
    return (<Fragment>
        <div className={`my-3 ${fontNormal}`}> This week champions</div>

        <div className="d-flex justify-content-between py-2">
            <div>
                <div><img width="30" src="/images/consumer/ekedp.svg" alt="ekedp" /></div>
                <div className="text-center my-2">
                    <img width="40" src="/images/consumer/user.svg" alt="user icon" />
                </div>
                <div className={`text-center ${fontNormal}`}><b>5433667834</b></div>
                <div className="text-center"><span className={` ${font12} ${smallFin}`}>89 Points</span>
                    <span className={`${dispUsedUnit}   ${joslaText} pl-2`}>-1.2(4%)</span></div>
                {/* <div><span className={`${ smallFin} ${font12}`}></span><span className={`float-right ${font12} `}></span></div> */}
            </div>
            <div>

                <div><img width="30" src="/images/consumer/ikelectric.png" alt="ekedp" /></div>
                <div className="text-center my-2">
                    <img width="40" src="/images/consumer/user.svg" alt="user icon" />
                </div>
                <div className={`text-center ${fontNormal}`}><b>8764987428</b></div>
                <div className="text-center"><span className={` ${font12} ${smallFin}`}>134 Points</span>
                    <span className={`${dispUsedUnit}   ${joslaText} pl-2`}>-3.3(5%)</span></div>
            </div>
            <div>

                <div className="py-2 px-3" style={{
                    background: "#FCF3B3",
                    borderRadius: '30px'
                }}>
                    <div className="my-2"><img width="35" src="/images/consumer/ekedp.svg" alt="ekedp" /></div>
                    <div className="text-center my-2" style={{ position: 'relative' }}>
                        <span><img width="90" src="/images/consumer/userDark.svg" alt="user icon" /></span>
                        <div className="ml-2" style={{
                            position: 'absolute', bottom: '0', left: '40px,',
                            width: '100%'
                        }}><img className="float-right" width="15" src="/images/consumer/winner.svg" alt="user icon" /></div>

                    </div>
                    <div className={`text-center ${fontNormal}`}><b>4567321876</b></div>
                    <div className="text-center"><span className={` ${font12} ${smallFin}`}>367 Points</span>
                        <span className={`${dispUsedUnit}   ${joslaGTextC} pl-2`}>+6.7(7%)</span></div>
                </div>
            </div>
            <div>
                <div><img width="30" src="/images/consumer/ekedp.svg" alt="ekedp" /></div>
                <div className="text-center my-2">
                    <img width="40" src="/images/consumer/user.svg" alt="user icon" />
                </div>
                <div className={`text-center ${fontNormal}`}><b>1234567890</b></div>
                <div className="text-center"><span className={` ${font12} ${smallFin}`}>262 Points</span>
                    <span className={`${dispUsedUnit}   ${joslaGTextC} pl-2`}>+4.3(5%)</span></div>
            </div>
            <div>
                <div><img width="30" src="/images/consumer/ikelectric.png" alt="ekedp" /></div>
                <div className="text-center my-2">
                    <img width="40" src="/images/consumer/user.svg" alt="user icon" />
                </div>
                <div className={`text-center ${fontNormal}`}><b>3876509823</b></div>
                <div className="text-center"><span className={` ${font12} ${smallFin}`}>189 Points</span>
                    <span className={`${dispUsedUnit}   ${joslaGTextC} pl-2`}>+9.3(15%)</span></div>
            </div>
        </div>
    </Fragment>);
}

export default Championship;