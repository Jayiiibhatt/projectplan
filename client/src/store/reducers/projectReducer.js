const initState = {
    projects : [
        {id : '1', title : 'Project 1', content : 'This is project 1.'},
        {id : '2', title : 'Project 2', content : 'This is project 2.'},
        {id : '3', title : 'Project 3', content : 'This is project 3.'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' :
            console.log("create project", action.project);
    }
    return state;
}

export default projectReducer;