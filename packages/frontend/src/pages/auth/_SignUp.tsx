import ClayButton from '@clayui/button';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayLayout from '@clayui/layout';
import React from 'react';

import { IProps } from './_common';

const SignUp = ({ setPageType }: IProps): React.ReactElement => {
  return (
    <div>
      <h1>Create Account</h1>
      <ClayForm className="mt-5">
        <ClayForm.Group>
          <label htmlFor="email">Screen Name</label>
          <ClayInput name="screen_name" type="text" />
        </ClayForm.Group>
        <ClayForm.Group>
          <label htmlFor="email">Email</label>
          <ClayInput name="email" type="text" />
        </ClayForm.Group>
        <ClayForm.Group>
          <label htmlFor="password">Password</label>
          <ClayInput name="password" type="password" />
        </ClayForm.Group>
        <ClayLayout.Row>
          <ClayLayout.Col xl={5}>
            <ClayButton className="btn-block">Cancel</ClayButton>
          </ClayLayout.Col>
          <ClayLayout.Col xl={7}>
            <ClayButton className="btn-block">Create</ClayButton>
          </ClayLayout.Col>
        </ClayLayout.Row>
        <ClayLayout.Row className="signin__navigation_buttons">
          <ClayLayout.Col>
            <ClayButton
              onClick={() => setPageType('SignIn')}
              displayType="unstyled"
              className="btn-link"
            >
              Sign In
            </ClayButton>
          </ClayLayout.Col>
          <ClayLayout.Col style={{ textAlign: 'end' }}>
            <ClayButton
              onClick={() => setPageType('Recovery')}
              displayType="unstyled"
              className="btn-link"
            >
              Forgot Password
            </ClayButton>
          </ClayLayout.Col>
        </ClayLayout.Row>
      </ClayForm>
    </div>
  );
};

export default SignUp;
