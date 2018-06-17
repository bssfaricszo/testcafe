"@fixture web";
"@page http://localhost/sample";

"@test"["web1"] = {
    '1.Click link "API"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(API)").eq(0);
        };
        act.click(actionTarget);
    },
    '2.Click link "GET api/Values"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(GET apiValues)").eq(0);
        };
        act.click(actionTarget);
    },
    "3.Assert": function() {
        eq($(":containsExcludeChildren(sample string 1 sample string 2)").length > 0, true);
    }
};

