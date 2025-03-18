async function fetchData()
{
    const response=await fetch('http://localhost:7000/data',
        {
            method: "GET"
        }
    )

    const data=await response.json();
    console.log(data);
}