export default function nav() {
    return {
        restrict: 'E',
        controllerAs: 'navctrl',
        controller: NavController,
        template: require('./nav.html'),
        scope: {},
        bindToController: true
    };
}

class NavController {
	constructor($ngRedux, $scope) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);
        $scope.$on('$destroy', unsubscribe);
    }
    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            loading: state.usersReducer.isFetching
        };
    }
}