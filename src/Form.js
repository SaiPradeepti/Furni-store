import {useState} from 'react'

const Form = () => {
    const [userQueryInfo,setUserQueryInfo] = useState({name:'',email:'',query:''});
    const [queryList,setQueryList] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserQueryInfo({...userQueryInfo,[name]: value});
    }

    const handleSubmit = (e) => {
        if(userQueryInfo.name && userQueryInfo.email && userQueryInfo.query){
            const queryInfo = {id: new Date().getTime().toString(),...userQueryInfo};
            console.log(queryList,queryInfo)
            setQueryList([...queryList,queryInfo]);
            console.log(queryList);
            setUserQueryInfo({name:'',email:'',query:''});
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('query').value = '';
        }else{
            alert('Please fill all the fields');
        }
        e.preventDefault();
    }

    return (
        <article>            
            <form className="form">
                <h4>Any Questions</h4>
                <div className="form-control">
                    <input type="text" id="name" name="name" value={userQueryInfo.name} onChange={handleChange} />
                    <label htmlFor="name">Name </label>                    
                </div>
                <div className="form-control">
                    <input type="text" id="email" name="email" value={userQueryInfo.email} onChange={handleChange} />
                    <label htmlFor="email">Email </label>
                </div>
                <div className="form-control">
                    {/* <textarea name="query" id="query" cols="30" rows="1" placeholder="..." value={userQueryInfo.query} onChange={(e) => setQuery(e.target.value)}></textarea> */}
                    <input name="query" id="query" cols="30" rows="1" value={userQueryInfo.query} onChange={handleChange}/>
                    <label htmlFor="name">Enter your question: </label>
                </div>
                <a href="#" onClick={handleSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </article>
    )
};

export default Form;