import FolderTree, { testData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';


const App = () => {

    const onTreeStateChange = (state, event) => console.log(state, event);


    return (
        <>Home
            <FolderTree
                data={testData}
                onChange={onTreeStateChange}
                
            />
        </>
    )
}

export default App;