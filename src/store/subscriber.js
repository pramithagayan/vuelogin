import store from '@/store'
import axios from 'axios'
import TokenService from '../services/storage.service'

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/SET_TOKEN': 
            if(mutation.payload) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                TokenService.saveToken(mutation.payload)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                TokenService.removeToken()
            } 
            break;
    }
})