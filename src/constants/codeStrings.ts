export const BASIC_CODE_EXAMPLE = `import { FeedGet } from 'feedget'

const FeedbackWidget = () => {
  const CLIENT_ID = 'YOUR_CLIENT_ID'

  return (
    <FeedGet
      clientId={CLIENT_ID}
    />
  );
};

`

export const CUSTOMIZED_CODE_EXAMPLE = `import { FeedGet } from 'feedget'

const FeedbackWidget = () => {
  const CLIENT_ID = 'YOUR_CLIENT_ID'

  return (
    <FeedGet
      clientId={CLIENT_ID}
      theme='system' // 'system' | 'light' | 'dark'
      position='bottom-right' // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
      positionStrategy='fixed' // 'fixed' | 'absolute' | 'relative'
      primaryColor='#67f54b' // light green
      primaryColorHover='#58ce41' // dark green
      primaryColorText='#222222' // black
    />
  );
};

`
