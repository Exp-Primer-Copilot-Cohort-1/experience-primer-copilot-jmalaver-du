function skillsMember () {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        contorller: 'SkillsMemberController',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}