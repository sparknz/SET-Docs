```react
<div style={{display: "flex", justifyContent: "space-between"}}>
    {
        opacityArray.map(opacity => (
            <div>
            <div key={opacity.name} style={{
                height: "150px",
                width: "150px",
                backgroundColor: "black",
                opacity: opacity.value,
            }}>
            </div>
                <h3>{opacity.name}</h3>
                <p>{opacity.value}</p>
            </div>
        ))
    }
</div>
```