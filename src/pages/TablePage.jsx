import React from 'react'
import Table from '../components/Table'

const TablePage = () => {

    const data = [
        { name: 'Orioles', color: 'bg-orange-500', city: 'Baltimore' },
        { name: 'Ravens', color: 'bg-purple-500', city: 'Baltimore' },
        { name: 'Nationals', color: 'bg-red-500', city: 'Washington' },
        { name: 'Wizards', color: 'bg-blue-500', city: 'Washington' },
    ]

    const config = [
        {
            label: 'Name',
            render: (team) => team.name
        },
        {
            label: 'Color',
            render: (team) => <div className={`p-3 m-2 ${team.color}`}></div>
        },
        {
            label: 'City',
            render: (team) => team.city

        }
    ]

    const keyFn = (team) => {
        return team.name
    }

    return (
        <>
            <Table data={data} config={config} keyFn={keyFn} />
        </>
    )
}

export default TablePage