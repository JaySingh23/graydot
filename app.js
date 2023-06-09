
function allowDrop(ev) {
    ev.preventDefault();
    }

    function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    setTimeout(() => {
      ev.target.classList.add('hide');
    }, 0);
    }

    function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dataId = document.getElementById(data)
    ev.target.appendChild(dataId);
    dataId.classList.remove('hide')
    showNotification("Item dropped successfully!");
    }

    // Function to reset the boxes
    function resetBoxes() {
    // Clear the content of box2
    window.location.reload();
    }

    function showNotification(message) {
        var notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
            notification.textContent = '';
        }, 2000);
    }