function StepGeneral({ handleUserData, nextStep }) {

  return (
    <div>
      <label htmlFor="nom">Vous êtes :</label>
        <button onClick={() => { handleUserData({userType: "Agriculteur"}); nextStep(); }} className="p-4 bg-primary-color btn-basic me-2">Un agriculteur <br/> Une agricultrice</button>
        <button onClick={() => { handleUserData({userType: "Client"}); nextStep(); }} className="p-4 bg-primary-color btn-basic">Un client <br/> Une cliente</button>
    </div>
  );
}

export default StepGeneral;