def add_time(start:str, duration:str, start_day="None") -> str:
    """
    Adds a duration to the start time and returns the resulting time with the option to add days of the week to the returned value.
    
    Args:
        start (str): The start time in 12-hour format ex. '3:00 PM'.
        duration (str): The duration time in 'H:M' format ex. '2:30'.
        start_day (str, optional): The starting day of the week (case insensitive) ex. 'MonDay'.
        
    Returns:
        str: The resulting time in 12-hour format with AM/PM,
             including the day of the week (if provided) and
             the number of days later (if applicable)
    
    Examples:
        >>> add_time('3:00 PM', '3:10')
        # Returns: 6:10 PM
        
        >>> add_time('11:30 AM', '2:32', 'Monday')
        # Returns: 2:02 PM, Monday

        >>> add_time('11:43 AM', '00:20')
        # Returns: 12:03 PM

        >>> ('10:10 PM', '3:30')
        # Returns: 1:40 AM (next day)

        >>> add_time('11:43 PM', '24:20', 'tueSday')
        # Returns: 12:03 AM, Thursday (2 days later)

        >>> add_time('6:30 PM', '205:12')
        # Returns: 7:42 AM (9 days later)
        
    
    """
    
    #convert start_day to its capitalize
    start_day = start_day.capitalize()
    #Declare a list of all days
    days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        
    #Construct H , M , AM/PM from start_day
    start_hour = int(start.split()[0].split(":")[0])
    start_minute = int(start.split()[0].split(":")[1])
    start_am_or_pm = start.split()[1]
    #Convert to 24HR format
    if start_am_or_pm == "PM":
        start_hour += 12
    
    #Construct H , M from duration
    duration_hour = int(duration.split(":")[0])
    duration_minute = int(duration.split(":")[1])
    
    #Calculate time end
    hour_pass_from_exceed_minute = 0
    day_pass_from_exceed_hour = 0
    end_minute = start_minute + duration_minute
    while end_minute >= 60:
        end_minute -= 60
        hour_pass_from_exceed_minute += 1
    end_hour = start_hour + duration_hour + hour_pass_from_exceed_minute
    while end_hour >= 24:
        end_hour -= 24
        day_pass_from_exceed_hour += 1
    #Convert back to 12HR format
    #PM or AM
    is_pm = True if end_hour >= 12 else False
    end_hour -= 12 if end_hour > 12 else 0
    end_hour = 12 if end_hour == 0 else end_hour
    
    formatted_time = f'{end_hour}:{"0"+str(end_minute) if len(str(end_minute)) == 1 else end_minute} {"PM" if is_pm else "AM"}'
    
    #Add x days later if needed
    if day_pass_from_exceed_hour == 0:
        days_later_string = ""
    elif day_pass_from_exceed_hour == 1:
        days_later_string = " (next day)"
    else:
        days_later_string = f" ({day_pass_from_exceed_hour} days later)"
        
    #Add days of the week if needed
    if start_day != "None":
        dayend_index = days.index(start_day)
        while day_pass_from_exceed_hour != 0:
            if dayend_index == 6:
                dayend_index = 0
            else: 
                dayend_index += 1
            day_pass_from_exceed_hour -= 1
        day_of_the_week_string = ", " + days[dayend_index]
    else:
        day_of_the_week_string = ""
    
    return f"{formatted_time}{day_of_the_week_string}{days_later_string}"
    
    
assert add_time('3:00 PM', '3:10') == "6:10 PM"
assert add_time('11:30 AM', '2:32', 'Monday') == "2:02 PM, Monday"
assert add_time('11:43 AM', '00:20') == "12:03 PM"
assert add_time('10:10 PM', '3:30') == "1:40 AM (next day)"
assert add_time('11:43 PM', '24:20', 'tueSday') == "12:03 AM, Thursday (2 days later)"
assert add_time('6:30 PM', '205:12') == "7:42 AM (9 days later)"
        
    