---
theme: default
colorSchema: 'auto'
layout: intro
highlighter: shiki
title: CSCI 532 Final Presentation
author: Bryan Portillo and Ramisha Baki
---

# Global Extrema Algorithms with Traveling Salesman Problem

Presented by: Bryan Portillo and Ramisha Baki

CSCI 532

---

# Global Extrema Approximating Algorithms

- Computational techniques designed to find or approximate surface minimum or maximums
	
- Higher dimensional surfaces do not easily lend themselves to analytical methods	

- Analytical Methods - Typically calculus related
	
- Stochastic Methods - Randomized search component
	
- Population Based Methods - Multiple points


---

# Algorithm Implementations 

#### Extrema Approximating Algorithms

- Swarm Based Simulated Annealing
- History-Driven Firefly-Simulated Annealing


#### Application 

- Traveling Salesman Problem

---

# Gradient descent

### Gradient Descent Update Step

1. **Initialize** parameters:
    - Learning rate 
    - Starting point 

2. **For each iteration**:
    1. Compute the gradient at the current point
    2. Update the point by moving in the direction of the negative gradient:
    
3. **Repeat** until convergence (or max iterations).

---
	
<iframe src="/adam_optimization_booth.html" width="100%" height="100%" style="border: none; position: absolute; top:0; left: 0; right: 0; bottom: 0; display: block; "></iframe>


----

# Simulated Annealing 

1. **Initialize** parameters:
    - Initial temperature 
    - Cooling rate 
    - Starting solution 

2. **For each iteration**:
    1. Perturb the current solution to generate a new candidate solution 
    2. Calculate the change in energy (objective function value) 
    3. If the new solution is better or equal, accept it.
    4. If the new solution is worse, accept it with some probability.
    
    5. Decrease the temperature: 
    
3. **Repeat** until stopping condition is met (e.g., temperature is low or max iterations).

---

<iframe src="/sa_optimization_booth.html" width="100%" height="100%" style="border: none; position: absolute; top:0; left: 0; right: 0; bottom: 0; display: block; "></iframe>
		
---

# Particle Swarm and FF 
1. **Initialize** parameters:
    - Inertia weight 
    - Cognitive constant 
    - Social constant 
    - Particle position and velocity

2. **For each particle**:
    1. Update the particle's velocity:
    2. Update the particle's position: 

3. **Repeat** until stopping condition is met (e.g., max iterations or convergence).
---

<iframe src="/pso_optimization_booth.html" width="100%" height="100%" style="border: none; position: absolute; top:0; left: 0; right: 0; bottom: 0; display: block; "></iframe>

---

<iframe src="/Figure_1.png" width="100%" height="100%" style="border: none; position: absolute; top:0; left: 0; right: 0; bottom: 0; display: block; "></iframe>

---

# Summary

- Gradient Descent 

	- Accurate results on convex surfaces

	- Simple implementation

- Simulated Annealing 

	- Does not require a gradient

	- Early volatility means a slightly more expansive search 

	- Stochastic term alleviates potential local minima traps

- Population Based Methods 

	- Large search space

---

# Swarm-based Simulated Annealing - Part 1

1. **Input:**
    - Initial distribution for the particles’ positions and masses.
    - Step size, denoted as "h."
    - Number of iterations

2. **Initialization:**
    - Sample "N" particles, each with a position and mass, drawn independently from the initial distribution.
    - Compute the initial provisional minimum value by averaging the function values for all particles.
    - Define the provisional minimum at the first step as the average function value.

---

# Swarm-based Simulated Annealing - Part 2

3. **Main Iteration Loop:**

    4. **For each particle:**
        - Update the mass of each particle based on the difference between its function value and the provisional minimum.

    5. **Generate random samples** for each particle, drawn from a normal distribution with zero mean and unit variance.

    6. **Update the position of each particle** using the gradient of the function at the current position, adjusted by the random noise and the particle's mass.

    7. **Recalculate the provisional minimum** by averaging the updated function values of all the particles.

---

# Swarm-based Simulated Annealing - Part 3

4. **After all iterations are completed:**
    - Find the particle with the smallest function value, which represents the best solution.

5. **Output:**
    - Return the final position of the best particle.
    - Return the final minimum function value at that position.

---

<iframe src="/sba_optimization_ackley.html" width="100%" height="100%" style="border: none; position: absolute; top:0; left: 0; right: 0; bottom: 0; display: block; "></iframe>

---

# History-Driven Firefly and Simulated Annealing Approach - Part 1

1. **Input:**
    - SA-BSP tree (used as memory).
    - Fitness of initial population (miPop test) and its provisional fitness (f̃).
    - Number of neighboring particles to consider (n).
    - Number of iterations for HdPSO (m).
    - Coefficients for inertia (w), cognitive (c₁), and social (c₂).
    - Initial temperature (T) and Boltzmann's constant (k).
    - Reduction factor (c) to decrease the temperature.

---

# History-Driven Firefly and Simulated Annealing Approach - Part 2

2. **While the SA-BSP tree maturity condition isn't met:**
    - For each iteration from 1 to m:
        
	1. **Attractiveness Calculation:**
    		- Calculate the attractiveness of each firefly based on its distance from other fireflies.

	2. **Movement Based on Attractiveness:**
    		- Move each firefly towards the more attractive fireflies, with some added randomness.
     
        3. **Traverse the SA-BSP tree:**
		- and extract the sub-regions of the current particle’s location.
      
---

# History-Driven Firefly and Simulated Annealing Approach - Part 3
  
        4. **Evaluate the particle’s region:**
            - If the particle is in the most promising region among its n neighbors:
                - Accept the particle’s new position and evaluate its fitness.
                - Segment the sub-region accordingly.
                - Update the information about the child and parent nodes in 
                  the SA-BSP tree.

        5. **Fitness comparison:**
            - If the new fitness is better than the provisional fitness, 
              accept it as the new value.
            - If not, reject the new position and avoid evaluating its fitness.

---

# History-Driven Firefly and Simulated Annealing Approach - Part 4

        6. **Fitness update:**

            - Update the fitness value of the particle and adjust the tree’s 
	      information accordingly.

        7. **Maturity condition check:**
            - If the fitness difference stabilizes or decreases over a set 
              number of iterations, or reaches zero, set the tree’s 
              maturity condition to True.

---

# History-Driven Firefly and Simulated Annealing Approach - Part 5


3. **Output the best solution:**
    - Once the maturity condition is met, return the final fitness value and the best position found.

4. **Simulated Annealing (SA) Phase:**
    - Limit the search space to the most promising sub-region.
    - While the number of SA iterations hasn’t been reached:
        1. For each solution:
            - If the new solution is better, update its position and fitness.
            - If the new solution is worse, accept it with a certain probability based on the temperature and fitness difference.

---

# History-Driven Firefly and Simulated Annealing Approach - Part 6

5. **Temperature Adjustment:**
    - Periodically reduce the temperature to control the acceptance probability in the Simulated Annealing phase.

6. **Final Output:**
    - After completing the iterations, output the best solution found during the process.

---

<iframe src="/hdfsa.html" width="100%" height="100%" style="border: none; position: absolute; top:0; left: 0; right: 0; bottom: 0; display: block; "></iframe>

---

# Traveling Salesman Problem (TSP):

- The Traveling Salesman Problem (TSP) is a classic optimization problem in combinatorial optimization and theoretical computer science. It involves a "salesman" who must visit a set of cities, each exactly once, and return to the starting city. The goal is to find the shortest possible route that visits all cities and returns to the starting point.

---

# Problem Definition
	- Given:
		- A list of cities and their pairwise distances (or costs).
		- A requirement to visit each city exactly once.
	- Objective:
		- Minimize the total travel distance or cost.
	- Key Features:
		- Input: A set of cities and pairwise distances.
	- Output: The optimal sequence of cities with the minimum total cost/distance.
 	- Challenges

- Computationally hard: Classified as an NP-hard problem.
- Solutions grow exponentially with the number of cities.
- Applications: Vehicle routing, supply chain logistics, chip design, and more.


---

# TSP Variants - Part 1

	- Symmetric TSP (STSP)
		- The classic version where distances between cities are the same in 
                  both directions: dij=dji
		- Widely studied due to its computational simplicity compared to asymmetric cases.
	- Asymmetric TSP (ATSP)
		- Distances or costs between cities differ based on direction: dij≠dji
		- Common in logistics and routing problems where traffic or transport conditions 
                  differ by direction.
		- TSP with Time Windows (TSP-TW)
		- Adds constraints where each city must be visited within a specified time window.
		- Highly applicable in delivery systems and supply chain logistics.
	- Multi-Depot TSP (MDTSP)
		- Involves multiple starting and ending points (depots), with routes 
                  assigned to different salesmen.
		- Common in large-scale vehicle routing problems.

---

# TSP Variants - Part 2

	- Prize Collecting TSP (PC-TSP)
		- Not all cities need to be visited; each city has a "prize" for visiting it.
		- The goal is to maximize the total prize collected while minimizing travel costs.

- These variants are widely used due to their practical applicability and relevance in industries like transportation, logistics, and network design.

---

# Chosen TSP 

- Classic TSP: The standard optimization problem of finding the shortest tour visiting all cities once.

- Problem Statement:
The project focuses on modeling and solving the Traveling Salesman Problem (TSP) for educational and practical applications. The problem involves finding the shortest possible route for a "salesman" who must visit a given number of cities and return to the starting point. 


---	

# Conclusion

- Global extrema solving/approximating algorithms need to be cherry picked for the specific situation

- Multiple algorithms can be chained to acquire the needed attributes

- The Traveling Salesman Problem is a classic optimization problem that can be generalized to far reaching areas

