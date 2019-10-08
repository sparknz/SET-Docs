```react
<div style={{display: "flex", justifyContent: "space-between"}}>
    {
        radiusArray.map(radius => (
            <div>
            <div key={radius.name} style={{
                height: "50px",
                width: "50px",
                backgroundColor: "black",
                borderRadius: radius.value,
            }}>
            </div>
                <h3>{radius.name}</h3>
                <p>{radius.value}</p>
            </div>
        ))
    }
</div>
```