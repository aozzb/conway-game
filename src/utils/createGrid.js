const createGrid=(rows, cols)=>{
    const grid=[];
    for(let i=0; i<rows; i++){
        const row=[];
        for (let j = 0; j < cols; j++) {
            row.push(0);
        }
        grid.push(row);
    }
    return grid;
}

export default createGrid;