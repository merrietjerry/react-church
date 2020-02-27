import * as React from 'react';
import { Loading } from "../../helpers"

const Node = (props: any) =>{
    if(JSON.stringify(props.data).length > 2){
        return(
        
            <h6>Node: {JSON.stringify(props.data)}</h6>
        );
    }else{
        return <Loading />
    }
    
}

export default Node;