import React from 'react'

export const childrenWithProps = (children, props) => {
    return React.Children.map(children, child => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, {...props});
        }
        return child;
    });
}