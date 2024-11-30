import css from "./MakeAppointmentModal.module.css"
const MakeAppointmentModal = ()=>{
  
  return (<div className={css.overlay}>
     <form className={css.form}>
      <button type="button" className={css.closeBtn}>x</button>
  <h2>Make an appointment with a babysitter</h2>
  <p>Arranging a meeting with a caregiver for your child is the first step 
    to creating a safe and comfortable environment. 
    Fill out the form below so we can match you with the perfect care partner.</p>
  
      <input placeholder="Address" className={css.input}/>
      <input placeholder="+380" className={css.input}/>
      <input placeholder="Child's age" className={css.input}/>
      <input type="date" placeholder="00:00" className={css.input}/>
      <input placeholder="Email" className={css.input}/>
      <input placeholder="Father's or mother's name" className={css.input}/>
<textarea placeholder="Comment" rows={3} style={{resize:'none'}}/>
   <button type="submit" className={css.submitBtn}>Send</button>
    </form>
  </div>)
}

export default MakeAppointmentModal;