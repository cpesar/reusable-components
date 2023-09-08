import React from 'react'
// import Table from '../components/Table'
import SortableTable from '../components/SortableTable'

const TablePage = () => {

    const data = [
        { name: 'Orioles', color: 'bg-orange-500', city: 'Baltimore', score: 1 },
        { name: 'Ravens', color: 'bg-purple-500', city: 'Baltimore', score: 73 },
        { name: 'Nationals', color: 'bg-red-500', city: 'Washington', score: 23 },
        { name: 'Wizards', color: 'bg-blue-500', city: 'Washington', score: 99 },
    ]

    const config = [
        {
            label: 'Name',
            render: (team) => team.name,
            sortValue: (team) => team.name
        },
        {
            label: 'Color',
            render: (team) => <div className={`p-3 m-2 ${team.color}`}></div>
        },
        {
            label: 'City',
            render: (team) => team.city,
            sortValue: (team) => team.city
        },
        {
            label: 'Score',
            render: (team) => team.score,
            sortValue: (team) => team.score
        }
    ]

    const keyFn = (team) => {
        return team.name
    }

    return (
        <>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </>
    )
}

export default TablePage