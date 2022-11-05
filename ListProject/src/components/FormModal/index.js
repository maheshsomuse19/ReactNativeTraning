import React from 'react';
import {Button, FormControl, Input, Modal} from 'native-base';

const FormModal = ({task, handleTask, submitTask}) => {
  return (
    <Modal.Content>
      <Modal.CloseButton />
      <Modal.Header> Add List</Modal.Header>
      <Modal.Body>
        <FormControl>
          <Input value={task.text} onChangeText={handleTask} />
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button
          flex={1}
          onPress={submitTask}
          style={{backgroundColor: '#293462'}}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default FormModal;
