// @ts-nocheck
import {Column} from 'react-table'
import {InfoCell} from './InfoCell'
import {LastLoginCell} from './LastLoginCell'
import {TwoStepsCell} from './TwoStepsCell'
import {ActionsCell} from './ActionsCell'
import {SelectionCell} from './SelectionCell'
import {CustomHeader} from './CustomHeader'
import {SelectionHeader} from './SelectionHeader'
import {modal} from '../../core/_models'
 
const Columns: ReadonlyArray<Column<modal>> = 

 [
        {
            dataField: "t201",
            text: 'T201',

            validator: (newValue, row, column) => {

                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;

            }
        },
        {
            dataField: "t202",
            text: 'T202',

        },
        {
            dataField: "t203",
            text: 'T203',
            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;

            }
        },
        {
            dataField: "t204",
            text: 'T204',
            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;
            }
        },
        {
            dataField: "t205",
            text: 'T205',

            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;
            }
        },
        {
            dataField: "t206",
            text: 'T206',

            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;
            }
        },
        {
            dataField: "t207",
            text: 'T207',

            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;
            }
        },
        {
            dataField: "t208",
            text: 'T208',
        },
    ];


export {Columns}
