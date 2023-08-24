import React from "react";

const getTickets = async ()=>{

    const res = await fetch('http://localhost:4000/tickets')

    return res.json()

}

export const  TicketsList: React.FC<any> = async () =>{


    const tickets = await getTickets();
    return(
        <>
        {
            tickets.map((data:any,index:number)=>{
                return(
                    <>
                    <div key={index} className="card my-5">
                        <h3>{data.title}</h3>
                        <p>{data.body.slice(0,200)}...</p>
                        <div className={`pill ${data.priority}`}></div>
                        {data.priority}  priority

                    </div>
                    </>
                )
            })
        }
        

        </>
    )
}

export default TicketsList