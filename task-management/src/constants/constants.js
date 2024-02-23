const tasks = [
    { id: 1, status: 'backlog', assignee: 'Hannah', title: 'Task 1', description: 'Review and update project documentation.', priority: 'high' },
    { id: 2, status: 'backlog', assignee: 'Fiona', title: 'Task 2', description: 'Compile a report on market trends.', priority: 'high' },
    { id: 3, status: 'backlog', assignee: 'Hannah', title: 'Task 3', description: 'Organize team meeting for project kickoff.', priority: 'high' },
    { id: 4, status: 'backlog', assignee: 'Fiona', title: 'Task 4', description: 'Clean up the database of outdated records.', priority: 'low' },
    { id: 5, status: 'backlog', assignee: 'Alice', title: 'Task 5', description: 'Redesign the landing page for increased user engagement.', priority: 'low' },
    { id: 6, status: 'todo', assignee: 'Ethan', title: 'Task 6', description: 'Implement new authentication mechanism.', priority: 'medium' },
    { id: 7, status: 'done', assignee: 'George', title: 'Task 7', description: 'Test and deploy the latest version of the app.', priority: 'high' },
    { id: 8, status: 'todo', assignee: 'George', title: 'Task 8', description: 'Create a backup strategy for critical data.', priority: 'medium' },
    { id: 9, status: 'backlog', assignee: 'Diana', title: 'Task 9', description: 'Conduct a competitive analysis with the latest market entrants.', priority: 'high' },
    { id: 10, status: 'in progress', assignee: 'Ethan', title: 'Task 10', description: 'Develop a prototype for the new feature.', priority: 'high' },
    { id: 11, status: 'backlog', assignee: 'Charlie', title: 'Task 11', description: 'Update the team on new regulatory compliance requirements.', priority: 'medium' },
    { id: 12, status: 'in progress', assignee: 'Fiona', title: 'Task 12', description: 'Optimize the existing codebase for better performance.', priority: 'high' },
    { id: 13, status: 'todo', assignee: 'Diana', title: 'Task 13', description: 'Prepare a budget forecast for the next quarter.', priority: 'high' },
    { id: 14, status: 'done', assignee: 'Alice', title: 'Task 14', description: 'Finalize the client presentation for the new project proposal.', priority: 'medium' },
    { id: 15, status: 'in progress', assignee: 'Bob', title: 'Task 15', description: 'Enhance the security measures of our web application.', priority: 'high' },
    { id: 16, status: 'todo', assignee: 'Charlie', title: 'Task 16', description: 'Interview candidates for the open developer position.', priority: 'medium' },
    { id: 17, status: 'backlog', assignee: 'Diana', title: 'Task 17', description: 'Audit internal tools for efficiency improvements.', priority: 'low' },
    { id: 18, status: 'in progress', assignee: 'Ethan', title: 'Task 18', description: 'Refactor the payment system integration.', priority: 'medium' },
    { id: 19, status: 'done', assignee: 'Fiona', title: 'Task 19', description: 'Update the onboarding process for new hires.', priority: 'low' },
    { id: 20, status: 'backlog', assignee: 'George', title: 'Task 20', description: 'Research on potential software partnerships.', priority: 'medium' },
    { id: 21, status: 'todo', assignee: 'Hannah', title: 'Task 21', description: 'Plan the upcoming team-building event.', priority: 'low' },
    { id: 22, status: 'in progress', assignee: 'Alice', title: 'Task 22', description: 'Monitor and analyze website traffic metrics.', priority: 'high' },
    { id: 23, status: 'backlog', assignee: 'Bob', title: 'Task 23', description: 'Draft the quarterly newsletter.', priority: 'medium' },
    { id: 24, status: 'todo', assignee: 'Charlie', title: 'Task 24', description: 'Review and negotiate the new leasing agreement.', priority: 'high' },
    { id: 25, status: 'done', assignee: 'Diana', title: 'Task 25', description: 'Coordinate the software version upgrade across all devices.', priority: 'low' }]

const ACTION_TYPES = {
    GET_TASKS: 'GET_TASKS',
    DELETE_TASK: 'DELETE_TASK',
    CHANGE_STATUS: 'CHANGE_STATUS',
    CHANGE_PRIORITY: 'CHANGE_PRIORITY'
}    
    export {tasks, ACTION_TYPES}