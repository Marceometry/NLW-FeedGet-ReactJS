export const HOME_EXAMPLE = `import { FeedbackWidget } from 'feedget'

const Component = () => {
  const CLIENT_ID = 'YOUR_CLIENT_ID'

  return (
    <FeedbackWidget
      clientId={CLIENT_ID}
    />
  );
};

`

export const COLORS_CODE_EXAMPLE = `import { FeedbackWidget } from 'feedget'

const Component = () => {
  return (
    <FeedbackWidget
      clientId={YOUR_CLIENT_ID}
      primaryColor='#67f54b' // light green
      primaryColorHover='#58ce41' // dark green
      primaryColorText='#222222' // black
    />
  );
};

`
