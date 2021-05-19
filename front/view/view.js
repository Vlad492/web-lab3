class ContactsView {

    static insertState() {

        var element = document.getElementById("contact-table");
        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }

        new Vue({
            el: '#contact-table',
            data: {
                contacts: [...contactsStore.getState()]
            }
        })
        // state.forEach((elem, index) => {
        //     let block = document.createElement("tr");
        //     block.innerHTML = `<th scope="row">${index}</th><td>${elem.name}</td><td>${elem.number}</td><td><button type="button" class="btn btn-danger contacts-delete tmp-data" data="${index}">Delete contect</button></td>`
        //     if(document.getElementById('contact-table')){
        //         document.getElementById('contact-table').appendChild(block);
        //     }
        //     let buttons = document.getElementsByClassName('tmp-data')
        //     if(buttons.length){
        //         buttons[0].addEventListener('click', (e) => {
        //             contactsStore.dispatch({
        //                 type:'REMOVE_CONTACT',
        //                 id:parseInt(e.target.attributes.data.nodeValue)
        //             })
        //         })
        //     buttons[0].classList.remove('tmp-data')
        //     }
        // })

    }
}
ContactsView.insertState()
class Login {
    static successfullLogin() {
        let disabledLinks = document.getElementsByClassName('nav-link-login')
        for (let i = 0; i < disabledLinks.length; i++) {
            disabledLinks[i].classList.remove('disabled')
        }
    }
}




contactsStore.subscribe(() => ContactsView.insertState())