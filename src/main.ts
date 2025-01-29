import '/styles/styles.scss';

import { fetchRandomFact } from './api.ts';

// Call the function and display the result
fetchRandomFact().then(fact => {
    console.log(fact); // or update the UI accordingly
});

// Grab DOM elements
const taskInput = document.getElementById('task-input') as HTMLInputElement;
const taskForm = document.querySelector('.todo__form') as HTMLFormElement;
const taskList = document.querySelector('.todo__list') as HTMLUListElement;

// Function to create a new task
function createTask(taskContent: string): HTMLLIElement {
    const taskItem = document.createElement('li');
    taskItem.classList.add('todo__item');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('todo__checkbox');

    const taskText = document.createElement('span');
    taskText.classList.add('todo__task');
    taskText.textContent = taskContent;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo__delete-button');
    deleteButton.textContent = 'Delete';

    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Add event listener to checkbox to toggle completion
    taskCheckbox.addEventListener('change', () => {
        taskText.classList.toggle('todo__task--completed', taskCheckbox.checked);
    });

    // Append elements to the task item
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Handle form submission to add new task
taskForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const taskContent = taskInput.value.trim();
    if (taskContent !== '') {
        // Create new task and add to list
        const newTask = createTask(taskContent);
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
});

// Function to delete tasks when delete button is clicked
const deleteButtons = document.querySelectorAll('.todo__delete-button');
deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const taskItem = (event.target as HTMLElement).closest('.todo__item');
        if (taskItem) {
            taskList.removeChild(taskItem);
        }
    });
});

// Function to toggle completion on checkbox change
const taskCheckboxes = document.querySelectorAll('.todo__checkbox');
taskCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        const taskText = (event.target as HTMLInputElement).closest('.todo__item')?.querySelector('.todo__task');
        if (taskText) {
            taskText.classList.toggle('todo__task--completed', (event.target as HTMLInputElement).checked);
        }
    });
});


// Function to greet the user based on the time of day
function greetUser(): void {
    const currentTime: Date = new Date(); // Get current date and time
    const hours: number = currentTime.getHours(); // Extract the current hour (0-23)
    let greeting: string = '';

    // Determine the greeting based on the time of day
    if (hours >= 5 && hours < 12) {
        greeting = 'Good morning! Let’s make today productive. ☕️';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Power through your afternoon! What’s next on your list?';
    } else {
        greeting = 'Evenings are for finishing what we started. What’s left?💪';
    }

    // Select the element to update the greeting text
    const greetingElement: HTMLElement | null = document.querySelector('.todo__title');

    // Update the greeting in the DOM if the element exists
    if (greetingElement) {
        greetingElement.textContent = `${greeting}`;
    }
}


// Function to fetch a random fact from an API and place it outside the box
async function fetchRandomFact(): Promise<void> {
    const factContainer: HTMLElement | null = document.querySelector(".fact-container");

    if (!factContainer) return;

    factContainer.classList.add("fact-container--styled"); // Add a class for styling

    try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();

        if (data && data.text) {
            factContainer.textContent = `💡 Did you know? ${data.text}`;
        } else {
            factContainer.textContent = "💡 Here's a fact: You are awesome!";
        }
    } catch (error) {
        console.error("Error fetching fact:", error);
        factContainer.textContent = "💡 Couldn't load a fact. Maybe later!";
    }
}


// 
//Initialize both user greeting and api fact when the page loads
fetchRandomFact();
greetUser();







