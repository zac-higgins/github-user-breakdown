import React from 'react';
import { Form, Input, Button } from 'antd';

const WrappedNoteForm = props => {
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
    
          if (!err) {
            props.addNote(values);
            props.form.resetFields();
          }
        });
      };
    
      const { getFieldDecorator } = props.form;

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('text', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Input
              placeholder="Note"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Note
          </Button>
          <Button type="danger" htmlType="reset" onClick={() => props.hideForm(false)}>
              Cancel
          </Button>
        </Form.Item>
      </Form>
    );
};

const NoteForm = Form.create({ name: 'note_form' })(WrappedNoteForm);

export default NoteForm;