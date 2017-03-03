export default function users() {
    return {
        restrict: 'E',
        controllerAs: 'usersctrl',
        controller: UsersController,
        template: require('./users.html'),
        scope: {},
        bindToController: true
    };
}

class UsersController {
	constructor($ngRedux, $scope, RestService) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, RestService)(this);
        $scope.$on('$destroy', unsubscribe);
    }
    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            loading: state.usersReducer.isFetching,
            users: state.usersReducer.users
        };
    }
}