// export const reducer = (state, action) =>{

//     switch(action.type)
//    { case 'Del':
//         return state.filter(val => val.id !== action.payload.id);
//     case  'Search':
//         return users.filter((value) => `${value[search]}`.toLocaleLowerCase().includes(action.payload.val.toLocaleLowerCase()));
//     case 'Add':
//         if(action.payload.name.length && action.payload.status.length && action.payload.job.length && action.payload.age.length){
//             setUserName('');
//             setUserStatus('');
//             setUserAge('');
//             setUserJob('');
//             return  state = [...state, action.payload] 
//         }else{
//             return state
//         }
//     case 'Update':
//         if (action.payload.boolen){
           
//             setActive(null)
//             return state =  state.map((value) => value.id === active?.id ? 
//             {...value, name: nameE, job: jobE, status: statusE, age: ageE} 
//             : value);
            
    
//                 }else
//                 {
//                     setName(action.payload.upData.name);
//                     setStatus(action.payload.upData.status)
//                     setJob(action.payload.upData.job)
//                     setAge(action.payload.upData.age)
//                     setActive(action.payload.upData)
//                 }
                
            
        
//      default: return state;}
// }