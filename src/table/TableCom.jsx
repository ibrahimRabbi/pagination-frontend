import { useEffect, useState } from 'react'
import { Pagination, Table } from 'antd';



const columns = [
  {
    title: ' product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
];







function TableCom() {


  const [totalData, setTotalData] = useState(0)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const limitData = 4

 


  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product/getProducts?limit=${limitData}&page=${currentPage}`)
      .then(res => res.json())
      .then(res => {
        setData(res?.response?.data)
        setTotalData(res?.response?.totalData)
      })
  }, [data,totalData])


  return (
    <>
      <Table
        className='w-[90%] mx-auto mt-10'
        dataSource={data}
        columns={columns}
        pagination={false}
        tableLayout='fixed'
      />
      <div className=' mt-10 flex justify-center p-5'>
        <Pagination
          pageSize={limitData}
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
          total={totalData}
        />
      </div>
    </>
  )
}

export default TableCom
