async function fetchData()
{
    const response=await fetch('http://localhost:5050/',
        {
            method: "GET"
        }
    )

    const data=await response.json();
    console.log(data);
}


async function fetchData1()
{
    const response=await fetch('http://localhost:5050/',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )

    const data=await response.json();
    console.log(data);
}