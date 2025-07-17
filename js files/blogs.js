function add_a_blog_template(){

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter your blog here';
    input.id = 'userInput'
    document.getElementById('inputContainer').appendChild(input);

}

function go_to_Home_Page(){

    window.location.href = 'home.html';
}

function display_the_blog(){

    const txt1 = document.getElementById('inputContainer');
    const out1 = document.getElementById('displayText');

    const btn1 = document.getElementById('')

    out1.innerHTML = txt1.value;

}