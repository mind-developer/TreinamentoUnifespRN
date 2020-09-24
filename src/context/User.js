import React, { useState } from 'react'
import { createContext } from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage'

const UserContext = createContext(null)

export default UserContext

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    const signinUser = async (user) => {
        try {
            const response = await api.post('/users', user)
            console.log(response.data)
            if(response.status == 201){
                setUser(response.data)
                await AsyncStorage.setItem('id', response.data.id.toString())
                return {success: true}
            }else{
                return {success: false}
            }
        } catch (error) {
            console.log(error)
            return {success: false}
        }
    }

    const getUser = async () => {
        try {
            const id = await AsyncStorage.getItem('id', null)
            if(id){
                const response = await api.get('/users/' + id)
                console.log(response.data)
                if(response.status == 200){
                    setUser(response.data)
                    return {success: true}
                }else{
                    return {success: false}
                }
            }else{
                return {success: false}

            }
        } catch (error) {
            console.log(error)
            return {success: false}
        }
    }

    const resetUser = async () => {
        setUser(null)
        await AsyncStorage.removeItem('id')
    }

    return(
        <UserContext.Provider value={{user, signinUser, getUser, resetUser}}>
            {children}
        </UserContext.Provider>
    )
}
