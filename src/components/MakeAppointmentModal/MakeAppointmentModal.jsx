import css from "./MakeAppointmentModal.module.css"
const MakeAppointmentModal = ()=>{
  
  return (<div className={css.backDrop}>
  <h2>Make an appointment with a babysitter</h2>
  <p>Arranging a meeting with a caregiver for your child is the first step 
    to creating a safe and comfortable environment. 
    Fill out the form below so we can match you with the perfect care partner.</p>
    <form>
      <input placeholder="Address"/>
    </form>
  </div>)
}

export default MakeAppointmentModal;