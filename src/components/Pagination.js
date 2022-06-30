const Pagination = ({transactionsPerPage, totalTransactions,setCurrentPage}) =>{

    const pageNumbers =[]

    for (let i = 1; i<= Math.ceil(totalTransactions/transactionsPerPage); i++){
        pageNumbers.push(i)
    }

    const handlePageChange=(id)=>{
        setCurrentPage(Number(id))
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(pageNumber=>
                    <li key={pageNumber} className='page-item'>
                       <a className="page-link" href='#' onClick={e=>handlePageChange(e.target.textContent)}>{pageNumber}</a> 
                    </li>

                )}

            </ul>
        </nav>
    )

}

export default Pagination