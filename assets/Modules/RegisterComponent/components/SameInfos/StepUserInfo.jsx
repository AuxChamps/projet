import React, {useState} from 'react';

function StepUserInfo({handleUserData, nextStep, previousStep, userData}){
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!userData.nom) newErrors.nom = "Le nom est requis";
        if (!userData.prenom) newErrors.prenom = "Le prénom est requis";
        if (!userData.email) newErrors.email = "L'email est requis";
        if (!userData.telephone) newErrors.telephone = "Le téléphone est requis";
        if (!userData.password || userData.password.length < 6) newErrors.password = "Mot de passe trop court (6 caractères minimum)";
        if (userData.password !== userData.password_confirmation) newErrors.password_confirmation = "Les mots de passe ne correspondent pas";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            nextStep();
        }
    };

    const handleChange = (e) => {
        handleUserData({ [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    return(
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" className="form-control" id="nom" name="nom" onChange={(e) => handleUserData({nom: e.target.value})}/>
                    {errors.nom && <p style={{color: 'red'}}>{errors.nom}</p>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" className="form-control" id="prenom" name="prenom" onChange={(e) => handleUserData({prenom: e.target.value})}/>
                    {errors.prenom && <p style={{color: 'red'}}>{errors.prenom}</p>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={(e) => handleUserData({email: e.target.value})}/>
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="telephone">Téléphone</label>
                    <input type="text" className="form-control" id="telephone" name="telephone" onChange={(e) => handleUserData({telephone: e.target.value})}/>
                    {errors.telephone && <p style={{color: 'red'}}>{errors.telephone}</p>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={(e) => handleUserData({password: e.target.value})}/>
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirmation du mot de passe</label>
                    <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onChange={(e) => handleUserData({password_confirmation: e.target.value})}/>
                    {errors.password_confirmation && <p style={{color: 'red'}}>{errors.password_confirmation}</p>}
                </div>
            </div>
            <div className="col-md-12">
                <button className="btn btn-primary" onClick={handleSubmit}>Suivant</button>
                <button className="btn btn-secondary" onClick={previousStep}>Précédent
                </button>
            </div>
        </div>
    )
}

export default StepUserInfo;