def arithmetic_arranger(problems, show_answers=False):
    #problems's limit is five
    if len(problems) > 5:
        return "Error: Too many problems."
    
    #Deconstruct `num1` , `num2` , and `operator`
    container = {}
    container['num1'] = []
    container['num2'] = []
    container['operator'] = []
    for problem in problems:
        splited_problem = problem.split(" ")
        container['num1'].append(splited_problem[0])
        container['num2'].append(splited_problem[2])
        container['operator'].append(splited_problem[1])
        
    # ================================== [handle non-properly formatted `problems` input] ==================================
    
    #Operator must be '+' or '-'.
    if not all(operator in {"+","-"} for operator in container['operator']):
        return "Error: Operator must be '+' or '-'."
    #Numbers must only contain digits.
    if not all(num.isdigit() for num in container['num1']) or not all(num.isdigit() for num in container['num2']):
        return 'Error: Numbers must only contain digits.'
    #Numbers cannot be more than four digits.
    if any(len(num) > 4 for num in container['num1']) or any(len(num) > 4 for num in container['num2']):
        return 'Error: Numbers cannot be more than four digits.'

    # ============================================= [Formatting the equation] ==============================================
    
    problem_space = " " * 4
    problems_formatted = ""
    #calculate the size of the problem
    container['size'] = [max(len(num1),len(num2))+2 for num1,num2 in zip(container['num1'],container['num2'])]
    
    #add line1 to `problems_formatted`
    for num1,size in zip(container['num1'],container['size']):
        
        #fill `num1` to fit its problem size
        while len(num1) < size:
            num1 = " " + num1
        problems_formatted += num1 + problem_space
    problems_formatted.rstrip()
    
    #add line2 to `problems`
    problems_formatted += "\n"
    for num2,operator,size in zip(container['num2'],container['operator'],container['size']):
        #insert operator , space to `num2`
        space_req = size - 1 - len(num2)
        num2 = operator + " " * space_req + num2
        problems_formatted += num2 + problem_space
    problems_formatted.rstrip()
        
    #add '-' to the `problems`
    problems_formatted += "\n"
    for size in container['size']:
        problems_formatted += "-" * size + problem_space
    problems_formatted.rstrip(problem_space)

    # in case of show_answer = True
    # Calculate solution
    if show_answers:
        container['solution'] = []
        for num1,num2,operator in zip(container['num1'],container['num2'],container['operator']):
            container['solution'].append(eval(num1+operator+num2))
        # add it to the `problems`
        problems_formatted += "\n"
        for solution,size in zip(container['solution'],container['size']):
            solution = str(solution)
            #fill `solution` to fit its problem size
            while len(solution) < size:
                solution = " " + solution
            problems_formatted += solution + problem_space
        problems_formatted.rstrip()
    
    
    return problems_formatted 
print(arithmetic_arranger(["3801 - 2", "123 + 49"]))
print(len(arithmetic_arranger(["3801 - 2", "123 + 49"])))
print(len('  3801      123\n-    2    +  49\n------    -----'))
# assert arithmetic_arranger(["3801 - 2", "123 + 49"]) == '  3801      123\n-    2    +  49\n------    -----'