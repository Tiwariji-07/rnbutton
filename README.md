# React Native Button Component

A highly customizable and reusable Button component for React Native applications with TypeScript support.

## Features

- Multiple variants: primary, secondary, outline, and text
- Three sizes: small, medium (default), and large
- Loading state
- Disabled state
- Support for left and right icons
- Fully typed with TypeScript
- Customizable styles

## Installation

1. First, install the package:

```bash
npm install --save @your-username/rnbutton
# or
yarn add @your-username/rnbutton
```

## Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Button 
        title="Primary Button"
        onPress={() => console.log('Pressed!')}
        variant="primary"
        size="medium"
      />
      
      <Button 
        title="Secondary Button"
        onPress={() => console.log('Pressed!')}
        variant="secondary"
        style={{ marginTop: 10 }}
      />
      
      <Button 
        title="Outline Button"
        onPress={() => console.log('Pressed!')}
        variant="outline"
        style={{ marginTop: 10 }}
      />
      
      <Button 
        title="Text Button"
        onPress={() => console.log('Pressed!')}
        variant="text"
        style={{ marginTop: 10 }}
      />
      
      <Button 
        title="Loading Button"
        loading={true}
        style={{ marginTop: 10 }}
      />
      
      <Button 
        title="Disabled Button"
        disabled={true}
        style={{ marginTop: 10 }}
      />
      
      <Button 
        title="With Icons"
        leftIcon={<Icon name="star" size={16} color="#FFFFFF" />}
        rightIcon={<Icon name="arrow-right" size={16} color="#FFFFFF" />}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **Required** | The text to display inside the button |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'text'` | `'primary'` | Button visual style |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the button |
| `loading` | `boolean` | `false` | Shows a loading indicator when true |
| `disabled` | `boolean` | `false` | Disables the button when true |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon component to render on the left |
| `rightIcon` | `React.ReactNode` | `undefined` | Icon component to render on the right |
| `containerStyle` | `ViewStyle` | `undefined` | Custom styles for the button container |
| `textStyle` | `TextStyle` | `undefined` | Custom styles for the button text |
| `...TouchableOpacityProps` |  |  | All other TouchableOpacity props are supported |

## Styling

You can customize the button's appearance by passing style props:

```tsx
<Button
  title="Custom Styled Button"
  containerStyle={{
    backgroundColor: '#FF5733',
    borderRadius: 20,
    paddingHorizontal: 24,
  }}
  textStyle={{
    color: '#FFFFFF',
    fontWeight: 'bold',
  }}
  onPress={() => console.log('Custom button pressed!')}
/>
```

## License

MIT
