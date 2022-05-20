import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

interface Props {

}

interface IUser {
    userSignin? : {
        userInfo : {
            name? : string ,
            email : string ,
            password : string
        }
    } ,

    // someOtherStates : {}
}

export const IndexPage : React.FC<Props> = () => {

    const dispatch = useDispatch()
    const userInfo = useSelector((state : IUser ) => state.userSignin!.userInfo);


  return (
    <div>
        
    </div>
  )
}
