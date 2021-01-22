import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        contact: {
            contact: {},
            photo: {},
            messages: []
        },
        messages: [{ messages: [] }]
    },

    getters: {
        getContact: state => state.contact,
        getMessages: state => state.messages
    },

    mutations: {
        ADD_CONTACT: (state, contact) => {
            state.contact.contact = contact
        },
        ADD_PHOTO: (state, photo) => {
            state.contact.photo = photo
        },
        ADD_MESSAGES: (state, messages) => {
            state.contact.messages = messages
        },
        ADD_MESSAGE: (state, { newTitle, newId, contactId }) => {
            const index = state.messages.findIndex(m => m.contactId === contactId)
            if (state.messages[0].messages.length < 1) {
                state.messages.splice(0, 1, { contactId: contactId, messages: [{ title: newTitle, id: newId }] })
            } else {
                if (index != -1) {
                    let messages = state.messages[index].messages
                    messages.push({ title: newTitle, id: newId })
                    state.messages.splice(index, 1, { contactId: contactId, messages })
                } else {
                    state.messages.push({ contactId: contactId, messages: [{ title: newTitle, id: newId }] })
                }
            }
        }
    }
})