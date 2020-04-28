import React, { Fragment } from 'react';
import TableSearch from './table/TableSearch';
import generalCss from '../../general.module.css';
import billstateCss from './billstate.module.css';




const BillStatement = () => {
    const { netAnalysis14F, fontNormal, font12, smallFin, fontDark } = generalCss;
    const { editButtonTwo, editButton, forPay } = billstateCss;
    return (
        <Fragment>
            <div className="pt-2">
                <div className="d-flex">

                    {/* current balance  */}
                    <div className="my-1" style={{ flex: '2' }}>
                        <div><span>Current Balance</span> <img className="d-inline mx-2" src="/images/consumer/money.svg" alt="money" /></div>
                        <div className="mt-3"><span className={smallFin}> <b>₦</b></span><span className={`${fontNormal} ${smallFin} h4`}><b>1,267.00</b></span></div>
                    </div>

                    <div className="my-1" style={{ flex: '4' }}>
                        <div><span>Next Bill</span> <img className="d-inline mx-2" src="/images/consumer/money.svg" alt="money" /></div>
                        <div className="d-flex mt-3">
                            <div className=""><span> <b>₦</b></span><span className={`${fontNormal} ${fontDark} h4`}><b>2,543.12</b></span></div>
                            <div className="mx-2 mt-2"><div className={`${netAnalysis14F} h5 my-1 `}>due in 14 days</div>
                                <div className=""><span className={font12}>Estimate based on your usage</span></div></div>
                        </div>

                    </div>

                    <div className="my-1" style={{ flex: '3' }}>
                        <div>
                            <div className="d-flex justify-content-around">
                                <div><img src="/images/consumer/visa.svg" alt="visa" /></div>
                                <div><img src="/images/consumer/mastercard.svg" alt="mastercard" /></div>
                                <div><img src="/images/consumer/verve.svg" alt="verve" /></div>
                            </div>
                        </div>

                        <div><div className="d-flex justify-content-around my-3">
                            <button type="button" className={`${editButton} btn  btn-warning col-md-5 `} style={{ color: '#ffffff' }}><span><img id={forPay} src="/images/consumer/paynow.svg" alt="paynow" /></span> Pay Now</button>
                            <button type="button" className={`${editButtonTwo} btn  btn-block btn-secondary col-md-5`} style={{ background: 'transparent', color: 'black' }}><span><img src="/images/consumer/coin.svg" alt="paynow" /></span> Loan</button>
                        </div></div>
                    </div>
                </div>

                <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1"><hr style={{ background: '#C4C4C4' }} /></div>

                {/* Bill & Statement Table */}
                <TableSearch />
            </div>

        </Fragment>
    );
}

export default BillStatement;