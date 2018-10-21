/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

const $listLength = $('.student-item').length;
const $list = $('.student-item');
const numOfPages = Math.ceil($list/10);
const startIndex = 1;
const endIndex = 10;

const test = $list[0];




// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const showPage = () => {
  $($list).hide();
  for (let i = 0; i<= numOfPages; i++) {
    if ((i >= startIndex*10)-10 && i <= endIndex*10) {
      $list[i].show();
      console.log(test);
    } else {
      $list[i].hide();
    }
  }
}

showPage();


// Create and append the pagination links - Creating a function that can do this is a good approach
$('.page').append(`<div class ='pagination'></div>`);
for (let i = 1; i <= numOfPages; i++) {
  $('.pagination').append(`<li><a href='#'>${i}</a></li>`);
}



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






