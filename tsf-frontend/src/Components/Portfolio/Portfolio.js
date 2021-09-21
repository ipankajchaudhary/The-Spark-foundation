import React, { useContext, useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom';
import './Portfoliostyle.css'
import portfolioContext from '../../Context/portfolioContext';
import Portfolioitem from './Portfolioitem';

const Portfolio = ({ currentcurrency }) => {


  const [currentBalance, setcurrentBalance] = useState(100000)


  const context = useContext(portfolioContext);
  const { portfolios, getPortfolios, editPortfolio } = context;
  useEffect(() => {


    getPortfolios()


    // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)


  const [newamount, setnewamount] = useState(0)

  const updatePortfolio = (currentPortfolio) => {
    ref.current.click();
    setPortfolio({ id: currentPortfolio._id, ecoinid: currentPortfolio.coinid, eamount: currentPortfolio.amount})
  }

  const handleClick = (e) => {
    editPortfolio(portfolio.id, portfolio.ecoinid, parseInt(portfolio.eamount) + parseInt(newamount))
    setcurrentBalance(currentBalance - portfolio.eamount)
    refClose.current.click();
    localStorage.setItem('currentbalance', currentBalance - portfolio.eamount)
  }



  // const { addPortfolio } = context;

  const [portfolio, setPortfolio] = useState({ coinid: "", amount: "" })



  const onChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value })
  }





  const renderIfloggedin = () => {
    return (<>


      {/* MODAL form for send money */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-coinid" id="exampleModalLabel">Send Money</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="coinid" className="form-label">Account Holder Name</label>
                  <input type="text" className="form-control" id="ecoinid" name="ecoinid" value={portfolio.ecoinid} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount</label>
                  <input type="text" className="form-control" id="eamount" name="eamount" value={portfolio.eamount} onChange={onChange} minLength={5} required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">SEND</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal part ends here */}
      
      {/*  view page */}
      <div style={{ height: "fit-content", backgroundColor:"white"}}>
        <div className="grid full-width-layout">
          <div className="inner-container">
            <div className="portfolio-container">
              <div display="flex" className="portfolio-innner-container">
                <div className="leftcontainer showPortfolio" style={{ display: "block" }}>
                  <div display="flex" className="left-innner-container" style={{ marginBottom: "26px" }}>
                    <div className="display-100">
                      <div>
                        <div data-rbd-droppable-id="droppable" data-rbd-droppable-context-id="1">
                          <div data-rbd-draggable-context-id="1" data-rbd-draggable-id="614238c83a7b285d2f55b044" className="left-innner-upper-container">
                            <div className="my-main-portfolio">
                              <div className="my-main-portfolio-logo" style={{ backgroundColor: "rgb(35, 220, 245)" }}>
                                M
                              </div>
                              <div style={{ display: "block" }}>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                  <span style={{ marginRight: "5px" }}>
                                    <b>My Balance</b>

                                  </span>
                                  
                                </p>
                                  <b>{localStorage.getItem('currentbalance')}</b>
                                <p>
                                  

                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-container">
                  <div style={{ position: "absolute", left: "-10000px" }}>
                  </div>
                  <div style={{ position: "initial", left: "0px" }} className="avoid-scroll">
                    <div className="current-balance-container">
                      <p color="neutral6" fontSize="1" className="current-balance-headline-container">
                        <span className="current-balance-headline">
                          <b>Current Balance</b>
                        </span>
                      </p>
                      <div display="flex" height="48" className="amount-container">
                        <div display="flex" width="1,1,auto" className="amount-container-left">
                          <div className="price">
                            <b>{localStorage.getItem('currentbalance')}</b>

                          </div>
                        </div>
                        {/*<div display="none,none,flex" className="add-new">
                          <input type="text" className="form-control m-3" id="coinid" placeholder="Name a coin" name="coinid" aria-describedby="emailHelp" value={portfolio.coinid.toLowerCase()} onChange={onChange} minLength={5} required autoFocus={true} />
                          <input type="text" className="form-control m-3" id="amount" placeholder="Amount" name="amount" value={portfolio.amount} onChange={onChange} minLength={5} required />
                          <button className="btn btn-primary plus-sign-container" onClick={handleClick}>
                            Add
                          </button>
    </div> */}
                      </div>
                    </div>
                    {/* <div display="none,none,flex" className="add-new-2">
                      <input type="text" className="form-control m-3" id="coinid" placeholder="Name a coin" name="coinid" aria-describedby="emailHelp" value={portfolio.coinid} onChange={onChange} minLength={5} required />
                      <input type="text" className="form-control m-3" id="amount" placeholder="Amount" name="amount" value={portfolio.amount} onChange={onChange} minLength={5} required />
                      <button className="btn btn-primary plus-sign-container" onClick={handleClick}>
                        Add
    </button>
    </div> */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Select to send</th>
                          <th scope="col">Account HolderName</th>
                          <th scope="col">Balance</th>


                        </tr>
                      </thead>
                    </table>
                    {/*portfolios.length === 0 ?
                      <div className="right-down-container">
                        <div className="portfolio-empty-box">
                          <div className="p-e-coinid">
                            <b> This portfolio is empty</b>

                          </div>
                          <div className="p-e-subcoinid">
                            <b> Add any account holder to get started</b>

                          </div>

                        </div>
                      </div>
                    : */}





                    {portfolios.map((portfolio) => {
                      return <Portfolioitem key={portfolio._id} currentcurrency={currentcurrency} currentBalance={currentBalance} setcurrentBalance={setcurrentBalance} portfolio={portfolio} updatePortfolio={updatePortfolio} setnewamount={ setnewamount}/>
                    })

                    }


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }

  return (
    <div>
      {renderIfloggedin()}
    </div>

  )
}

export default Portfolio
