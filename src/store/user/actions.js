
import router from '../../router'
export default {
    async signup(context, payload){
        //signing up at Firebase Authentication 
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDL_0XYB2zRn2rcf7RIwSwvKDOT4wbzsBo',{
            method: 'POST',
            body: JSON.stringify(
                {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                }
            )
        })

        if(!res.ok){
            const error = new Error('Email is already registered!')
            throw error
        }
        //storing data at Firebase realtime database at user folder 
        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/users.json`, {
            method: 'POST',
            body: JSON.stringify({
                ...payload,
            })
        })

        if(!response.ok){
            //if any error occurs and user data is upload at users folder than we have to delete the user details from authentications too.
            //..
            const error = new Error('Something went wrong!2')
            throw error
        }

        const data = await response.json();

        console.log(data)
        // context.router.redirect('/')
    },

    async login(context, payload){
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDL_0XYB2zRn2rcf7RIwSwvKDOT4wbzsBo',{
            method: 'POST',
            body: JSON.stringify(
                {
                    email: payload.email,
                    password: payload.password
                }
            )
        })
        console.log(res)
        if(!res.ok){
            const error = new Error('Something went wrong' || res.message);
            throw error;
        }

        const data = await res.json()
        console.log(data.idToken)

        localStorage.setItem('idToken', data.idToken)
        localStorage.setItem('localId', data.localId)
        context.dispatch('fetchUserDetails', { email: data.email })

        // context.commit('setUser', data)
    },
    
    async fetchUserDetails(context, payload){
        const response = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/users.json`, {
            method: 'GET'
        })

        if(!response.ok){
            //..
        }

        const users = await response.json();
        // console.log(users)
        let reqUser = {};
        for(const key in users){
            if(users[key].email === payload.email){
                reqUser.id = key
                reqUser.email = users[key].email;
                reqUser.role = users[key].role;
                break;
            }
        }

        // const user = users.filter(user => user.email===payload.email )
        // console.log(reqUser)
        context.commit('setUser', reqUser)
    },

    async autoLogin(context){
        const idToken = localStorage.getItem('idToken')
        if(!idToken) return;


        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDL_0XYB2zRn2rcf7RIwSwvKDOT4wbzsBo',{
            method: 'POST',
            body: JSON.stringify(
                {
                    idToken: idToken,
                }
            )
        })

        const data = await res.json();

        context.dispatch('fetchUserDetails', { email: data.users[0].email })
        
    },

    logout(context){
        localStorage.removeItem('idToken')

        context.commit('setUser', {
            id : null,
            email : null,
            role : null
        })

        router.replace('/shop')
    }
}