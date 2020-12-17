# TOAST MESSENGER
using html css javascript

# How to use

import the file toastMessenger.js into the html file you want to use
pass the parameters to the addToast **function (element, title, content, type)**

    element : this is block you want to add Toast Messenger
    title : this is title in Toast - ex : "Success"
    content : this is content in Toast - ex : "Sign Up Success"
    type : this is type in Toast, include : success, info, warning, error
            Note that the correct type must be passed
            
# Example
    const bodyElement = document.querySelector('body')
    addToast(bodyElement, "Ok", "Sign Up Success", "success")