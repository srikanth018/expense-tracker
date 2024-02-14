import './Income.css'

function Income(props) {
    const {income,expense} = props
  return (
    <>
        <div className='balance'>
            <span><span className='title'>Balance</span>{` : ${income-(-expense)}`}</span>
        </div>
        <div className='in-ex-card'>

            <div className='income'>
                <span className='title'>Income</span>
                <span>{income}</span>
            </div>
            <div className='block'></div>
            <div className='expense'>
                <span className='title'>Expense</span>
                <span>{-expense}</span>
            </div>
        </div>
    </>
  )
}

export default Income
