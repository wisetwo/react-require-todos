define(['react', 'utils'], function (React, Utils) {

	var TodoFooter = React.createClass({
		displayName: 'TodoFooter',

		render: function () {
			var activeTodoWord = Utils.pluralize(this.props.count, 'item');
			var clearButton = null;

			if (this.props.completedCount > 0) {
				clearButton = React.createElement(
					'button',
					{
						className: 'clear-completed',
						onClick: this.props.onClearCompleted },
					'Clear completed'
				);
			}

			var nowShowing = this.props.nowShowing;
			return React.createElement(
				'footer',
				{ className: 'footer' },
				React.createElement(
					'span',
					{ className: 'todo-count' },
					React.createElement(
						'strong',
						null,
						this.props.count
					),
					' ',
					activeTodoWord,
					' left'
				),
				React.createElement(
					'ul',
					{ className: 'filters' },
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{
								href: '#/',
								className: Utils.classnames({ selected: nowShowing === 'all' }) },
							'All'
						)
					),
					' ',
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{
								href: '#/active',
								className: Utils.classnames({ selected: nowShowing === 'active' }) },
							'Active'
						)
					),
					' ',
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{
								href: '#/completed',
								className: Utils.classnames({ selected: nowShowing === 'completed' }) },
							'Completed'
						)
					)
				),
				clearButton
			);
		}
	});
	return TodoFooter;
});