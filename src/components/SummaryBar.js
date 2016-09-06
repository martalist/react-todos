import React from 'react';

const SummaryBar = ({ total, completed, clearComplete }) => {
  const pluralize = (count) => count === 1 ? ` Task` : `Tasks`;

  const summaryText = (total, completed) => {
    if (!total) {
      return ' No Tasks in List';
    }
    if (completed === total) {
      return ' No Tasks Remaining'
    }
    const remaining = total - completed;
    return ` ${remaining} ${pluralize(remaining)} Remaining` + 
      (remaining === total ? '' : ` of ${total} Total ${pluralize(total)}`)
  };
  
  return (
    <div>
      <i className="fa fa-fw fa-bar-chart"></i>
      <span>
        { summaryText(total, completed) }
      </span>
      <span> | </span>
      <a className="text-danger" 
        href="#"
        onClick={clearComplete}
      >
        <i className="fa fa-fw fa-times"></i>
        Remove Completed Tasks from List
      </a>
    </div>
  );
};

export default SummaryBar;
