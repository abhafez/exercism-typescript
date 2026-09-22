"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""


EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2
def bake_time_remaining(passed_time):
    """Calculate remaining bake time in minutes.

    :param passed_time: int - time that has elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes in an integer representing the number of minutes the lasagna has been in the oven and
    returns the remaining minutes the lasagna still needs to bake based on the EXPECTED_BAKE_TIME constant.
    """
    return EXPECTED_BAKE_TIME - passed_time

def preparation_time_in_minutes(layers):
    """Calculate preparation time in minutes.

    :param layers: int - number of layers added to the lasagna.
    :return: int - total preparation time in minutes.

    Function that takes in the number of layers added to the lasagna and
    returns the total preparation time in minutes. The preparation time
    is calculated by multiplying the number of layers with the
    PREPARATION_TIME constant.
    """
    return layers * PREPARATION_TIME


#TODO: define the 'elapsed_time_in_minutes()' function below.
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the total elapsed cooking time.

    :param number_of_layers: int - number of layers added to the lasagna.
    :param elapsed_bake_time: int - time in minutes the lasagna has been baking.
    :return: int - total elapsed time in minutes spent preparing and baking.

    The function calculates the total time spent in the kitchen by adding
    the preparation time for the given number of layers to the elapsed
    baking time.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
