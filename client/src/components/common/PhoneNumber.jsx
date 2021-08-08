import React, { forwardRef } from 'react';

import TextField from './TextField';

export default forwardRef((props, ref) => <TextField {...props} ref={ref} />);
