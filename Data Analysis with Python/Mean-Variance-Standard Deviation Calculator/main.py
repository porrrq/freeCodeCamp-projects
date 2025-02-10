# This entrypoint file to be used in development. Start by reading README.md
import mean_var_std
import pprint
from unittest import main

result = mean_var_std.calculate([0,1,2,3,4,5,6,7,8])
print("\n\n")
print(">>>mean_var_std.calculate([0,1,2,3,4,5,6,7,8])\n")
pprint.pprint(result,indent=4,depth=3)
print("\n\n")

# Run unit tests automatically
main(module='test_module', exit=False)
