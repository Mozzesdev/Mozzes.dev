import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/Home";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useLang } from "./context/langContext";
import { useTheme } from "./context/themeContext";
import PdfView from "./page/PdfView";
import ThemeProviderApp from "./themes";

const App = () => {
  const { messages, locale } = useLang();
  const { modeWindow } = useTheme();

  useEffect(() => {
    modeWindow();
  }, []);

  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <ThemeProviderApp>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/cv" element={<PdfView />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProviderApp>
      </IntlProvider>
    </>
  );
};

export default App;
