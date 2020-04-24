import React from 'react';
import { Select } from 'antd';
// import './select.css'
const { Option } = Select;

const SelectDropDown = (props) => {

    // console.log(props.yearData, "yearData");

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    return (<span>
        {props.holderData === 'Monthly' && <Select
            showSearch
            style={{ width: props.widthSize }}
            placeholder={props.holderData}
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

            {
                console.log(input, option);
                return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            }
        >
            {/* <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option> */}
            {props.yearData.map((data, index) =>
                <Option id={index} key={index} value={data.type}>{data.type} </Option>
            )}
        </Select>}

        {props.holderData === 'Moving Avg' && <Select
            showSearch
            style={{ width: props.widthSize }}
            placeholder={props.holderData}
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

            {
                console.log(input, option);
                return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            }
        >
            {/* <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option> */}
            {props.avgUseage.map((data, index) =>
                <Option id={index} key={index} value={data.type}>{data.type} </Option>
            )}
        </Select>}
    </span>);
}

export default SelectDropDown;
