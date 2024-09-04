import React from 'react'

function User() {
  return (
    <>
    <div className="p-5 bg-light" >
        <div className="bg-white rounded p-4">
            <table class='table caption-top '>
                <caption className="text-black fs-4">Recent Users</caption>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>kiran</td>
                        <td>Otto</td>
                        <td>kiran@123</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>rishith</td>
                        <td>rack</td>
                        <td>rishi@123</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>rithck</td>
                        <td>dayke</td>
                        <td>rithick@123</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>parth</td>
                        <td>irache</td>
                        <td>parth@123</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>digvijay</td>
                        <td>ghule</td>
                        <td>digvijay@123</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>kirshna</td>
                        <td>murthy</td>
                        <td>krish@123</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default User