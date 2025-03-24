import { fetchProductList } from "@/app/actions"

const ServerActionsExample= async()=>{
    const productList = await fetchProductList()
    console.log(productList)
  return (
    <div>
        <h1 className="text-4xl font-bold">server actions eg - server components</h1>
        <ul className="">
          {
            productList && productList.length>0 ? productList.map(i=> <li className="" key={i.id}>{i.title}</li>) : <></>
          }
        </ul>
    </div>
  )
}

export default ServerActionsExample
