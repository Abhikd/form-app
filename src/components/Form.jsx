import React, { useState } from 'react'
import CardEdit from './CardEdit';
import Cards from './Cards';

const Form = () => {


    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [list, setList] = useState([]);
    const [editKey, setEditKey] = useState(null);
    const [show, setShow] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleMailChange = (e) => {
        setMail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit = () => {

        if (mail.includes("@") && (mail.includes(".")) && ((parseInt(age)) >= 1 && (parseInt(age) <= 99)) && (name.length >= 1) && phone.length === 10) {

            setList([...list,
            {
                key: Math.floor(Math.random() * 1000),
                name: name,
                age: age,
                mail: mail,
                phone: phone,
            }]);
            setAge("");
            setName("");
            setMail("");
            setPhone("");
            setShow(true);
        }


    }


    const handleEdit = (key) => {
        setEditKey(key);
    }




    return (
        <div>
            <div className='w-full flex items-center justify-center pt-10'>
                <h1 className='text-3xl font-semibold mx-auto'>Enter a new person</h1>
            </div>
            <div className='w-[90%] p-5 border border-gray-400 mx-auto mt-10 rounded-md'>
                <h1 className='font-semibold text-2xl mb-3'>Enter the details</h1>
                <form>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={mail} type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleMailChange} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={age} type="tel" pattern="[0-9]{2}" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleAgeChange} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age (01-99)</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={name} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleNameChange} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={phone} type="tel" pattern="[0-9]{10}" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handlePhoneChange} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (ex. 9876543210)</label>
                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Submit</button>
                </form>

            </div>

            <div className='w-full flex items-center justify-center pt-10 mt-10'>
                {show ? <h1 className='text-3xl font-semibold mx-auto'>List of people</h1> : ""}
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-10'>
                {list.map((list, key) => (
                    <>
                        {editKey === list.key ? <CardEdit list={list} editKey={editKey} setEditKey={setEditKey} /> : <Cards list={list} handleEdit={handleEdit} />}
                    </>

                ))}
            </div>

        </div>
    )
}

export default Form
