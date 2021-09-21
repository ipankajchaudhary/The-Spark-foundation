
import React  from 'react'
// import portfolioContext from '../../Context/portfolioContext';


const Portfolioitem = (props) => {
    // const context = useContext(portfolioContext);
    // const { deletePortfolio } = context;
    // eslint-disable-next-line
    const { portfolio, updatePortfolio ,setnewamount} = props;
    // const { currentBalance, setcurrentBalance } = props;


    // const handledelete = () => {
    //         // setcurrentBalance(currentBalance - (portfolio.amount))
    //         // localStorage.setItem('currentBalance', currentBalance)
    //         deletePortfolio(portfolio._id)
    // }
    var stylingObject = {
        td: {
            textAlign:"center"
        },
        dw:{
            textAlign:"center",
            width: "16%"
        },
        user:{
            width: "500px",
            textAlign:"center"
            
        }
    }
    const handleonclick = () => {
        setnewamount(portfolio.amount)
        updatePortfolio(portfolio)

    }
    const render = () => {
        if (portfolio.coinid) {
            
            return (<>
                    <table className="table container">
                        <tbody>
                            <tr >
                                <td style={stylingObject.dw}><i className="fas fa-paper-plane" onClick={handleonclick}></i></td>
                                <td style={stylingObject.user}>{portfolio.coinid}</td>
                                <td style={stylingObject.td}>{portfolio.amount}</td>
                            </tr>
                        </tbody>
                    </table>
                </>

            )
        }
    }


    return (
        <>   {render()}
        </>
    )
}

export default Portfolioitem