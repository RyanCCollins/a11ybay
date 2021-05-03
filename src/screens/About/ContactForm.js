// (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP
import React from "react";
import {
  Box,
  Form,
  FormField,
  TextInput,
  TextArea,
  Button,
} from "grommet";

function ContactForm() {
  const [value, setValue] = React.useState({});
  return (
    <Form
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => {}}
    >
      <FormField name="name" htmlFor="name-input-id" label="Name">
        <TextInput id="name-input-id" name="name" />
      </FormField>
      <FormField name="email" htmlFor="email-input-id" label="Email">
        <TextInput id="email-input-id" name="email" />
      </FormField>
      <FormField name="comment" htmlFor="comment-input-id" label="Comment">
        <TextArea id="comment-input-id" name="comment" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
}

export default ContactForm;
