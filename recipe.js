// define the function to load the ingredient list
function browniesrecipe()
{
    let value = parseInt(document.querySelector('#length').value);

    let ratio = (value*value/400);

    let brownies = [{"name":"unsalted butter","number": 185, "unit":"g"},
    {"name":"dark chocolate","number": 185, "unit":"g"},
    {"name":"eggs","number": 3, "unit":""},
    {"name":"golden caster sugar","number": 275, "unit":"g"},
    {"name":"plain flour","number": 85, "unit":"g"},
    {"name":"cocoa powder","number": 40, "unit":"g"},
    {"name":"baking powder","number": 2.5, "unit":"g"},
    {"name":"white chocolate","number": 50, "unit":"g"},
    {"name":"milk chocolate","number": 50, "unit":"g"}];

    // replace the content of <tbody> with blank so only a new table is inserted after a selection
    document.querySelector('#ingredientstable').innerHTML = '';

    // append a new row to the end of the table in the <tbody>
    for (let i = 0; i < brownies.length; i++)
    {
        let table = document.querySelector('#ingredientstable');
        let ingredient = brownies[i];
        table.innerHTML += `<tr><td>${(ingredient["number"]*ratio).toFixed(1)} ${ingredient["unit"]}</td><td>${ingredient["name"]}</td></tr>`;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // load the recipe when the page is loaded the first time
    browniesrecipe();

    // re-load the recipe after making selection
    document.querySelector('#length').onchange = function(){
        browniesrecipe();
    };
})
