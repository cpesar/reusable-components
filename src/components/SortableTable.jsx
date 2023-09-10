import Table from '../components/Table'
// import { HiArrowSmDown, HiArrowSmRight } from "react-icons/hi";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import useSort from '../hooks/use-sort'

const SortableTable = (props) => {
    // Destructure these from the props object
    const { config, data } = props

    //Destructure these from the custom hook
    const {
        setSortColumn,
        sortBy,
        sortOrder,
        sortedData
    } = useSort(data, config)



    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }

        return {
            ...column,
            header: () =>
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        }
    })


    return (
        <Table {...props} data={sortedData} config={updatedConfig} />
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div><GoTriangleUp /></div>
    } else if (sortOrder === 'desc') {
        return <div><GoTriangleDown /></div>
    }
}

export default SortableTable