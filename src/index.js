import './modules/1';
import './modules/2';
import './modules/3';
import './slyles/style.css';
import * as $ from 'jquery';
import './slyles/styleComponent.scss';
import '../babel';
import { createModal, isValid } from './modules/1';
import { Question } from './modules/question';
import { authWithEmailAndPassword, getAuthForm } from './modules/3';

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')
const modalBtn = document.getElementById('modal-btn')

window.addEventListener('load',Question.renderList)

form.addEventListener('submit', submitFormHandler)

modalBtn.addEventListener('click', openModal)

input.addEventListener('input', ()=> {
    submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
    event.preventDefault()
    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitBtn.disabled = true
        // Async request to server to save the question
        Question.create(question).then( () => {
            input.value = ''
            input.className = ''
            submitBtn.disabled = false
        })
        console.log('question', question)
        

    }
}
function openModal() {
    createModal('Autorization', getAuthForm())
    document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, {once: true})
}
function authFormHandler(event) {
    event.preventDefault()

    const btn = event.target.querySelector('button')
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    btn.disabled = true

    authWithEmailAndPassword(email, password)
    .then(token => {
        return Question.fetch(token)
    })
    .then(renderModalAfterAuth)
    .then(() => btn.disabled = false)
}
function renderModalAfterAuth(content) {
    if (typeof content === 'string') {
        createModal("Error", content)
    } else {
        createModal('List of questions', Question.listToHTML(content))
    }
}