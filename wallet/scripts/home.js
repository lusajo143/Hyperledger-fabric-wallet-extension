


chrome.storage.sync.get("color", ({ color }) => {
    let btn = document.getElementById("changeColor");
    btn.style.backgroundColor = color
    
    btn.addEventListener('click', async ()=>{
        let [tab] = await chrome.tabs.query({active:true, currentWindow: true})
    
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: changeColor
        })
    })
    
    function changeColor() {
        chrome.storage.sync.get('color', ({color}) => {
            document.body.style.backgroundColor = color
        })
    }
})


