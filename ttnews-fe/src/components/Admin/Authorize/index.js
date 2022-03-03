import { Container, Users,Admin,Data } from "../Authorize/Authorize.styles";
import apiSettings from "../../../API";
import { useState,useEffect } from "react/cjs/react.development";
import AvatarAdmin from "../../../image/temp_avt_admin.png";
import AvatarUser from "../../../image/temp_avt_user.png";
const initialState ={
    users:[],
    admins:[]
}
const Authorize = () =>{
    const [state,setState] = useState(initialState);
    const [authorize,setAuthorize] = useState(false);
    const [error,setError] = useState(false);
    const fetchUser = async()=>{
        try{
            setError(false);          
            const users = await apiSettings.fetchUserByRole('user');
            const admins = await apiSettings.fetchUserByRole('admin');
            
            setState(() => ({
                users,
                admins
            }));
        }
        catch(error){
            setError(true);
        }
        setAuthorize(false);
    }
    useEffect(()=>{
        setState(initialState);
        fetchUser();
    },[authorize])

    const ChangeRoleAdmin=async(e) =>{
        var id = e.target.value;
        state.admins.map(async(admin) => {
            if(admin.id === id)
            {
                var username = admin.username;
                var userpassword = admin.userpassword;
                var fullname = admin.fullname;
                var dateofbirth = admin.dateofbirth;
                var role = "user";
                const data = {id, username, userpassword, fullname, dateofbirth, role};
                await fetch(`https://localhost:44387/api/Newsusers/${id}`,{
                        method:'PUT',
                        headers:{
                            'Content-Type':'application/json',
                            'accept': '*/*'  
                        },
                        body:JSON.stringify(data)
                    }).then(val=>{
                        console.log(val);
                    }).catch(err=>{
                        console.log(err);
                    })
                    setAuthorize(true);
            }

        })
    }
    const ChangeRoleUser=async(e) =>{
        var id = e.target.value;
        state.users.map(async(user) => {
            if(user.id === id)
            {
                var username = user.username;
                var userpassword = user.userpassword;
                var fullname = user.fullname;
                var dateofbirth = user.dateofbirth;
                var role = "admin";
                const data = {id, username, userpassword, fullname, dateofbirth, role};
                await fetch(`https://localhost:44387/api/Newsusers/${id}`,{
                        method:'PUT',
                        headers:{
                            'Content-Type':'application/json',
                            'accept': '*/*'  
                        },
                        body:JSON.stringify(data)
                    }).then(val=>{
                        console.log(val);
                    }).catch(err=>{
                        console.log(err);
                    })
                    setAuthorize(true);
            }

        })
        
    }
  
    return(
        <>
            <Container>
                <Admin>
                    <h2>Quản trị viên</h2>
                    {state.admins!=null && state.admins.map(admin =>{
                        return (
                            <Data key={admin.id}>
                                <div className="avatar">
                                    <img src={AvatarAdmin} alt="anh dai dien"/>
                                </div>
                                <div>
                                    <p className="name">{admin.fullname}</p>
                                    <p className="id">ID: {admin.id}</p>

                                    <button value={admin.id} onClick={ChangeRoleAdmin}>Hạ quyền: Người dùng</button>
                                </div>
                                
                            </Data>
                        )
                    })}
                </Admin>
                <Users>
                    <h2>Người dùng</h2>
                    {state.users!=null && state.users.map(user =>{
                        return (
                            <Data key={user.id}>
                                <div className="avatar">
                                    <img src={AvatarUser} alt="anh dai dien"/>
                                </div>
                                <div>
                                    <p className="name">{user.fullname}</p>
                                    <p className="id">ID: {user.id}</p>
                                    <button value={user.id} onClick={ChangeRoleUser}>Cấp quyền: Người kiểm duyệt</button>
                                </div>
                            </Data>
                        )
                    })}
                </Users>
            </Container>
        </>
    )
}
export default Authorize