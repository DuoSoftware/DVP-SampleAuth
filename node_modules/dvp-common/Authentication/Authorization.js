
module.exports = function(options) {

//{resource:"cluster", action:"read"}//




    var middleware = function(req, res, next) {

        var resource = options.resource;
        var action = options.action;
        if(resource) {
            var selected = req.user.scope.filter(function(item){

                return item.resource == resource;

            });

            if (selected && selected.length > 0) {

                var actions = selected[0].actions;
                if(action){

                    var index1 = actions.indexOf(action);
                    if(index1 > -1){

                        next();


                    }else{

                        next(new Error('insufficient scopes'));

                    }


                }else{
                    next();

                }


            } else {

                next(new Error('insufficient scopes'));

            }
        }else{

            next();


        }



    };



    return middleware;
};

