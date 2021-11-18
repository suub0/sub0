
import React from 'react';
import useColorTheme from "use-color-theme";
import { ConstructionScreen } from "./screens/ConstructionScreen";
import theme from "./theme/theme";

const App = (props) => {

  const scheme = useColorTheme('light', {
    classNames: ['light', 'dark']
  });

  console.log('theme is: ', theme);

  return (
    <>
    <style jsx global>{`
      ${theme}
    `}
    </style>
    <style>{`
      body {
        background-color: var(--secondary)
      }
    `}
    </style>
    <ConstructionScreen/>
    </>
  );
}

export default App
