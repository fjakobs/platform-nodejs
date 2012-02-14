require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/05-NodeJSPlatformFeatureBundles/dist/01-Globals/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/05-NodeJSPlatformFeatureBundles/dist/01-Globals";
        
        exports.main = function()
        {
        	if (typeof global === "undefined")
        	{
        		throw new Error("The 'global' global variable should be defined!");
        	}
        
        	if (typeof process === "undefined")
        	{
        		throw new Error("The 'process' global variable should be defined!");
        	}
        	
        	if (typeof Buffer === "undefined")
        	{
        		throw new Error("The 'Buffer' global variable should be defined!");
        	}
        
        	
        	if (typeof setTimeout === "undefined")
        	{
        		throw new Error("The 'setTimeout' global variable should be defined!");
        	}
        	
        	if (typeof clearTimeout === "undefined")
        	{
        		throw new Error("The 'clearTimeout' global variable should be defined!");
        	}
        
        	if (typeof setInterval === "undefined")
        	{
        		throw new Error("The 'setInterval' global variable should be defined!");
        	}
        
        	if (typeof clearInterval === "undefined")
        	{
        		throw new Error("The 'clearInterval' global variable should be defined!");
        	}
        
        	
        	if (typeof require.resolve !== "function")
        	{
        		throw new Error("'require.resolve' on the global 'require' variable should be a function!");
        	}
        	
        	
        	if (typeof __filename === "undefined")
        	{
        		throw new Error("The '__filename' global variable should be defined!");
        	}
        	
        	if (__filename !== (require.sandbox.id + module.id))
        	{
        		throw new Error("The '__filename' global does not equal the value of 'require.sandbox.id + module.id'!");
        	}
        	
        	if (typeof __dirname === "undefined")
        	{
        		throw new Error("The '__dirname' global variable should be defined!");
        	}
        
        	if (__dirname !== (require.sandbox.id + module.id).replace(/\/([^\/]*)$/,""))
        	{
        		throw new Error("The '__dirname' global does not equal the value of 'PATH.dirname(require.sandbox.id + module.id)'!");
        	}
        	
        	
        	console.log("01-Globals OK");
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});