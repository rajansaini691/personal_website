import * as React from "react";
import * as ReactDOM from "react-dom";

import Test from "./components/Test"
import { Header } from "./components/Header";

ReactDOM.render(<div>
                    <Header />
                </div>, 
                document.getElementById("root")
            );