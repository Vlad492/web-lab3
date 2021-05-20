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