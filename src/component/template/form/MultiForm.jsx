import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { Form, Input, Button, DatePicker, Select, Upload, Icon, } from 'antd';

// import './antform.css';
import './timeRelatedForm.css';
const stateList = [{ value: 1, state: 'Nigeria' }, { value: 2, state: 'Ghana' }]
export class RegistrationForm extends React.Component {
    state = { confirmDirty: false, autoCompleteResult: [] };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values, fieldsValue = "") => {
            if (!err) {


                console.log('Received values of form: ', values);
                if (this.props.checkUrl === '/') {
                    this.props.onAddUser({ ...values });
                    this.props.onSubmitToServer({ ...values });
                    // this.resetForm();
                }

                if (this.props.checkUrl === '/signin') {
                    this.props.fromServer({ ...values });

                }

                if (this.props.checkUrl === '/dashboard') {
                    console.log(values)
                    // const valuesT = {
                    //     ...values,
                    //     'date-picker': values['date-picker'].format('YYYY-MM-DD'),
                    // };
                    this.props.onAddUser({ ...values, birthday: new Date(values.birthday._d).toDateString() });
                    this.props.onSubmitToServer({ ...values, birthday: new Date(values.birthday._d).toDateString() });
                    console.log("hi")
                    // this.resetForm();
                    console.log('Received values of form: ', values);
                }


            }
        });
    };

    resetForm = () => {
        this.props.form.resetFields();
    }

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) { callback('Two passwords that you enter is inconsistent!'); }
        else { callback(); }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };


    // for file upload
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { checkUrl } = this.props;
        console.log(checkUrl, "check url")
        const { Option } = Select;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 }, sm: { span: 8 }
            },
            wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select date of birth day!' }],
        };


        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>



                {/* Dashboard Register staff */}
                <React.Fragment>
                    <Form.Item label="Birth Date">
                        {getFieldDecorator('birthday', config)(<DatePicker format="YYYY-MM-DD" />)}
                    </Form.Item>
                    <Form.Item label="State of Origin" hasFeedback>
                        {getFieldDecorator('select', {
                            rules: [{ required: true, message: 'Please select your state of origin!' }],
                        })(
                            <Select placeholder="Please select a state">

                                {stateList.map((data) => (<Option key={data.id} value={data.value}>{data.state}</Option>))}
                                {/* <Option value="usa">U.S.A</Option> */}
                            </Select>,
                        )}
                    </Form.Item>

                    {/* image upload */}
                    {/* <Form.Item label="Upload" extra="upload an image">
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                 </Button>
                            </Upload>,
                        )}
                    </Form.Item> */}
                    <div className="py-2 pt-4">
                        <Button type="primary" htmlType="submit" className="btn-block ">
                            Add Staff
                    </Button>
                    </div>
                </React.Fragment>
            </Form>
        );
    }
}

RegistrationForm.propTypes = {
    checkUrl: PropTypes.string,
    onAddUser: PropTypes.func,
    onSubmitToServer: PropTypes.func,
    fromServer: PropTypes.func,

};

const MultiForm = Form.create()(RegistrationForm);
export default MultiForm
