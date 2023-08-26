import React, {useState} from 'react'
import styles from './Todo.module.css'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../images/todo.png'

const Todo = () => {
  const [data, setData] = useState("")
  const [details, setDetails] = useState([])
  
  const items=()=>{
    if (!data){

    }
    else{
      setDetails([...details,data]);
      setData('')
    }
   
  }

  // delete items
  const deleteMe=(id)=>{
    console.log(id)
    const update=details.filter((ele,ind)=>{
      return ind!==id;
    })
    setDetails(update)
  }
  const remove=()=>{
    setDetails([])
  }

  return (
    <div class={styles.back}>
    <div className={styles.container}>
        <div className={styles.main}>
            <img src={logo} alt='logo' className={styles.logo}/>
            <p className={styles.para}>Add Your List Here</p>
        </div>

        <div className={styles.box}>
          <input type='text' placeholder='✍️ Add Items...' className={styles.input} 
            value={data}
            onChange={(e)=>setData(e.target.value)}
          />
          <AddIcon title="Add Items" className={styles.add} onClick={items}/>
        </div>

        <div className={styles.write}>
          {
            details.map((ele,idn)=>{
              return(
                <div className={styles.each} key={idn}>
                  <h3>{ele}</h3>
                  <DeleteIcon className={styles.delete} onClick={()=>deleteMe(idn)}/>
                </div>
              )
            })
          }
         
        </div>

        <div className={styles.button}>
          <button className={styles.btn} onClick={remove}>Remove All</button>
        </div>

    </div>
    </div>
  )
}

export default Todo