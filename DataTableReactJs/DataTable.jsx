import { useState,useEffect } from "react";
function DataTable({data}) {

  const [keys,setKeys]=useState([])
  const [values,setValues]=useState([])

    useEffect(() => {
        getDataKeys()
        getDataValue()
    }, [data])

    const getDataKeys = ()=>{
        
        if (data.length>0) {
            setKeys(Object.keys(data[0]))
        }
    }
    const getDataValue = ()=>{
        setValues([])
        data.forEach(row =>setValues(prevArray => [...prevArray, Object.values(row)]))
    }
    const getid = (element)=>{
        console.log(element);
    }    
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-auto border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                    {
                        keys?
                        keys.map((element,i) =>(
                            <th key={i}
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                {element}
                            </th>
                        ))
                        : null
                    }
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Update
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {
                    values? 
                    values.map((element,i)=>(
                        <tr key={i}>
                            {
                                element.map((value,k)=>(
                                <td key={k} className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {value}
                                </td>
                                ))
                            }
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <a className="text-green-500 hover:text-green-700" href="#" onClick={()=>getid(element)}>
                                Edit
                                </a>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <a className="text-red-500 hover:text-red-700" href="#" onClick={()=>getid(element)}>
                                Delete
                                </a>
                            </td>
                     
                        </tr>
                    ))
                    :null
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
