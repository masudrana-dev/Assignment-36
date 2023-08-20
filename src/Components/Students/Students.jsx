import React from 'react'
import Student from '../Student/Student'
const Students = () => {
    const students = [
        {
            name: 'Masud Rana',
            id: '1',
            group: 'Scince'
        },
        {
            name: 'Saiful Islam',
            id: '2',
            group: 'Comerce'
        },
        {
            name: 'Rakibul Islam',
            id: '3',
            group: 'Scince'
        },
        {
            name: 'Mahmud Hasan',
            id: '4',
            group: 'Scince'
        },
        {
            name: 'Ebrahim Khalil',
            id: '5',
            group: 'Commerce'
        },
        {
            name: 'Ismail',
            id: '6',
            group: 'Arts'
        }
    ]
    return (
        <div>
            {
                students.map((student) => <Student
                    student={student}
                    key={student.id}
                ></Student>)
            }
        </div>
    )
}

export default Students