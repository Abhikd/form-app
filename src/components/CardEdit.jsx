import React, { useState } from 'react'

const CardEdit = ({ list, editKey, setEditKey }) => {

    const [nameEdit, setNameEdit] = useState(list.name);
    const [ageEdit, setAgeEdit] = useState(list.age);
    const [mailEdit, setMailEdit] = useState(list.mail);
    const [phoneEdit, setPhoneEdit] = useState(list.phone);

    const handleNameChangeEdit = (e) => {
        setNameEdit(e.target.value);
    }

    const handleAgeChangeEdit = (e) => {
        setAgeEdit(e.target.value);
    }

    const handleMailChangeEdit = (e) => {
        setMailEdit(e.target.value);
    }

    const handlePhoneChangeEdit = (e) => {
        setPhoneEdit(e.target.value);
    }

    const handleDone = () => {
        if (mailEdit.includes("@") && (mailEdit.includes(".")) && ((parseInt(ageEdit)) >= 1 && (parseInt(ageEdit) <= 99)) && (nameEdit.length >= 1) && phoneEdit.length === 10) {

            setEditKey(null);
            list.name = nameEdit;
            list.age = ageEdit;
            list.phone = phoneEdit;
            list.mail = mailEdit;

        }

        else { alert("Error! The requested format is not being matched."); setEditKey(editKey); }

    }

    const handleCancel = () => {
        setEditKey(null);
        setNameEdit(list.name);
        setAgeEdit(list.age);
        setMailEdit(list.mail);
        setPhoneEdit(list.phone);
    }


    return (
        <div>
            <div className='h-[350px] w-[300px] shadow-md border border-gray-400 flex flex-col justify-evenly items-start px-2 mt-20 mx-auto rounded-md'>

                <form>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={mailEdit} onChange={handleMailChangeEdit} type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={ageEdit} onChange={handleAgeChangeEdit} type="tel" pattern="[0-9]{2}" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age (01-99)</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={nameEdit} onChange={handleNameChangeEdit} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={phoneEdit} onChange={handlePhoneChangeEdit} type="tel" pattern="[0-9]{10}" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 mb-2" onClick={handleDone}>Done</button>
                    <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={handleCancel}>Cancel</button>

                </form>

            </div>
        </div>
    )
}

export default CardEdit